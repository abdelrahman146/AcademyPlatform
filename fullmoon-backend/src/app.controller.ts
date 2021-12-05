import { Controller, Post, UseGuards, Body, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './modules/auth/auth.service';
import { LoginDTO } from './modules/auth/dtos/login.dto';

@Controller()
export class AppController {
  userService: any;
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDTO: LoginDTO) {
    const user = await this.userService.findByLogin(loginDTO);
    const payload = {
      email: user.email,
    };
    const token = await this.authService.signPayload(payload);
    return { user, token };
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
