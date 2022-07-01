import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from '../../posts/models/post.model';

@ObjectType()
@Entity({ name: 'user' })
export class User {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column({ name: 'firstName' })
  firstName?: string;

  @Field({ nullable: true })
  @Column({ name: 'lastName' })
  lastName?: string;

  @Field()
  @Column({ name: 'email' })
  email: string;

  @Field()
  @Column('text')
  password: string;

  @Field((type) => [Post])
  posts: Post[];
}
