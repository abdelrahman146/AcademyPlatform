import { IsString } from "class-validator";

export class UpdatePasswordDto {

    @IsString()
    oldpass!: string;

    @IsString()
    newpass!: string;

}