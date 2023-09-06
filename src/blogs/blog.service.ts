import { Blog } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
    constructor(private prisma: PrismaService) { }

    //get all blog
    async getAllBlog(): Promise<Blog[]> {
        return this.prisma.blog.findMany();
    }

    //get blog by id
    async getBlog(id: number) {
        return this.prisma.blog.findUnique({
            where: { id: Number(id) }
        });
    }

    //create blog
    createBlog(data: Prisma.BlogCreateInput) {
        return this.prisma.blog.create({ data })
    }

    //update blog
    updateBlog(id: number, data: Prisma.BlogCreateInput) {
        return this.prisma.blog.update({
            where: { id: Number(id) },
            data
        })
    }

    //delete blog 
    deleteBlog(id: number) {
        return this.prisma.blog.delete({ where: { id: Number(id) } })
    }


    //query by category
    async queryByCategory(category: string) {
        const validCategory = await this.prisma.category.findUnique({ where: { categoryName: category } })
        if (!validCategory) {
            return validCategory
        }
        const validBlog = await this.prisma.blog.findMany({ where: { categoryId: Number(validCategory.id) } })
        return validBlog
    }

    //query by author
    async queryByAuthor(author: string) {
        const validAuthor = await this.prisma.author.findFirst({ where: { name: author } })
        if (!validAuthor) {
            return validAuthor
        }
        const validBlog = await this.prisma.blog.findMany({ where: { authorId: Number(validAuthor.id) } })
        return validBlog
    }
}