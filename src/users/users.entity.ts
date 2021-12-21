import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    @PrimaryGeneratedColumn('uuid')
    user_uid: string
    @Column()
    user_email: string
    @Column() 
    user_password: string
    @Column({ default: false })
    is_admin: Boolean
}