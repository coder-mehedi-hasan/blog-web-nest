import { Module } from '@nestjs/common';
import { AuthorModule } from './author/author.module';
import { CategoryModule } from './category/category.module';
import { TagsModule } from './tags/tags.module';
import { BlogModule } from './blogs/blog.module';

@Module({
  imports: [AuthorModule,CategoryModule,TagsModule, BlogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
