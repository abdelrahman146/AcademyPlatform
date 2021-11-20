import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';
import { IsDate, IsEnum, IsOptional, IsString, IsEmail, IsMobilePhone } from 'class-validator';
import { UserGender } from '../../types/user.types';

@InputType('UserCreateInput')
export class UserCreateInputDTO {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  firstName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  lastName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  title?: string;

  @Field(() => GraphQLISODateTime, { nullable: true })
  @IsOptional()
  @IsDate()
  dob?: Date;

  @Field(() => UserGender, { nullable: true })
  @IsOptional()
  @IsEnum(UserGender)
  gender?: UserGender;

  @Field()
  @IsEmail()
  email!: string;

  @Field()
  @IsString()
  password: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  country?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  avatar?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsMobilePhone('ar-SA')
  mobile?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  bio?: string;
}
