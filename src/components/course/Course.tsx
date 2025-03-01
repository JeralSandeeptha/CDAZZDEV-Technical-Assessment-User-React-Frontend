import { Button } from '@mui/material';
import { CourseProps } from '../../types/component.types';
import './Course.scss';

const Course = (props: CourseProps) => {

  return (
    <div className='course'>
      { props.children }
    </div>
  );

}

export default Course;

export const CourseImage = (props: CourseProps) => {
    return (
        <img src={props.image} alt={props.image} className='course-img'/>
    );
}
export const CourseTitle = (props: CourseProps) => {
    return (
        <h1 className='course-title'>{props.title}</h1>
    );
}
export const CourseDescription = (props: CourseProps) => {
    return (
        <h5 className='course-description'>{props.description}</h5>
    );
}
export const CourseInstructor = (props: CourseProps) => {
    return (
        <h4 className='course-instructor'>{props.instructor}</h4>
    );
}
export const CourseStartDate = (props: CourseProps) => {
    return (
        <h4 className='course-start_date'>{props.start_date}</h4>
    );
}
export const CourseEndDate = (props: CourseProps) => {
    return (
        <h4 className='course-end_date'>{props.end_date}</h4>
    );
}
export const CourseAddedDate = (props: CourseProps) => {
    const formattedDate = props.created_at?.toLocaleDateString();
    return (
        <h4 className='course-created_at'>{formattedDate}</h4>
    );
}
export const CourseLastUpdatedDate = (props: CourseProps) => {
    const formattedDate = props.updated_at?.toLocaleDateString();
    return (
        <h4 className='course-updated_at'>{formattedDate}</h4>
    );
}
export const CourseMoreDetailsButton = (props: CourseProps) => {
    return (
        <Button data-testid='task-button' type="button" variant="contained" size="small" className='control-button'>{ props.children }</Button>
    );
}

Course.CourseImage = CourseImage;
Course.CourseTitle = CourseTitle;
Course.CourseDescription = CourseDescription;
Course.CourseInstructor = CourseInstructor;
Course.CourseStartDate = CourseStartDate;
Course.CourseEndDate = CourseEndDate;
Course.CourseAddedDate = CourseAddedDate;
Course.CourseLastUpdatedDate = CourseLastUpdatedDate;
Course.CourseMoreDetailsButton = CourseMoreDetailsButton;