import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { db } from "src/Config/orm.config";
import { UsersController } from "./users.controller";
import { Users } from "./users.entity";
import { UsersService } from "./users.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
        JwtModule.register({
            secret: db.secret
        })
    ],
    controllers: [UsersController],
    providers: [UsersService],
})

export class UsersModule {}
