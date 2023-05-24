export interface User {
    id?: number,
    login: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    middleName: string,
    isTeacher?: boolean
}

export interface UpdateUser {
    id: number,
    login: string,
    email: string,
    firstName: string,
    lastName: string,
    middleName: string,
}