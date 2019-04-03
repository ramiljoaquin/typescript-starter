import { Connection } from 'mongoose';

import { CommentSchema } from './comments.schema';
import { COMMENT_MODEL_PROVIDER, DB_PROVIDER } from '../../constants';

export const commentsProviders = [
  {
    provide: COMMENT_MODEL_PROVIDER,
    useFactory: (connection: Connection) =>
      connection.model('Comment', CommentSchema),
    inject: [DB_PROVIDER],
  },
];
