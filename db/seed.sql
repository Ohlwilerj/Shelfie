Drop table if exists products;

create table products (id serial primary key, name varchar(200), price int, image text);

insert into product
(name, price, image)
values($1, $2, $3)

delete from product
where id = $1