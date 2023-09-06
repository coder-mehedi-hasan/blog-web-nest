import { Module } from "@nestjs/common";
import { tagController } from "./tags.controller";
import { TagService } from "./tags.service";
import { PrismaService } from "src/prisma.service";


@Module({
    controllers: [tagController],
    providers: [TagService, PrismaService]
})
export class TagsModule {}