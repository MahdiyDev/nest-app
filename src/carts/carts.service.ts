import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "src/products/products.entity";
import { ProductsService } from "src/products/products.service";
import { Users } from "src/users/users.entity";
import { Repository } from "typeorm";
import { Carts } from "./carts.entity";

@Injectable()
export class CardsSevrice {
    constructor(
        @InjectRepository(Carts)
        private cartsRepository: Repository<Carts>,
    ) {}

    // Get
    getCarts(): Promise<Carts[]> {
        return this.cartsRepository.find({ relations: [ 'cart_ref_product', 'cart_ref_user' ] })
    }

    // Post
    async createCart(products: Products[], user: Users) {
        const foundUser = await this.cartsRepository.findOne(user.user_uid, { relations: [ 'cart_ref_product', 'cart_ref_user' ] })   
        if (!foundUser) {
            const newCart = this.cartsRepository.create({ cart_ref_user: user, cart_ref_product: products })
            this.cartsRepository.save(newCart)
            return 'created'
        } else {
            foundUser.cart_ref_product = [ ...products, ...foundUser.cart_ref_product ]
            this.cartsRepository.save(foundUser)
            return 'updated'
        }
    }
}