import { UserGender } from "../types/userGender.type";
import { UserRole } from "../types/userRole.type";
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
    isVerified: boolean;
}
