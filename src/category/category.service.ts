import { Injectable } from '@nestjs/common';
import { Category, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) { }

    //get all category
    async getAllCategory(): Promise<Category[]> {
        return this.prisma.category.findMany();
    }

    //get category by id 
    async getCategory(id: number) {
        return this.prisma.category.findUnique({
            where: { id: Number(id) }
        });
    }

    //create category
    createCategory(data: Prisma.CategoryCreateInput) {
        return this.prisma.category.create({ data })
    }

    //update category
    updateCategory(id: number, data: Prisma.CategoryCreateInput) {
        return this.prisma.category.update({
            where: { id: Number(id) },
            data: { categoryName: data.categoryName }
        })
    }

    //delete category
    deleteCategory(id: number) {
        return this.prisma.category.delete({ where: { id: Number(id) } })
    }


}