create database online_shop;

create extension if not exists "uuid-ossp";

create table users(
    user_uid UUID primary key default uuid_generate_v4(),
    user_email text not null,
    user_password text not null,
    is_admin boolean default false
);

create table products(
    product_uid UUID primary key default uuid_generate_v4(),
    product_name text not null,
    product_price decimal not null
);

create table carts(
    cart_uid UUID primary key default uuid_generate_v4(),
    cart_ref_user UUID default null,
    cart_ref_product UUID default null,
    foreign key(cart_ref_user)
        references users(user_uid)
            on delete cascade,
    foreign key(cart_ref_product)
        references products(product_uid)
            on delete cascade
);
