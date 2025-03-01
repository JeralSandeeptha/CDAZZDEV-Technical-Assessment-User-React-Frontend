import { Dispatch, SetStateAction } from "react";
import { AuthRequest, ICourse, IToken, IUser } from "./interfaces.types";
import { NavigateFunction } from "react-router-dom";

export type AuthProviderProps = {
    children: React.ReactNode
}

export type RegisterUserFunctionProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    user: IUser,
    navigate: NavigateFunction
}

export type LoginUserFunctionProps = {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    user: AuthRequest,
    navigate: NavigateFunction,
    setLocalStorageItem: (itemName: string, itemData: unknown) => void,
    setToken: Dispatch<SetStateAction<IToken | null>>
}

export type HandleLoginFunctionProps = { email: string, password: string };

export type GetAllCouresFunctionProps = {
    token: IToken | null,
    setCourses: Dispatch<SetStateAction<ICourse[]>>
}

export type GetSingleCourseFunctionProps = {
    setCourse: Dispatch<SetStateAction<ICourse | undefined>>,
    token: IToken | null,
    courseId: string | undefined
}

export type GetSingleUserFunctionProps = {
    setStudent: Dispatch<SetStateAction<IUser | undefined>>,
    token: IToken | null,
    studentId: string
}

export type EnrollCourseFunctionProps = {
    token: IToken | null,
    courseId: string | undefined
    studentId: string,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setIsError: Dispatch<SetStateAction<boolean>>,
    setIsSuccess: Dispatch<SetStateAction<boolean>>,
    setIsAlreadyEnrolled: Dispatch<SetStateAction<boolean>>,
}