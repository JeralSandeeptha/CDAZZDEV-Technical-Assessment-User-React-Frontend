export type AuthRequest = {
    email: string,
    password: string
}

export interface IToken {
    token: IToken | null
}

export interface IUser{
    id?: number,
    email: string,
    password: string,
    mobile: string,
    address: string,
    fname: string,
    lname: string,
    created_at?: Date,
}

export interface ICourse{
    id?: number,
    image: string,
    title: string,
    description: string,
    instructor: string,
    start_date: string,
    end_date: string,
    created_at?: Date,
    updated_at?: Date,
}

export interface IEnrollment{
    id?: number,
    enrollment_date?: string,
    fname?: string,
    lname?: string,
    email?: string,
    mobile?: string,
    title?: string,
    description?: string,
    instructor?: string,
    start_date?: string,
    end_date?: string,
}