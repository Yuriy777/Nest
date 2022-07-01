import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Post } from '../posts/post.entity';
// import { Role } from '../roles/role.entity';

@ObjectType()
@Entity('user')
export class User {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column()
  firstName?: string;

  @Field({ nullable: true })
  @Column()
  lastName?: string;

  @Field()
  @Column({ unique: true })
  email: string;

  @Field()
  @Column('text')
  password: string;

  @Field((type) => [Post])
  posts: Post[];

  // @Field((type) => Role)
  // @Column('text')
  // role: Role;

  @Field()
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
