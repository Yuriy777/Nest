import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { PostsService } from './posts.service';

@Module({
  // imports: [TypeOrmModule.forFeature([Post])],
  providers: [Post],
  exports: [Post],
})
export class PostsModule {}
