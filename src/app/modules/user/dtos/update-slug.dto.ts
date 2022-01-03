import { IsString, IsNotEmpty } from "class-validator";

export class UpdateSlugDto {

    @IsString()
    @IsNotEmpty()
    slug!: string;

}