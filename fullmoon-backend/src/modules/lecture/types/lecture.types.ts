import { registerEnumType } from '@nestjs/graphql';

export enum LectureType {
  VIDEO = 'video',
  STREAM = 'stream',
  CONFERENCE = 'conference',
  ARTICLE = 'article',
}

registerEnumType(LectureType, {
  name: 'LectureType',
});
