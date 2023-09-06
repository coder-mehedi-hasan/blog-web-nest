import { Injectable } from '@nestjs/common';
import { Tags, Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma.service";

@Injectable()
export class TagService {
    constructor(private prisma: PrismaService) { }

    //get all tag
    async getAllTag(): Promise<Tags[]> {
        return this.prisma.tags.findMany();
    }

    //get tag by id 
    async getTag(id: number) {
        return this.prisma.tags.findUnique({
            where: { id: Number(id) }
        });
    }

    //create tag
    createTag(data: Prisma.TagsCreateInput) {
        return this.prisma.tags.create({ data })
    }

    //update tag
    updateTag(id: number, data: Prisma.TagsCreateInput) {
        return this.prisma.tags.update({
            where: { id: Number(id) },
            data: { tagName: data.tagName }
        })
    }

    //delete tag
    deleteTag(id: number) {
        return this.prisma.tags.delete({ where: { id: Number(id)} })
    }


}