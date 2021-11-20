import { Field, InputType } from '@nestjs/graphql';

@InputType('EnrollmentUpdateInput')
export class EnrollmentUpdateInputDTO {
  @Field()
  passed!: boolean;
}
