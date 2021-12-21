import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn('uuid')
    product_uid: string
    @Column()
    product_name: string
    @Column()
    product_price: number
}