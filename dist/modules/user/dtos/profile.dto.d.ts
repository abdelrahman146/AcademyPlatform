import { UserGender, UserRole } from "../types/user.types";
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
