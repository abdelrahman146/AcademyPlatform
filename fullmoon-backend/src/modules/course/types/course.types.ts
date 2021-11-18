import { registerEnumType } from '@nestjs/graphql';

export enum CourseType {
  recorded = 'recorded',
  live = 'live',
}

registerEnumType(CourseType, {
  name: 'CourseType',
});
