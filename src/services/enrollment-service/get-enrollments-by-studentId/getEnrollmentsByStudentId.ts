import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { GetEnrollmentsByStudentIdProps } from "../../../types/functions.types";

const getEnrollmentsByStudentId = async (props: GetEnrollmentsByStudentIdProps) => {
    try {
        const res = await AxiosClient.get(`${baseURL}/enrollment/get-enrollments-by-studentId/${props.studentId}`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setEnrollments(res.data.data);
    } catch (error) {
        console.error(error);
    }
}

export default getEnrollmentsByStudentId;