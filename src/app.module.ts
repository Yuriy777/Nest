import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env_example',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      playground: true,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'ProjectDB',
      entities: [__dirname + '/../**/*.entity.js'],
      migrations: ['./migration/*.js'],
      migrationsTableName: 'migrations',
      // @ts-ignore
      cli: {
        migrationsDir: './migration/',
      },
      synchronize: false,
      poolErrorHandler: (err) => {
        console.log('typeormErr', err);
      },
    }),
    UsersModule,
  ],
})
export class AppModule {}
