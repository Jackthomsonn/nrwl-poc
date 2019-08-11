import { Controller, Get, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { IUser } from '@test-poc/data';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) { }

  @Get()
  getUsers(): IUser[] {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param() params: any): IUser {
    return this.userService.getUser(params.id);
  }
}
