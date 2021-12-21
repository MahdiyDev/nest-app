import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    getSingleUser(
        @Param('id') id: string
    ) {
        return this.userService.getSingleUser(id)
    }

    @Post('register')
    createUser(
        @Body('user_email') email: string,
        @Body('user_password') password: string,
    ) {
        return this.userService.createUser(email, password)
    }

    @Post('login')
    login(
        @Body('user_email') email: string,
        @Body('user_password') password: string,
    ) {
        return this.userService.login(email, password)
    }

    @Put(':id')
    updateUser(
        @Param('id') id: string,
        @Body('user_email') email: string,
        @Body('user_password') password: string,
    ) {
        return this.userService.updateUser(id, email, password)
    }

    @Delete(':id')
    deleteUser(
        @Param('id') id: string
    ) {
        return this.userService.deleteUser(id)
    }
}