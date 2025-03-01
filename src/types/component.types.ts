import React, { Dispatch, JSX, SetStateAction } from "react";
import { ICourse, IToken } from "./interfaces.types";
import { NavigateFunction } from "react-router-dom";

export type BannerProps = {
    title: string
}

export type PrivateRouteProps = {
    element: JSX.Element;
};

export type PublicRouteProps = {
    element: JSX.Element;
};

export type AuthContextType = {
    token: IToken | null;
    setToken: Dispatch<SetStateAction<IToken | null>>;
};

export type CourseListProps = {
    courses: ICourse[],
    setLocalStorageItem: (itemName: string, itemData: unknown) => void,
    clearLocalStorageItem: (itemName: string) => void,
    getLocalStorageItem: (itemName: string) => void,
    navigate: NavigateFunction,
    setCourses: Dispatch<SetStateAction<ICourse[]>>
}

export type CourseProps = {
    children?: React.ReactNode
    image?: string,
    title?: string,
    description?: string,
    instructor?: string,
    start_date?: string,
    end_date?: string,
    created_at?: Date,
    updated_at?: Date,
}

export type PageHeaderProps = {
    title: string,
    description: string
}