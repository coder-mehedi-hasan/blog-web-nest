import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TagService } from "./tags.service";
import { Prisma } from '@prisma/client';


@Controller('tag')
export class tagController {
    constructor(private tagService: TagService) { }

    @Get('all')
    getAllTag() {
        return this.tagService.getAllTag()
    }

    @Get(':id')
    getTag(
        @Param('id') id: number
    ) {
        return this.tagService.getTag(id)
    }

    @Post()
    createTag(@Body() data: Prisma.TagsCreateInput) {
        return this.tagService.createTag(data)
    }

    @Put(':id')
    updateTag(
        @Param('id') id: number,
        @Body() data: Prisma.TagsCreateInput
    ) {
        return this.tagService.updateTag(id, data);
    }

    @Delete(':id')
    deleteTag(
        @Param('id') id : number
    ){
        return this.tagService.deleteTag(id)
    }
}