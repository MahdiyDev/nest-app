import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { config } from './Config/orm.config'
import { UsersModule } from './users/users.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    ProductsModule,
    UsersModule,
    CartsModule,
  ]
})
export class AppModule {}
