import { Dispatch, SetStateAction } from "react";
import { IUser } from "./interfaces.types";
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