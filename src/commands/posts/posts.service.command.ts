import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Post } from '../../modules/posts/interfaces/post.interface';
import { CreatePostModel } from '../../modules/posts/create-post.model';
import { POST_MODEL_PROVIDER } from '../../constants';

@Injectable()
export class PostsServiceCommand {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly postModel: Model<Post>,
  ) {}

  async create(createPostModel: CreatePostModel): Promise<Post> {
    const createdPost = new this.postModel(createPostModel);
    return await createdPost.save();
  }
}
