import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsServiceCommand } from '../../commands/posts/posts.service.command';
import { PostsServiceQueries } from '../../queries/posts/posts.service.queries';
import { postsProviders } from './posts.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [PostsServiceCommand, PostsServiceQueries, ...postsProviders],
})
export class PostsModule {}
