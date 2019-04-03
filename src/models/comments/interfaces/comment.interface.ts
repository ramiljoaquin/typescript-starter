import { Document } from 'mongoose';

export interface Comment extends Document {
  readonly title: string;
  readonly content: string;
  readonly userId: string;
}
