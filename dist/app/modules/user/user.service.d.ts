export interface User {
    id: number;
    name: string;
    email: string;
}
export declare class UserService {
    private users;
    private incrementor;
    constructor();
    findOne(id: number): User;
    findOneByEmail(email: string): any;
    findMany(): {
        [id: number]: User;
    };
    insertOne(user: {
        email: string;
        name: string;
    }): User;
    updateOne(id: any, user: {
        email?: string;
        name?: string;
    }): User;
    deleteOne(id: any): boolean;
}
