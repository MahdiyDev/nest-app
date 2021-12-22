import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CartsController } from "./carts.conrtoller";
import { Carts } from "./carts.entity";
import { CardsSevrice } from "./carts.service";

@Module({
    imports: [TypeOrmModule.forFeature([Carts])],
    controllers: [CartsController],
    providers: [CardsSevrice]
})

export class CartsModule {}
