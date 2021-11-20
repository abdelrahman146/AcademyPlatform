import { Field, InputType } from '@nestjs/graphql';
import { IsDateString } from 'class-validator';
import { IsAfter } from 'sequelize-typescript';

@InputType('QuizCreateInput')
export class QuizCreateInputDTO {
  @Field()
  title: string;

  @Field({ nullable: true })
  @IsDateString()
  @IsAfter(Date.now().toLocaleString())
  startingDate?: Date;

  @Field({ nullable: true })
  @IsDateString()
  @IsAfter(Date.now().toLocaleString())
  endingDate?: Date;

  @Field({ nullable: true })
  isLocked: boolean;

  @Field()
  minScoreToPass!: number;

  @Field()
  sectionId: number;
}
