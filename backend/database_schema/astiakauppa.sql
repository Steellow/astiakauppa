
-- copy pasteta itselle xampp admin palvelimelle koko SQL rimpsu.

drop database if exists astiakauppa;

create database astiakauppa;

use astiakauppa;

-- password ja username valinnaisiksi, jotta voi tilata ilman rekisteröitymistä.
-- niitä käytetään vain rekisteröitymisessä, kirjautumisessa ja
-- rekisteröityneen asiakkaan tietojen hakemisessa tilauksen yhteydessä.

create table users (
    id integer primary key auto_increment,
    password char(64),
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
values('Jorma','Jermula','admin123','jormajermu@hotmail.com','jormankatu 12', 'Oulu', 90150, 1);

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
values('Muumimuki: Taikuri', 5,13.90,2,'https://i.ibb.co/qY5T4fz/taikuri.png',
'Monivärinen Muumimuki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Lumihevonen', 5,13.90,2,'https://i.ibb.co/xHvVLnV/talvi.png',
'Vuoden 2016 sesonkimuki, jonka kuvitus pohjautuu Taikatalvi-kirjaan. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Talviuni', 5,16.90,2,'https://i.ibb.co/NxMpPp5/uni.png',
'Talven 2015 sesonkituote. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Seikkailu muutto', 5,14.90,2,'https://i.ibb.co/B42BBM9/pyrst-t-hti.png',
'Muumit pakenevat pyrstötähteä ja ottavat mukaansa vain tärkeimmät tavarat. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Muumipappa tuumiskelee',5,10.90,2,'https://i.ibb.co/YyrRmPb/pappa.png',
'Yksi tunnetuimmista Muumimukeista. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Nuuskamuikkunen',5,14.90,2,'https://i.ibb.co/QH7vnQv/nuuskamuikkunen.png',
'Ensimmäinen Nuuskamuikkunen-muki, joka oli valmistuksessa yli vuosikymmenen. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Muumitalo',5,17.90,2,'https://i.ibb.co/MPKQH54/muumitalo.png',
'"Kuka asuu Muumitalossa"-tarinaan pohjautuva Muumitalo-muki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Muumipappa sininen',5,12.90,2,'https://i.ibb.co/9NMbxtK/muumipappa.png',
'Muumipappa purjehtimassa. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Ystävyys',5,21.90,2,'https://i.ibb.co/zsdJ8Lm/kukka.png',
'Ystävyydestä kertova Muumimuki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Hetki Rannalla',5,21.90,2,'https://i.ibb.co/vjXtpqx/kalastus.png',
'Värikäs ja kesäinen Muumimuki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Kuusen alla',5,21.90,2,'https://i.ibb.co/XXQwDFr/joulu.png',
'Muumit juhlimassa joulua. TIlavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Haisuli',5,13.90,2,'https://i.ibb.co/t45B1Nf/haisuli.png',
'Haisuli tekemässä kepposia. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Kesäteatteri',5,13.90,2,'https://i.ibb.co/XtnbgKn/teatteri.png',
'Värikäs ja kesäinen Muumimuki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Perhe',5,13.90,2, 'https://i.ibb.co/D1hbwnX/perhe.png',
'Perheen tärkeyytä kuvaava Muumimuki. Tilavuus 0,3 l. Konepesun kestävä.');

-- lautaset

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Tiuhti ja Viuhti', 7,26.90,1,'https://i.ibb.co/y5dZM0n/tiuhtijaviuhti.png',
'Tiuhti ja Viuhti salaperäisen matkalaukun kanssa. ⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Mymmeli', 7,18.90,1,'https://i.ibb.co/rZ2cM3n/mymmeli.png',
'Mymmeli unelmoimassa elämänsä rakkauden löytämisestä. ⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Nuuskamuikkunen', 7,23.90,1,'https://i.ibb.co/9ZWkMbm/muikkune.png',
'Nuuksamuikkunen soittamassa pilliä. ⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Muumimamma ja Marjat', 7,23.90,1,'https://i.ibb.co/5jF3bMb/mamma.png',
'Muumimamma ja Marjat. ⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Talviuni', 7,26.90,1,'https://i.ibb.co/gM7mSv9/talviuni.png',
'Muumit viettämässä talviunta. ⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä taikuri', 7,21.90,1,'https://i.ibb.co/sqK8DYn/taikuri-kulho.png',
'⌀15cm Konepesun kestävä.');

--

insert into product(name,cost,price,groupid,pic,description)
values('Taikalautanen: mustavalkoinen 22 cm', 7,26.90,1,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/iittala-taika-plate-22_cm-black?size=3800,3800&wid=2000&hei=2000&scl=2.2}&extend=100,100,100,100',
'Klaus Haapaniemen suunnittelema Taika on saanut inspiraationsa kansanperinteen ja satujen värikkäästä maailmasta. Mustavalkoinen. ⌀22cm. Mikrouunin ja konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Taikalautanen: punainen 22 cm', 7,26.90,1,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/iittala-taika-plate-22_cm-red?size=3800,3800&wid=2000&hei=2000&scl=2.0}&extend=100,100,100,100',
'Klaus Haapaniemen suunnittelema Taika on saanut inspiraationsa kansanperinteen ja satujen värikkäästä maailmasta. Punainen. ⌀22cm. Mikrouunin ja konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Taikalautanen: Taika Siimes 22 cm', 7,26.90,1,'https://iittala.scene7.com/is/image/iittala/?&src=is{iittala/iittala%2Dtaika%2Dsiimes%2Dplate%2D22cm?size=3800,3800&wid=2000&hei=2000&scl=2.4}&extend=100,100,100,100',
'Klaus Haapaniemen suunnittelema Taika Siimes tuo mieleen ihanan kevätpäivän. ⌀22cm. Mikrouunin ja konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Taikalautanen: valkoinen syvä 22 cm', 7,29.90,1,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/iittala-taika-plate-deep-22cm-deco-white?size=3800,3800&wid=2000&hei=2000&scl=2.2}&extend=100,100,100,100',
'Klaus Haapaniemen suunnittelema Taika on saanut inspiraationsa kansanperinteen ja satujen värikkäästä maailmasta. Valkoinen. Syvä ⌀22cm. Mikrouunin ja konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Taikalautanen: mustavalkoinen syvä 22 cm', 7,29.90,1,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/Iittala_Taika_plate_deep_22cm_deco_black?size=3800,3800&wid=2000&hei=2000&scl=2.2}&extend=100,100,100,100',
'Klaus Haapaniemen suunnittelema Taika on saanut inspiraationsa kansanperinteen ja satujen värikkäästä maailmasta. Mustavalkoinen. Syvä ⌀22cm. Mikrouunin ja konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Taikalautanen: Taika sininen espressovati', 7,9.90,1,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/iittala-taika-saucer-11_cm-blue?size=3800,3800&wid=2000&hei=2000&scl=2.8}&extend=100,100,100,100',
'Klaus Haapaniemen suunnittelema Taika on saanut inspiraationsa kansanperinteen ja satujen värikkäästä maailmasta. Sininen. ⌀11cm. Mikrouunin ja konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Taikalautanen: Taika valkoinen espressovati', 7,9.90,1,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/iittala-taika-saucer-11_cm-white?size=3800,3800&wid=2000&hei=2000&scl=2.8}&extend=100,100,100,100',
'Klaus Haapaniemen suunnittelema Taika on saanut inspiraationsa kansanperinteen ja satujen värikkäästä maailmasta. Valkoinen. ⌀11cm. Mikrouunin ja konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Taikalautanen: Taika mustavalkoinen espressovati', 7,9.90,1,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/iittala-taika-saucer-11_cm-black?size=3800,3800&wid=2000&hei=2000&scl=2.8}&extend=100,100,100,100',
'Klaus Haapaniemen suunnittelema Taika on saanut inspiraationsa kansanperinteen ja satujen värikkäästä maailmasta. Mustavalkoinen. ⌀11cm. Mikrouunin ja konepesun kestävä.');

-- lasit

insert into product(name,cost,price,groupid,pic,description)
values('Muumilasi: Muumipappa', 3,11.90,3,'https://iittala.scene7.com/is/image/iittala/?&src=is{iittala/arabia%2Dmoomin%2Dtumbler%2D22cl%2Dmoominpappa1?size=3800,3800&wid=2000&hei=2000&scl=2.4}&extend=100,100,100,100',
'Muumipappa onkii kaikessa rauhassa. Tilavuus 22 cl. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilasi: Pikkumyy', 3,12.90,3,'https://iittala.scene7.com/is/image/iittala/?&src=is{iittala/arabia%2Dmoomin%2Dtumbler%2D22cl%2Dlittle%5Fmy?size=3800,3800&wid=2000&hei=2000&scl=2.4}&extend=100,100,100,100',
'Pikku Myy kelluu lumpeiden kanssa niin, että vain nuttura näkyy. Tilavuus 22 cl. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilasi: Niiskuneiti', 3,12.90,3,'https://iittala.scene7.com/is/image/iittala/?&src=is{iittala/arabia%2Dmoomin%2Dtumbler%2D22cl%2Dsnorkmaiden1?size=3800,3800&wid=2000&hei=2000&scl=2.4}&extend=100,100,100,100',
'Niiskuneiti on lähtenyt soutelemaan. Tilavuus 22 cl. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilasi: Muumipeikko', 3,12.90,3,'https://iittala.scene7.com/is/image/iittala/?&src=is{iittala/arabia%2Dmoomin%2Dtumbler%2D22cl%2Dmoomintroll1?size=3800,3800&wid=2000&hei=2000&scl=2.4}&extend=100,100,100,100',
'Muumipeikko sukeltelee uteliaana vedessä. Tilavuus 22 cl. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Taikalasi: Juomalasi', 6,29.90,3,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/iittala-taika-tumbler-38_cl-clear?size=3800,3800&wid=2000&hei=2000&scl=2.4}&extend=100,100,100,100',
'Klaus Haapaniemen suunnittelema Taika on saanut inspiraationsa kansanperinteen ja satujen värikkäästä maailmasta. Tilavuus 38 cl. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Kartio: Juomalasi', 5,13.90,3,'https://i.ibb.co/GV8bVGT/kartiojuomalasi.jpg',
'Kaj Franckin suunnittelema klassinen ja geometrinen juomalasi sopii täydellisesti arkikäyttöön. Kirkas. Tilavuus 21 cl. Konepesun kestävä.');