import { Products } from "src/products/products.entity";
import { Users } from "src/users/users.entity";
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carts {
    @PrimaryGeneratedColumn('uuid')
    cart_uid: string;
    @ManyToMany(() => Products, product => product.product_uid, { cascade: true, nullable: false })
    @JoinTable()
    cart_ref_product: Products[];
    @OneToOne(() => Users, { cascade: true, nullable: false })
    @JoinColumn()
    cart_ref_user: Users;
}