import { useEffect, useState } from 'react';
import './CourseContext.scss';
import { ICourse } from '../../types/interfaces.types';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import CourseList from '../course-list/CourseList';
import useAuthContext from '../../hooks/useAuthContex';
import getCourses from '../../services/course-service/getCourses/getCourses';

const CourseContext = () => {

  const [courses, setCourses] = useState<ICourse[]>([]);
  const { getLocalStorageItem, clearLocalStorageItem, setLocalStorageItem } = useLocalStorage(); 
  const navigate = useNavigate();
  const { token } = useAuthContext();

  const handleCourses = () => {
    getCourses({
      setCourses: setCourses,
      token: token
    });
  }

  useEffect(() => {
    handleCourses();
  }, []);

  return (
    <CourseList 
      clearLocalStorageItem={clearLocalStorageItem}
      courses={courses}
      setCourses={setCourses}
      getLocalStorageItem={getLocalStorageItem}
      setLocalStorageItem={setLocalStorageItem}
      navigate={navigate}
    />
  );

}

export default CourseContext;
