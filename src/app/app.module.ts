import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './modules/user/user.entity';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from '../config/configLoader';
import * as cookieParser from 'cookie-parser';
import { SecurityModule } from 'src/lib/utils/security/security.module';
import { StaticsModule } from './modules/statics/statics.module';
import { UploadModule } from 'src/lib/utils/upload/upload.module';
import { CourseModule } from './modules/course/course.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'devdb.sqlite',
      entities: [User],
      synchronize: true,
    }),
    UploadModule,
    SecurityModule,
    UserModule, AuthModule, StaticsModule, CourseModule],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true
      })
    }
  ]
})
export class AppModule {

  constructor(
    private configService: ConfigService
  ) { }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser(this.configService.get<string>("APPCONFIG.COOKIE_SECRET"))).forRoutes("*");
  }
}
