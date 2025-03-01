import CourseContext from '../../components/course-context/CourseContext';
import Navbar from '../../components/navbar/Navbar';
import PageHeader from '../../components/page-header/PageHeader';
import './DashboardPage.scss';

const DashboardPage = () => {

  return (
    <>
     <Navbar />
     <PageHeader  
      title='Our Courses'
      description='View all the courses we have. Enroll now to follow the courses.'
     />
     <CourseContext />
    </>
  );

}

export default DashboardPage;