import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    user_uid: string
    @Column({ nullable: false })
    user_email: string
    @Column({ nullable: false }) 
    user_password: string
    @Column({ default: false, nullable: false })
    is_admin: Boolean
}