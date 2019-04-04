import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCommentModel } from './create-comments.model';
import { CommentsServiceQueries } from '../../queries/comments/comments.service.queries';
import { CommentsServiceCommand } from '../../commands/comments/comments.service.command';
import { Comment } from './interfaces/comment.interface';

@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsServiceCommand: CommentsServiceCommand,
    private readonly commentsServiceQueries: CommentsServiceQueries,
  ) {}

  @Post()
  async create(@Body() createCommentModel: CreateCommentModel) {
    this.commentsServiceCommand.create(createCommentModel);
  }

  @Get()
  async findAll(): Promise<Comment[]> {
    return this.commentsServiceQueries.findAll();
  }
}
