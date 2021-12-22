import { Body, Controller, Get, Post } from "@nestjs/common";
import { Products } from "src/products/products.entity";
import { Users } from "src/users/users.entity";
import { CardsSevrice } from "./carts.service";

@Controller('carts')
export class CartsController {
    constructor(private readonly cartsService: CardsSevrice) {}

    @Get()
    getCatrs() {
        return this.cartsService.getCarts()
    }

    @Post()
    createCart(
        @Body('products') products: Products[],
        @Body('users') users: Users
    ) {        
        return this.cartsService.createCart(products, users)
    }
}