import { UserGender } from "../types/userGender.type";
import { UserRole } from "../types/userRole.type";
export declare class ProfileDto {
    id: string;
    role: UserRole;
    slug?: string;
    name?: string;
    expertise?: string;
    dob?: Date;
    gender?: UserGender;
    country?: string;
    avatar?: string;
    mobile?: string;
    bio?: string;
}
