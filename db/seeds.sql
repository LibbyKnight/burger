
USE burgers_db;


CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured boolean NOT NULL,
  date timestamp NOT NULL,
  PRIMARY KEY(id)
);



INSERT INTO burgers (burger_name) VALUES ("Portobello Burger");
INSERT INTO burgers (burger_name) VALUES ("Swiss Truffle Burger");
INSERT INTO burgers (burger_name) VALUES ("BBQ Bacon Burger");
INSERT INTO burgers (burger_name) VALUES ("Mac n Cheese Burger");


