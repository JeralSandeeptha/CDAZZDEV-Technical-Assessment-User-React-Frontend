import { isAxiosError } from "axios";
import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { EnrollCourseFunctionProps } from "../../../types/functions.types";

const enrollCourse = async (props: EnrollCourseFunctionProps) => {
    props.setIsLoading(true);
    try {
        const res = await AxiosClient.post(`${baseURL}/enrollment`, {
            student_id: props.studentId,
            course_id: props.courseId,
            enrollment_date: new Date(),
            status: 'active'
        }, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setIsSuccess(true);
        setTimeout(() => {
            props.setIsSuccess(false);
            props.setIsLoading(false);
        }, 1000)
    } catch (error: unknown) {
        if (isAxiosError(error) && error.response?.status === 400) {
            props.setIsAlreadyEnrolled(true);
            props.setIsLoading(false);
            setTimeout(() => {
                props.setIsAlreadyEnrolled(false);
            }, 4000)
        }
        console.error(error);
        props.setIsError(true);
        setTimeout(() => {
            props.setIsError(false);
            props.setIsLoading(false);
        }, 4000)
    }
}

export default enrollCourse;