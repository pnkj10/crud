DROP DATABASE IF EXISTS userinfo;
create database userinfo;
use userinfo;
create table users (userid integer primary key, username varchar(50), course varchar(50), purchasedate date);

insert into users values(50, "Suraj", "Java", "2020-01-01");
insert into users(userid,username, course, purchasedate) values(1,"Rohit", "Python", "2021-05-22");