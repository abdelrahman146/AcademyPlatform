import { Field, InputType } from '@nestjs/graphql';
import { IsDateString } from 'class-validator';

@InputType('QuizCreateInput')
export class QuizCreateInputDTO {
  @Field()
  title: string;

  @Field({ nullable: true })
  @IsDateString()
  startingDate?: Date;

  @Field({ nullable: true })
  @IsDateString()
  endingDate?: Date;

  @Field({ nullable: true })
  isLocked: boolean;

  @Field()
  minScoreToPass!: number;

  @Field()
  sectionId: number;
}
