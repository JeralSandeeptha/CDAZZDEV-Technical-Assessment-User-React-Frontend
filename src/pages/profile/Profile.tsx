import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/page-header/PageHeader';
import './Profile.scss';
import {  IEnrollment, IUser } from '../../types/interfaces.types';
import useAuthContext from '../../hooks/useAuthContex';
import getUser from '../../services/user-service/getUser/getUser';
import useLocalStorage from '../../hooks/useLocalStorage';
import { TextField } from '@mui/material';
import getEnrollmentsByStudentId from '../../services/enrollment-service/get-enrollments-by-studentId/getEnrollmentsByStudentId';
import Course, { CourseDescription, CourseEndDate, CourseImage, CourseInstructor, CourseStartDate, CourseTitle } from '../../components/course/Course';

const Profile = () => {

  const [student, setStudent] = useState<IUser>();
  const [enrollments, setEnrollments] = useState<IEnrollment[]>([]);
  const { token } = useAuthContext();
  const { getLocalStorageItem } = useLocalStorage();

  const handleGetUser = () => {
    getUser({
      setStudent: setStudent,
      studentId: getLocalStorageItem('user').id,
      token: token
    });
  }

  const handleGetEnrollments = () => {
    getEnrollmentsByStudentId({
      setEnrollments: setEnrollments,
      studentId: getLocalStorageItem('user').id,
      token: token
    });
  }

  useEffect(() => {
    handleGetUser();
    handleGetEnrollments();
  }, []);

  return (
    <>
      <Navbar />

      <PageHeader
        title={`Hello ${getLocalStorageItem('user').email.split('@')[0]},`}
        description='This is your account profile section. This inlude your account details.'
      />

      <div className="account-details">
        <div className="account-details-inner">

          <TextField
            label="Student Id"
            id="outlined-size-small"
            size="small"
            className="text-field"
            name="student_id"
            value={student?.id || ''}
            disabled
            data-testid='student_id'
          />
          <TextField
            label="First Name"
            id="outlined-size-small"
            size="small"
            className="text-field"
            name="fname"
            value={student?.fname || ''}
            disabled
            data-testid='fname'
          />
          <TextField
            label="Last Name"
            id="outlined-size-small"
            size="small"
            className="text-field"
            name="lname"
            value={student?.lname || ''}
            disabled
            data-testid='lname'
          />
          <TextField
            label="Email"
            id="outlined-size-small"
            size="small"
            className="text-field"
            name="email"
            value={student?.email || ''}
            disabled
            data-testid='email'
          />
          <TextField
            label="Address"
            id="outlined-size-small"
            size="small"
            className="text-field"
            name="address"
            value={student?.address || ''}
            disabled
            data-testid='address'
          />
          <TextField
            label="Mobile"
            id="outlined-size-small"
            size="small"
            className="text-field"
            name="mobile"
            value={student?.mobile || ''}
            disabled
            data-testid='mobile'
          />
          <TextField
            label="Joined Date"
            id="outlined-size-small"
            size="small"
            className="text-field"
            name="created_at"
            value={student?.created_at || ''}
            disabled
            data-testid='created_at'
          />

        </div>
      </div>

      <PageHeader
        title='My Enrollments'
        description='This is the course enrollments section. This inludes all of your course enrollments.'
      />

      <div className="enrollments">
        <div className="enrollments-inner">

          {
            enrollments?.length === 0 ? (
              <h4 className='no-text'>No Course Enrollments Yet.</h4>
            ) : (
              <div className="enrollments-list">
                {
                  enrollments?.map((enrollment) => {
                    return (
                      <Course key={enrollment.id}>

                        <div className='enrollment-inner'>
                          
                          <div className="enrollment-up">
                            <CourseImage />
                            <div className='enrollment-main-infor'>
                              <CourseTitle title={enrollment.title}/>
                              <CourseInstructor instructor={`Offered By: ${enrollment.instructor}`}/>
                              <CourseDescription description={enrollment.description}/>
                            </div>
                          </div>

                          <div className="enrollment-down">
                            <CourseStartDate start_date={`Start Date: ${enrollment.start_date?.split('T')[0]}`}/>
                            <CourseEndDate end_date={`End Date: ${enrollment.end_date?.split('T')[0]}`}/> 
                          </div>

                        </div>

                      </Course>
                    )
                  })
                }
              </div>
            )
          }

        </div>
      </div>
    </>
  );

}

export default Profile;
