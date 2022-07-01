import { Injectable } from '@nestjs/common';
const posts = [
  {
    id: 1,
    title: 'first',
    description: 'rteflvkdsafojvoid fjkkdjf k ajsdlfkjas djklfhaskjd jfasdhfia',
    authorId: 1,
  },
  {
    id: 2,
    title: 'second',
    description: 'rteflvkdsafojvoid fjkkdjf k ajsdlfkjas djklfhaskjd jfasdhfia',
    authorId: 1,
  },
  {
    id: 3,
    title: 'third',
    description: 'lorem ipsum',
    authorId: 2,
  },
];
@Injectable()
export class PostsService {
  findOneById(postId: number) {
    return posts.find((post) => post.id === postId);
  }

  findAll(authorId) {
    return posts;
  }
}
