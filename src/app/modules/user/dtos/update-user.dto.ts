import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, MaxLength, ValidateIf, } from "class-validator";
import { UserGender } from "../types/userGender.type";

export class UpdateUserDto {

    @IsOptional()
    @IsString({ message: "Name is not valid" })
    name?: string;

    @IsOptional()
    @IsString({ message: "Expertise is not valid" })
    expertise?: string;

    @IsOptional()
    @IsDateString({ message: "Date of Birth is not valid" })
    dob?: Date;

    @IsOptional()
    @IsEnum(UserGender, { message: "Gender is not valid" })
    gender?: UserGender;

    @IsOptional()
    @IsString({ message: "Country is not valid" })
    country?: string;

    @IsOptional()
    @IsString({ message: "Avatar is not valid" })
    avatar?: string;

    @IsOptional()
    @IsString({ message: "Mobile is not valid" })
    mobile?: string;

    @IsOptional()
    @MaxLength(500, { message: "Bio must not be more than 500 characters" })
    @IsString({ message: "Bio is not valid" })
    bio?: string;

}