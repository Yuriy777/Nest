import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PostsService } from './posts.service';

@Module({
  // imports: [TypeOrmModule.forFeature([Post])],
  providers: [PostsService, Post],
  exports: [PostsService, Post],
})
export class PostsModule {}
