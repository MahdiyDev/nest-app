import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    username: 'postgres',
    password: '1407',
    port: 5432,
    host: 'localhost',
    database: 'online_shop',
    synchronize: true,
    entities: ["dist/**/*.entity{.ts,.js}"],
}

export const db = {
    port: parseInt(process.env.PORT) || 3300,
    secret: 'jubajuba'
}
