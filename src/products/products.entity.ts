import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {
    @PrimaryGeneratedColumn('uuid')
    product_uid: string
    @Column({ nullable: false })
    product_name: string
    @Column({ nullable: false })
    product_price: number
}