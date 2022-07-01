import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from '../posts/posts.module';
// import { RolesModule } from '../roles/roles.module';
import { User } from './user.entity';
import { UserResolver } from './user.resolver';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserResolver],
  imports: [TypeOrmModule.forFeature([User]), PostsModule],
})
export class UsersModule {}
