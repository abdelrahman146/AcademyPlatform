import { Field, InputType } from '@nestjs/graphql';
import { IsDateString } from 'class-validator';
import { IsAfter } from 'sequelize-typescript';

@InputType('QuizUpdateInput')
export class QuizUpdateInputDTO {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  @IsDateString()
  @IsAfter(Date.now().toLocaleString())
  startingDate?: Date;

  @Field({ nullable: true })
  @IsDateString()
  @IsAfter(Date.now().toLocaleString())
  endingDate?: Date;

  @Field({ nullable: true })
  isLocked?: boolean;

  @Field({ nullable: true })
  minScoreToPass?: number;

  @Field({ nullable: true })
  sectionId?: number;
}
