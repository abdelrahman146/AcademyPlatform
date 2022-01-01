import { UserGender, UserRole } from "../types/user.types";
export declare class UserDto {
    id: string;
    role: UserRole;
    email: string;
    slug?: string;
    name?: string;
    expertise?: string;
    dob?: Date;
    gender?: UserGender;
    country?: string;
    avatar?: string;
    mobile?: string;
    bio?: string;
    isValidated: boolean;
}
