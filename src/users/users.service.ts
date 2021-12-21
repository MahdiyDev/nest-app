import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "./users.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        private jwtRepository: JwtService
    ) {}

    // Get
    getUsers(): Promise<Users[]> {
        return this.usersRepository.find()
    }

    // Get (id)
    async getSingleUser(user_uid: string): Promise<Users> {
        return await this.usersRepository.findOneOrFail(user_uid)
    }

    // Post register
    async createUser(user_email: string, user_password: string): Promise<{ accessToken: string }> {
        const user = await this.findUser()
        const foundUser = user.find(u => u.user_email === user_email)
        if (!foundUser) {
            const newUser = this.usersRepository.create({ user_email, user_password })

            const token = this.jwtRepository.sign({ user_uid: newUser.user_uid })

            this.usersRepository.save(newUser)
            return { accessToken: `Bearer ${token}` }
        } else {
            throw new BadRequestException()
        }
    }

    // Post Login
    async login(user_email: string, user_password: string): Promise<{ accessToken: string }> {
        const user = await this.findUser()
        const foundUser = user.find(u => u.user_email === user_email)
        if (foundUser) {
            const token = this.jwtRepository.sign({ user_uid: foundUser.user_uid })
            return { accessToken: `Bearer ${token}` }
        } else {
            throw new BadRequestException()
        }
    }

    // Put (update)
    async updateUser(user_uid: string, user_email: string, user_password: string) {
        const user = await this.getSingleUser(user_uid)

        user.user_email = user_email
        user.user_password = user_password

        return this.usersRepository.save(user)
    }

    // Delete
    async deleteUser(user_uid: string) {
        const user = await this.getSingleUser(user_uid)

        return this.usersRepository.remove(user)
    }

    async findUser(): Promise<Users[]> {
        return await this.usersRepository.find()
    }
}