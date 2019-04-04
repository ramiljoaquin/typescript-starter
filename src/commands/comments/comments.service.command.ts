import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Comment } from '../../modules/comments/interfaces/comment.interface';
import { CreateCommentModel } from '../../modules/comments/create-comments.model';
import { COMMENT_MODEL_PROVIDER } from '../../constants';

@Injectable()
export class CommentsServiceCommand {
  constructor(
    @Inject(COMMENT_MODEL_PROVIDER)
    private readonly commentModel: Model<Comment>,
  ) {}

  async create(createCommentModel: CreateCommentModel): Promise<Comment> {
    const createdComment = new this.commentModel(createCommentModel);
    return await createdComment.save();
  }
}
