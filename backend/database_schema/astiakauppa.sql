
-- copy pasteta itselle xampp admin palvelimelle koko SQL rimpsu.

drop database if exists astiakauppa;

create database astiakauppa;

use astiakauppa;

-- password ja username valinnaisiksi, jotta voi tilata ilman rekisteröitymistä.
-- niitä käytetään vain rekisteröitymisessä, kirjautumisessa ja
-- rekisteröityneen asiakkaan tietojen hakemisessa tilauksen yhteydessä.

create table users (
    id integer primary key auto_increment,
    password char(255),
    firstname char(50) not null,
    lastname char(50) not null,
    email char(100) unique not null,
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
    discprice decimal(5, 2),
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
    primary key(ordernum,rownum),
    foreign key(productid) references product(id)
);

-- verkkokaupan omistaja
insert into users(firstname,lastname,password,email,address,city,postalcode,admin)
values('Jorma','Jermula','$2y$10$m8WxlvVvhKx2O9Y3GOKkeetW1HEtrxKJ3XXh1Gz/KJGEr0Yp038nG','jormajermu@hotmail.com','jormankatu 12', 'Oulu', 90150, 1);

-- alkuarvot testaamiseen
-- insert into productgroup(name)
-- values ('kupit');

-- insert into product (name,cost,price,groupid,pic,description)
-- VALUES ('kuppi',10.50,15.50,1,'kuvalinkki','vihreä muki syvä ku mikä');

 -- tuoteryhmät

insert into productgroup(name)
values('Lautaset');

insert into productgroup(name)
values('Mukit');

insert into productgroup(name)
values('Lasit');

-- TUOTTEET

-- mukit

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Taikuri', 5,13.90,2,'http://localhost/astiakauppa/img/taikuri.png',
'Monivärinen Muumimuki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Lumihevonen', 5,13.90,2,'http://localhost/astiakauppa/img/talvi.png',
'Vuoden 2016 sesonkimuki, jonka kuvitus pohjautuu Taikatalvi-kirjaan. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Talviuni', 5,16.90,2,'http://localhost/astiakauppa/img/uni.png',
'Talven 2015 sesonkituote. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Seikkailu muutto', 5,14.90,2,'http://localhost/astiakauppa/img/pyrst-t-hti.png',
'Muumit pakenevat pyrstötähteä ja ottavat mukaansa vain tärkeimmät tavarat. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Muumipappa tuumiskelee',5,10.90,2,'http://localhost/astiakauppa/img/pappa.png',
'Yksi tunnetuimmista Muumimukeista. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Nuuskamuikkunen',5,14.90,2,'http://localhost/astiakauppa/img/nuuskamuikkunen.png',
'Ensimmäinen Nuuskamuikkunen-muki, joka oli valmistuksessa yli vuosikymmenen. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Muumitalo',5,17.90,2,'http://localhost/astiakauppa/img/muumitalo.png',
'"Kuka asuu Muumitalossa"-tarinaan pohjautuva Muumitalo-muki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Muumipappa sininen',5,12.90,2,'http://localhost/astiakauppa/img/muumipappa.png',
'Muumipappa purjehtimassa. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Ystävyys',5,21.90,2,'http://localhost/astiakauppa/img/kukka.png',
'Ystävyydestä kertova Muumimuki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Hetki Rannalla',5,21.90,2,'http://localhost/astiakauppa/img/kalastus.png',
'Värikäs ja kesäinen Muumimuki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Kuusen alla',5,21.90,2,'http://localhost/astiakauppa/img/joulu.png',
'Muumit juhlimassa joulua. TIlavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Haisuli',5,13.90,2,'http://localhost/astiakauppa/img/haisuli.png',
'Haisuli tekemässä kepposia. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Kesäteatteri',5,13.90,2,'http://localhost/astiakauppa/img/teatteri.png',
'Värikäs ja kesäinen Muumimuki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Perhe',5,13.90,2, 'http://localhost/astiakauppa/img/perhe.png',
'Perheen tärkeyytä kuvaava Muumimuki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Tanssimuki: Runsas tanssi',5,19.90,2, 'http://localhost/astiakauppa/img/taikatanssimuki.jpg',
'Ovela kettu-oopperan inspiroiva värikäs muki. Tilavuus 0,4 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Taikamuki: Satumetsä',5,14.90,2, 'http://localhost/astiakauppa/img/satumets-muki.jpg',
'Mystisen metsän värit hehkuu kesän väreissä. Tilavuus 0,4 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Taikamuki: Mustavalkoinen',5,14.90,2, 'http://localhost/astiakauppa/img/taikamuki.jpg',
'Kansanperinteiden ja satujen värikkäästä maailmasta inspiroituva Taika-sarjan muki. Tilavuus 0,4 l. Konepesun kestävä.');

-- lautaset

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Tiuhti ja Viuhti', 7,26.90,1,'http://localhost/astiakauppa/img/tiuhtijaviuhti.png',
'Tiuhti ja Viuhti salaperäisen matkalaukun kanssa. ⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Mymmeli', 7,18.90,1,'http://localhost/astiakauppa/img/mymmeli.png',
'Mymmeli unelmoimassa elämänsä rakkauden löytämisestä. ⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Nuuskamuikkunen', 7,23.90,1,'http://localhost/astiakauppa/img/muikkune.png',
'Nuuksamuikkunen soittamassa pilliä. ⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Muumimamma ja Marjat', 7,23.90,1,'http://localhost/astiakauppa/img/mamma.png',
'Muumimamma ja Marjat. ⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Talviuni', 7,26.90,1,'http://localhost/astiakauppa/img/talviuni.png',
'Muumit viettämässä talviunta. ⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä taikuri', 7,21.90,1,'http://localhost/astiakauppa/img/taikuri-kulho.png',
'⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Kastehelmi: Lautanen', 7,12.95,1,'http://localhost/astiakauppa/img/kastehelmilautanen.jpg',
'Oiva Toikan suunnittelema kastehelmi kuvastaa lasipisaroita, jotka heijastavat kauniisti valoa. Kirkas. ⌀17cm. Mikrouunin ja konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Taikalautanen: Taika mustavalkoinen kulho', 10,28.50,1,'http://localhost/astiakauppa/img/taikamurokulho.jpg',
'Klaus Haapaniemen suunnittelema Taika on saanut inspiraationsa kansanperinteen ja satujen värikkäästä maailmasta. Mustavalkoinen. 0.6 l. Mikrouunin ja konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Teemalautanen: musta 21 cm', 7,11.90,1,'http://localhost/astiakauppa/img/mustalautanen.jpg',
'Selkeä muotoinen ja tyylikäs Kaj Franckin suunnittelema Teema-sarjan lautanen. Musta. 21 cm. Mikrouunin ja konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Teemalautanen: musta syvä 21 cm', 7,17.90,1,'http://localhost/astiakauppa/img/syvamustalautanen.jpg',
'Selkeä muotoinen ja tyylikäs Kaj Franckin suunnittelema Teema-sarjan syvä lautanen. Musta. Syvä 21 cm. Mikrouunin ja konepesun kestävä.');

-- lasit

insert into product(name,cost,price,groupid,pic,description)
values('Kartio: Juomalasi', 5,13.90,3,'http://localhost/astiakauppa/img/kartiojuomalasi.jpg',
'Kaj Franckin suunnittelema klassinen ja geometrinen juomalasi sopii täydellisesti arkikäyttöön. Kirkas. Tilavuus 21 cl. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Kalinka: Juomalasi', 8,17.00,3,'http://localhost/astiakauppa/img/kalinkalasit.jpg',
'80-luvulla Timo Sarpanevan suunnittelema Kalinka on heleä ja yksityiskohtainen juomalasi. Kirkas. Tilavuus 20 cl. Vain käsinpesu.');

