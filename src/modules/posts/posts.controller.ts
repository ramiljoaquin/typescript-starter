import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreatePostModel } from './create-post.model';
import { PostsServiceQueries } from '../../queries/posts/posts.service.queries';
import { PostsServiceCommand } from '../../commands/posts/posts.service.command';
import { Post as PostInterface } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postsServiceCommand: PostsServiceCommand,
    private readonly postsServiceQueries: PostsServiceQueries,
  ) {}

  @Post()
  async create(@Body() createPostModel: CreatePostModel) {
    this.postsServiceCommand.create(createPostModel);
  }

  @Get()
  async findAll(): Promise<PostInterface[]> {
    return this.postsServiceQueries.findAll();
  }
}
