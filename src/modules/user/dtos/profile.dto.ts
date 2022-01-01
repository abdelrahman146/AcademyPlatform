import { Expose } from "class-transformer";
import { UserGender, UserRole } from "../types/user.types";

export class ProfileDto {

    @Expose()
    id!: string;

    @Expose()
    role!: UserRole;

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

}