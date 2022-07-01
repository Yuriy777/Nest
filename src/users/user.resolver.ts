import {
  Args,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Int,
} from '@nestjs/graphql';
import { PostsService } from '../posts/posts.service';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
  ) {}
  @Query((returns) => User)
  async user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById(id);
  }

  @ResolveField()
  async posts(@Parent() user: User) {
    const { id } = user;
    return this.postsService.findAll({ authorId: id });
  }
}
