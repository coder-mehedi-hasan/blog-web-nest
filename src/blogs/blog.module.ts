import {  Module } from "@nestjs/common";
import { BlogService } from "./blog.service";
import { PrismaService } from "src/prisma.service";
import { BlogController } from "./blog.controller";

@Module({
    controllers: [BlogController],
    providers: [BlogService, PrismaService]    
})
export class BlogModule { }