import { Expose } from "class-transformer";
import { UserGender } from "../types/userGender.type";
import { UserRole } from "../types/userRole.type";

export class UserDto {

    @Expose()
    id!: string;

    @Expose()
    role!: UserRole;

    @Expose()
    email!: string;

    @Expose()
    slug?: string;

    @Expose()
    name?: string;

    @Expose()
    expertise?: string;

    @Expose()
    dob?: Date;

    @Expose()
    gender?: UserGender;

    @Expose()
    country?: string;

    @Expose()
    avatar?: string;

    @Expose()
    mobile?: string;

    @Expose()
    bio?: string;

    @Expose()
    isVerified!: boolean;

}