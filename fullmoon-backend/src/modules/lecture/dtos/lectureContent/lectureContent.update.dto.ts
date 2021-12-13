import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType('LectureContentUpdateInput')
export class LectureContentUpdateInputDTO {
  @Field({ nullable: true })
  @IsOptional()
  article?: string;

  @Field({ nullable: true })
  @IsOptional()
  streamLink?: string;

  @Field({ nullable: true })
  @IsOptional()
  videoLink?: string;

  @Field({ nullable: true })
  @IsOptional()
  conferenceId?: string;
}
