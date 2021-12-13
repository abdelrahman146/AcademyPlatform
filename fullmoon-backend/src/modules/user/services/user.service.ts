import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LoginDTO } from 'src/modules/auth/types/login.dto';
import { UserEntity } from '../entities/user.entity';
import { Payload } from '../types/user.types';
import Encryptor from 'src/lib/encryption';
import { CourseEntity } from 'src/modules/course/entities/course.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserEntity)
    private userEntity: typeof UserEntity,
  ) {}

  async findOneByPayload(payload: Payload) {
    const { email } = payload;
    const user = await this.userEntity.findOne({
      where: {
        email,
      },
      include: [{ model: CourseEntity, as: 'enrollments' }],
    });
    user.enrollments = user.enrollments.map((course) => course.id);
    return user;
  }
  async findByLogin(login: LoginDTO) {
    const { email, password } = login;
    const user = await this.userEntity.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      throw new HttpException('user doesnt exists', HttpStatus.BAD_REQUEST);
    }
    if (await Encryptor.validate(password, user.password)) {
      user.enrollments = user.enrollments.map((course) => course.id);
      return user;
    } else {
      throw new HttpException('invalid credential', HttpStatus.BAD_REQUEST);
    }
  }
}
