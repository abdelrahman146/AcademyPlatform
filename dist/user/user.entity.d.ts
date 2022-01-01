import { UserGender, UserRole } from './types/user.types';
export declare class User {
    id: string;
    role: UserRole;
    email: string;
    password?: string;
    slug: string;
    name?: string;
    expertise?: string;
    dob?: Date;
    gender?: UserGender;
    country?: string;
    avatar?: string;
    mobile?: string;
    bio?: string;
    isActive: boolean;
    isValidated: boolean;
}
