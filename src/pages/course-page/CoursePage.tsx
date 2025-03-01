import { useParams } from 'react-router-dom';
import './CoursePage.scss';
import { useEffect, useState } from 'react';
import getCourse from '../../services/course-service/getCourse/getCourse';
import { ICourse } from '../../types/interfaces.types';
import useAuthContext from '../../hooks/useAuthContex';
import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/page-header/PageHeader';
import { Alert, Backdrop, Button, CircularProgress } from '@mui/material';
import enrollCourse from '../../services/enrollment-service/enroll-course/enrollCourse';
import useLocalStorage from '../../hooks/useLocalStorage';
import CheckIcon from '@mui/icons-material/Check';

const CoursePage = () => {
  
    const { courseId } = useParams();
    const [course, setCourse] = useState<ICourse>();
    const { token } = useAuthContext();
    const { getLocalStorageItem } = useLocalStorage();

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);

    const getSingleCourse = () => {
        getCourse({
            courseId: courseId,
            setCourse: setCourse,
            token: token,
        });
    }

    const handleEnroll = () => {
        const isConfirmed = window.confirm('Are you sure want to enroll to this course');
        if(isConfirmed) {
            enrollCourse({
                courseId: courseId,
                studentId: getLocalStorageItem('user').id,
                token: token,
                setIsError: setIsError,
                setIsSuccess: setIsSuccess,
                setIsLoading: setIsLoading,
                setIsAlreadyEnrolled: setIsAlreadyEnrolled
            });
        }
    }

    useEffect(() => {
        getSingleCourse();
    }, []);

    return (
        <>
            <Navbar />
            <PageHeader 
                image={course?.image}
                title={course?.title || ""}
                description={course?.description || ""}
            />
            <div className="course-container">
                <div className="course-container-inner">
                    <div className="course-container-left">
                        <h2 className='ins'>Instructor: {course?.instructor}</h2>
                        <h5 className='timeframe'>Course Starting Date: { course?.start_date.split('T')[0] }</h5>
                        <h5 className='timeframe'>Course End Date: { course?.end_date.split('T')[0] }</h5>
                    </div>
                    <div className="course-container-right">
                        <Button onClick={handleEnroll} data-testid='enroll-button' type="button" variant="contained" size="large" className='control-button'>Enroll To Course</Button>
                    </div>
                </div>
            </div>
            
            {
                isError && (
                <Alert className='alert-message' icon={<CheckIcon fontSize="inherit" />} severity="error">
                    Please try again later
                </Alert>
                )
            }
            
            {
                isAlreadyEnrolled && (
                <Alert className='alert-message' icon={<CheckIcon fontSize="inherit" />} severity="error">
                    You Already Enrolled to this Course
                </Alert>
                )
            }
            
            {
                isSuccess && (
                <Alert className='alert-message' icon={<CheckIcon fontSize="inherit" />} severity="success">
                    Succesfully Enrolled
                </Alert>
                )
            }

            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={isLoading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );

}

export default CoursePage;
