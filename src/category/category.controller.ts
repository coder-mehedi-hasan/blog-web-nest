import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { Prisma } from '@prisma/client';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Get('all')
    getAllAuthor() {
        return this.categoryService.getAllCategory()
    }

    @Get(':id')
    getAuthor(
        @Param('id') id: number
    ) {
        return this.categoryService.getCategory(id)
    }

    @Post()
    createAuthor(@Body() data: Prisma.AuthorCreateInput) {
        return this.categoryService.createCategory(data)
    }

    @Put(':id')
    updateAuthor(
        @Param('id') id: number,
        @Body() data: Prisma.AuthorCreateInput
    ) {
        return this.categoryService.updateCategory(id, data);
    }

    @Delete(':id')
    deleteAuthor(
        @Param('id') id: number
    ) {
        return this.categoryService.deleteCategory(id)
    }
}