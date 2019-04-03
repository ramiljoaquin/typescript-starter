import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { Post as PostInterface } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    this.postsService.create(createPostDto);
  }

  @Get()
  async findAll(): Promise<PostInterface[]> {
    return this.postsService.findAll();
  }
}
