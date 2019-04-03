import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './models/posts/posts.module';
import { CommentsModule } from './models/comments/comments.module';

@Module({
  imports: [PostsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
