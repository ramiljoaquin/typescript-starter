import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsServiceCommand } from '../../commands/comments/comments.service.command';
import { CommentsServiceQueries } from '../../queries/comments/comments.service.queries';
import { commentsProviders } from './comments.providers';
import { DatabaseModule } from '../../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CommentsController],
  providers: [
    CommentsServiceCommand,
    CommentsServiceQueries,
    ...commentsProviders,
  ],
})
export class CommentsModule {}
