import { Controller, Post, UseGuards, Body, Get, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './modules/auth/auth.service';
import { LoginDTO } from './modules/auth/types/login.dto';
import { UserService } from './modules/user/services/user.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private authService: AuthService, private userService: UserService) {}

  @Post('login')
  async login(@Body() loginDTO: LoginDTO, @Res() response: Response) {
    const user = await this.userService.findByLogin(loginDTO);
    const payload = {
      email: user.email,
    };

    const token = await this.authService.signPayload(payload);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userJSON } = user.toJSON();
    response
      .cookie('access_token', token, {
        httpOnly: true,
        domain: process.env.DOMAIN || 'localhost', // your domain here!
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 1 month
      })
      .send({ userJSON, token });
  }

  @Get('/onlyauth')
  @UseGuards(AuthGuard('jwt'))
  async hiddenInformation() {
    return 'hidden information';
  }
  @Get('/anyone')
  async publicInformation() {
    return 'this can be seen by anyone';
  }
}
