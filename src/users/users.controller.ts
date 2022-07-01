import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get('/')
  getUsers() {
    return this.userService.findAll();
  }

  @Get('/:id')
  getUser(@Param('id') id) {
    if (!id) {
      return this.userService.findAll();
    }
    return this.userService.findOneById(Number(id));
  }

  @Post('/user')
  createUser(@Body() user: User) {
    return this.userService.create(user);
  }
}
