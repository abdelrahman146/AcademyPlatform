import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsOptional, NotEquals } from 'class-validator';

@InputType('QuizUpdateInput')
export class QuizUpdateInputDTO {
  @Field({ nullable: true })
  @NotEquals(null)
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @IsDateString()
  @IsOptional()
  startingDate?: Date;

  @Field({ nullable: true })
  @IsDateString()
  @IsOptional()
  endingDate?: Date;

  @Field({ nullable: true })
  @NotEquals(null)
  @IsOptional()
  isLocked?: boolean;

  @Field({ nullable: true })
  @NotEquals(null)
  @IsOptional()
  minScoreToPass?: number;

  @Field({ nullable: true })
  @NotEquals(null)
  @IsOptional()
  sectionId?: number;
}
