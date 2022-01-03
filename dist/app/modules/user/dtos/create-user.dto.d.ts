import { UserGender } from "../types/userGender.type";
export declare class CreateUserDto {
    email: string;
    password: string;
    name?: string;
    expertise?: string;
    dob?: Date;
    gender?: UserGender;
    country?: string;
    avatar?: string;
    mobile?: string;
    bio?: string;
}
