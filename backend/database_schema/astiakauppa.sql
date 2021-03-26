
-- copy pasteta itselle xampp admin palvelimelle koko SQL rimpsu.

drop database if exists astiakauppa;

create database astiakauppa;

use astiakauppa;

-- password ja username valinnaisiksi, jotta voi tilata ilman rekisteröitymistä.
-- niitä käytetään vain rekisteröitymisessä, kirjautumisessa ja
-- rekisteröityneen asiakkaan tietojen hakemisessa tilauksen yhteydessä.

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
    primary key(ordernum,rownum),
    foreign key(productid) references product(id)
);

-- verkkokaupan omistaja
insert into users(username,firstname,lastname,password,email,address,city,postalcode,admin)
values('admin', 'Jorma','Jermula','admin123','jormajermu@hotmail.com','jormankatu 12', 'Oulu', 90150, 1);

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
values('Muumimuki: Nuuskamuikkunen vihreä', 5,12.90,2,'https://arabia.fi/var/rorstrand/storage/images/frontpage/astiasarjat/muumi-muki-listaus/2015-nuuskamuikkunen-vihrea/listaus-listing/26865-1-fin-FI/listaus-listing.png',
'Keväisen vihreä Muumimuki. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Pikkumyy punainen', 5,9.90,2,'https://arabia.fi/var/rorstrand/storage/images/frontpage/astiasarjat/muumi-muki-listaus/2015-pikku-myy-punainen/listaus-listing/26937-1-fin-FI/listaus-listing.png',
'Pirteän punainen Muumimuki! Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Nipsu turkoosi', 5,16.90,2,'https://arabia.fi/var/rorstrand/storage/images/frontpage/astiasarjat/muumi-muki-listaus/2008-nipsu-turkoosi/listaus-listing/26076-1-fin-FI/listaus-listing.png',
'Raikkaan turkoosissa Muumimukissa seikkailee rikkauksista haaveileva hassunhauska Nipsu. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Mymmeli', 5,14.90,2,'https://arabia.fi/var/rorstrand/storage/images/frontpage/astiasarjat/muumi-muki-listaus/2008-mymmeli/listaus-listing/26148-1-fin-FI/listaus-listing.png',
'Pirteän punakassa Arabian Muumimukissa istuu ihana ja huoleton Mymmeli. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Hattivatti',5,10.90,2,'https://arabia.fi/var/rorstrand/storage/images/frontpage/arabiasta/muumimuki-listaus/2007-hattivatit-hattifnattarna-hattifatteners/listaus-listing/26004-1-fin-FI/listaus-listing.png',
'Hattivatit elävät laumoissa ja vaeltavat kohti taivaanrantaa. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Muumipappa sininen',5,14.90,2,'https://arabia.fi/var/rorstrand/storage/images/frontpage/astiasarjat/muumi-muki-listaus/2014-muumipappa-tummansininen/listaus-listing/26721-1-fin-FI/listaus-listing.png',
'Muumipappa on poikamainen ja seikkailunhaluinen, mutta varsin ylpeä siitä, että hän on perheenpää. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Mörkö',5,17.90,2,'https://arabia.fi/var/rorstrand/storage/images/frontpage/astiasarjat/muumi-muki-listaus/2005-morko/listaus-listing/25858-1-fin-FI/listaus-listing.png',
'Mörkö huokuu ympärillään kylmyyttä ja maa jäätyy hänen allaan. Tilavuus 0,3 l. Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumimuki: Niiskuneiti pinkki',5,12.90,2,'https://arabia.fi/var/rorstrand/storage/images/frontpage/astiasarjat/muumi-muki-listaus/2013-niiskuneiti-pinkki-snorkfroken-rosa-snorkmaiden-pink/listaus-listing/26625-1-fin-FI/listaus-listing.png',
'Niiskuneiti rakastaa haaveilua ja kuvittelee mielellään, millainen hänen unelmiensa prinssi olisi. Tilavuus 0,3 l. Konepesun kestävä.');


-- lautaset

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: Nuuskamuikkunen vihreä', 7,21.90,1,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/arabia-moomin-plate-19_cm-snufkin?size=3800,3800&wid=2000&hei=2000&scl=2.0}&extend=100,100,100,100',
'Huuliharppua soittava Nuuskamuikkunen on lempeä ja huoleton kulkuri. ⌀19cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: Pikkumyy punainen', 7,18.90,1,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/arabia-moomin-plate-19_cm-little-my?size=3800,3800&wid=2000&hei=2000&scl=2.0}&extend=100,100,100,100',
'Pikku Myy on Mymmelin lapsista kaikista pienin ja pippurisin. ⌀19cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Nipsu turkoosi', 7,23.90,1,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/arabia-moomin-bowl-15_cm-sniff?size=3800,3800&wid=2000&hei=2000&scl=2.4}&extend=100,100,100,100',
'Luonteeltaan kiltti, mutta hieman pelokaskin Nipsu rakastaa kallisarvoisia, kiiltäviä ja kimaltavia esineitä. ⌀15cm Konepesun kestävä.');

insert into product(name,cost,price,groupid,pic,description)
values('Muumilautanen: syvä Mymmeli', 7,23.90,1,'https://iittala.scene7.com/is/image/iittala/?qlt=90&op_usm=1.2,1,0,0&src=is{iittala/arabia-moomin-bowl-15_cm-mymble?size=3800,3800&wid=2000&hei=2000&scl=2.0}&extend=100,100,100,100',
'Mymmeli unelmoi mielellään elämänsä rakkauden löytämisestä. Hän ihastuu usein ja haaveilee erityisesti Poliisimestarista. ⌀15cm Konepesun kestävä.');

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