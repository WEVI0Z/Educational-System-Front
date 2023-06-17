import { User } from "./user.interface";

export interface Statistic {
    user: User,
    document: Document,
    createdAt: Date
}