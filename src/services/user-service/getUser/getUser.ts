import AxiosClient from "../../../api/AxiosClient";
import { baseURL } from "../../../api/baseURL";
import { GetSingleUserFunctionProps } from "../../../types/functions.types";

const getUser = async (props: GetSingleUserFunctionProps) => {
    try {
        const res = await AxiosClient.get(`${baseURL}/student/${props.studentId}`, {
            headers: {
                Authorization: `Bearer ${props.token}`
            }
        });
        console.log(res.data.data);
        props.setStudent(res.data.data);
    } catch (error) {
        console.error(error);
    }
}

export default getUser;