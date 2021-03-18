
-- ei vielä valmis! jatketaan myöhemmin.


drop database if exists astiakauppa;

create database astiakauppa;

use astiakauppa;

create table users (
    userid integer primary key auto_increment,
    username char(50) unique not null,
    password char(50) not null,
    admin smallint default 0,
    email char(100) not null
);

create table productgroup (
    groupid smallint primary key auto_increment,
    pgname char(50) not null
);

create table products (
    pid integer primary key auto_increment,
    pname char(50) not null,
    price decimal(5,2),
    groupid smallint not null,
    pic char(255)
    foreign key(groupid) references productgroup(groupid) on delete cascade
);

create table order (
    ordernum integer,
    userid integer,
    orderdate date,
);

create table orderrow (
    ordernum integer,
    rownum smallint,
    pid integer,
    amount integer
);