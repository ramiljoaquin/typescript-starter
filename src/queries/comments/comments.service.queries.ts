import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Comment } from '../../models/comments/interfaces/comment.interface';
import { COMMENT_MODEL_PROVIDER } from '../../constants';

@Injectable()
export class CommentsServiceQueries {
  constructor(
    @Inject(COMMENT_MODEL_PROVIDER)
    private readonly commentModel: Model<Comment>,
  ) {}

  async findAll(): Promise<Comment[]> {
    return await this.commentModel.find().exec();
  }
}
