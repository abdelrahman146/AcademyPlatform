import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';
import { IsDate, IsEnum, IsOptional, IsString, IsEmail, IsMobilePhone, NotEquals } from 'class-validator';
import { UserGender, UserRole } from '../../types/user.types';

@InputType('UserUpdateInput')
export class UserUpdateInputDTO {
  @Field(() => UserRole, { nullable: true })
  @IsEnum(UserRole)
  @IsOptional()
  @NotEquals(null)
  role?: UserRole;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  firstName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  lastName?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  title?: string;

  @Field(() => GraphQLISODateTime)
  @IsDate()
  @IsOptional()
  dob?: Date;

  @Field(() => UserGender)
  @IsEnum(UserGender)
  @NotEquals(null)
  @IsOptional()
  gender?: UserGender;

  @Field({ nullable: true })
  @IsEmail()
  @NotEquals(null)
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  country?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  avatar?: string;

  @Field({ nullable: true })
  @IsMobilePhone('ar-SA')
  @IsOptional()
  mobile?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  bio?: string;
}
