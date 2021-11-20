import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { IsDate, IsEnum, IsOptional, IsString, IsEmail, IsMobilePhone } from 'class-validator';
import { UserGender } from '../types/user.types';

@ObjectType('UserInput')
export class UserInputDTO {
  @IsOptional()
  @IsString()
  @Field()
  firstName?: string;

  @IsOptional()
  @IsString()
  @Field()
  lastname?: string;

  @IsOptional()
  @IsString()
  @Field()
  title?: string;

  @IsOptional()
  @IsDate()
  @Field(() => GraphQLISODateTime)
  dob?: Date;

  @IsOptional()
  @IsEnum(UserGender)
  @Field(() => UserGender)
  gender?: UserGender;

  @IsEmail()
  @Field()
  email!: string;

  @IsString()
  @Field()
  password: string;

  @IsOptional()
  @IsString()
  @Field()
  country?: string;

  @IsOptional()
  @IsString()
  @Field()
  avatar?: string;

  @IsOptional()
  @IsMobilePhone('ar-SA')
  @Field()
  mobile?: string;

  @IsOptional()
  @IsString()
  @Field()
  bio?: string;
}
