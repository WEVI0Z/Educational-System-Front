export interface Document {
    id?: number,

    title: string,

    file: File | string,

    category: string,

    createdAt: Date
}