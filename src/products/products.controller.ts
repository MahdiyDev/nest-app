import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }
    
    @Get(':id')
    getProducts(@Param('id') prodId: string) {
        return this.productsService.getSingleProducts(prodId);
    }

    @Post()
    addProducts(
        @Body('name') prodName: string,
        @Body('price') prodPrice: number,
    ): any {
        const ID = this.productsService.insertProduct(prodName, prodPrice);
        return { id: ID };
    }

    @Put(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('product_name') product_name: string,
        @Body('product_price') product_price: number,
    ): { message: string } {        
        this.productsService.updateSinglePorduct(prodId, product_name, product_price)
        return { message: "updated" }        
    };

    @Delete(':id')
    deleteUser(
        @Param('id') prodId: string,
    ) {
        this.productsService.deleteProducts(prodId)
    }
};