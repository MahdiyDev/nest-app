import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private products: Repository<Products>
  ) {}
  // Get
  getProducts(): Promise<Products[]> {
    return this.products.find();
  }

  // Get with id
  async getSingleProducts(id: string): Promise<Products> {
    return await this.products.findOneOrFail(id);
  }

  // Post
  insertProduct(product_name: string, product_price: number): Promise<Products> {
    const newUser = this.products.create({ product_name, product_price })

    return this.products.save(newUser)
  }

  // Put (upadate)
  async updateSinglePorduct(id: string, product_name: string, product_price: number) {
    const user = await this.getSingleProducts(id)

    user.product_name = product_name
    user.product_price = product_price    

    return this.products.save(user)
  }

  // Delete
  async deleteProducts(id: string) {
    const user = await this.getSingleProducts(id);

    return this.products.remove(user);
  }
}