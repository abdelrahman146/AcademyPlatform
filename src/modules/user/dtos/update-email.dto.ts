import { IsString, IsEmail } from "class-validator";

export class UpdateEmailDto {

    @IsString()
    password!: string;

    @IsEmail()
    newEmail!: string;

}