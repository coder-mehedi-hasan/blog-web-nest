import { Injectable } from '@nestjs/common';
import { Author, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class AuthorService {
    constructor(private prisma: PrismaService) { }

    //get all author
    async getAllAuthor(): Promise<Author[]> {
        return this.prisma.author.findMany();
    }

    //get author by id 
    async getAuthor(id: number) {
        return this.prisma.author.findUnique({
            where: { id: Number(id) }
        });
    }

    //create author
    createAuthor(data: Prisma.AuthorCreateInput) {
        return this.prisma.author.create({ data })
    }

    //update author
    updateAuthor(id: number, data: Prisma.AuthorCreateInput) {
        return this.prisma.author.update({
            where: { id: Number(id) },
            data: { name: data.address, phone: data.phone, address: data.address, email: data.email }
        })
    }

    //delete author
    deleteAuthor(id: number) {
        return this.prisma.author.delete({ where: { id: Number(id)} })
    }


}