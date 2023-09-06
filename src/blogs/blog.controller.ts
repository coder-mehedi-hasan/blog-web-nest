import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BlogService } from "./blog.service";
import { Prisma } from "@prisma/client";


@Controller('blog')
export class BlogController {
    constructor(private blogService: BlogService) { }

    @Get('all')
    getAllBlog() {
        return this.blogService.getAllBlog();
    }

    @Get('find/:id')
    getBlog(
        @Param('id') id: number
    ) {
        return this.blogService.getBlog(id)
    }

    @Post()
    createAuthor(@Body() data: Prisma.BlogCreateInput) {
        return this.blogService.createBlog(data);
    }

    @Put(':id')
    updateAuthor(
        @Param('id') id: number,
        @Body() data: Prisma.BlogCreateInput
    ) {
        return this.blogService.updateBlog(id, data);
    }

    @Delete(':id')
    deleteAuthor(
        @Param('id') id: number
    ) {
        return this.blogService.deleteBlog(id)
    }

    @Get('category/:category')
    queryByCategory(
        @Param('category') category: string
    ) {
        return this.blogService.queryByCategory(category)
    }


    @Get('author/:author')
    queryByAuthor(
        @Param('author') author?: string
    ) {
        return this.blogService.queryByAuthor(author);
    }

}