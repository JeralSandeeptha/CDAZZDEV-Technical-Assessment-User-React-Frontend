import { Link } from 'react-router-dom';
import { CourseListProps } from '../../types/component.types';
import Course, { CourseDescription, CourseImage, CourseInstructor, CourseTitle } from '../course/Course';
import './CourseList.scss';

const CourseList = (props: CourseListProps) => {

  return (
    <div className='course-list'>
      <div className="course-list-inner">

        {
          props.courses.length === 0 ? (
            <h4 className='no-content-text'>No Courses Available Yet.</h4>
          ) : (
            <div className='course-lists'>
              {
                props.courses.map((course) => {
                  return (
                    <Link to={`/course/${course.id}`}>
                      <Course key={course.id}>
                        <CourseImage image={course.image}/>
                        <div className='course-content'>
                          <CourseTitle title={course.title}/>
                          <CourseDescription description={course.description}/>
                          <hr />
                          <CourseInstructor instructor={`Conducted By: ${course.instructor}`}/>
                        </div>
                      </Course>
                    </Link>
                  )
                })
              }
            </div>
          )
        }
      </div>
    </div>
  );

}

export default CourseList;
