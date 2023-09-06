import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AuthorService } from "./author.service";
import { Prisma } from '@prisma/client';


@Controller('author')
export class AuthorController {
    constructor(private authorService: AuthorService) { }

    @Get('all')
    getAllAuthor() {
        return this.authorService.getAllAuthor();
    }

    @Get(':id')
    getAuthor(
        @Param('id') id: number
    ) {
        return this.authorService.getAuthor(id)
    }

    @Post()
    createAuthor(@Body() data: Prisma.AuthorCreateInput) {
        return this.authorService.createAuthor(data)
    }

    @Put(':id')
    updateAuthor(
        @Param('id') id: number,
        @Body() data: Prisma.AuthorCreateInput
    ) {
        return this.authorService.updateAuthor(id, data);
    }

    @Delete(':id')
    deleteAuthor(
        @Param('id') id : number
    ){
        return this.authorService.deleteAuthor(id)
    }
}