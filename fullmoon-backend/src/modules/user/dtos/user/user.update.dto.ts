import { Field, GraphQLISODateTime, ID, InputType } from '@nestjs/graphql';
import { IsDate, IsEnum, IsOptional, IsString, IsEmail, IsMobilePhone } from 'class-validator';
import { UserGender, UserRole } from '../../types/user.types';

@InputType('UserUpdateInput')
export class UserUpdateInputDTO {
  @Field(() => UserRole, { nullable: true })
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

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

  @Field(() => GraphQLISODateTime)
  @IsOptional()
  @IsDate()
  dob?: Date;

  @Field(() => UserGender)
  @IsOptional()
  @IsEnum(UserGender)
  gender?: UserGender;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;

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
