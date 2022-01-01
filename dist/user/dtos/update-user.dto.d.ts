import { UserGender } from "../types/user.types";
export declare class UpdateUserDto {
    email?: string;
    name?: string;
    expertise?: string;
    dob?: Date;
    gender?: UserGender;
    country?: string;
    avatar?: string;
    mobile?: string;
    bio?: string;
}
