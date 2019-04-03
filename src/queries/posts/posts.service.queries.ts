import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Post } from '../../models/posts/interfaces/post.interface';
import { POST_MODEL_PROVIDER } from '../../constants';

@Injectable()
export class PostsServiceQueries {
  constructor(
    @Inject(POST_MODEL_PROVIDER) private readonly postModel: Model<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postModel.find().exec();
  }
}
