
-- copy paste xamp


drop database if exists astiakauppa;

create database astiakauppa;

use astiakauppa;

create table users (
    id integer primary key auto_increment,
    username char(50) unique,
    password char(50),
    firstname char(50) not null,
    lastname char(50) not null,
    email char(100) not null,
    address char(100) not null,
    city char(50) not null,
    postalcode integer,
    admin smallint default 0
    
);

create table productgroup (
    id smallint primary key auto_increment,
    name char(50) not null
);

create table product (
    id integer primary key auto_increment,
    name char(50) not null,
    cost decimal(5,2),
    price decimal(5,2),
    groupid smallint not null,
    pic char(255),
    description char(255),
    foreign key(groupid) references productgroup(id) on delete cascade
);

create table orders (
    ordernum integer primary key auto_increment,
    userid integer not null,
    orderdate date,
    status char(20),
    foreign key(userid) references users(id)
);

create table order_row (
    ordernum integer,
    rownum smallint,
    productid integer,
    amount integer,
    primary key(ordernum,rownum)
);

-- verkkokaupan omistaja
insert into users(username,firstname,lastname,password,email,address,city,postalcode,admin)
values('admin', 'Jorma','Jermula','admin123','jormajermu@hotmail.com','jormankatu 12', 'Oulu', 90150, 1);