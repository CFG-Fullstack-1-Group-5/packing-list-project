CREATE DATABASE go_packing_1;

USE go_packing_1;

create table item
(item_id INT NOT NULL PRIMARY KEY,
item_description VARCHAR (100) NOT NULL,
temp_id INT,
style_id INT,
activity_id INT,
weather_id INT,
qty_per_week DECIMAL (2,1)
);

create table activity 
(activity_id INT NOT NULL auto_increment,
activity_type VARCHAR (100),
PRIMARY KEY (activity_id)
);

create table temp
(temp_id INT NOT NULL auto_increment,
low DECIMAL (3,1),
high DECIMAL (3,1),
PRIMARY KEY (temp_id) 
);

create table weather
(weather_id INT NOT NULL auto_increment,
weather_condition VARCHAR (100),
PRIMARY KEY (weather_id)
);

CREATE TABLE style
(style_id INT NOT NULL auto_increment,
style_desc VARCHAR (100),
PRIMARY KEY (style_id)
);

INSERT INTO item
(item_id, item_description, temp_id, style_id, activity_id, weather_id, qty_per_week)
VALUES
(1,'sports trouser',1,3,5,4,1.5),
(2,'sports shorts',7,3,5,4,1.5),
(3,'short-sleeve top',7,3,3,4,1.5),
(4,'long-sleeve top',3,3,3,4,1.5),
(5,'hiking socks',1,3,6,4,3),
(6,'trainers',5,3,5,4,1),
(7,'hiking boots',1,3,6,4,1),
(8,'bathing suit',8,2,1,4,4),
(9,'beach towel',8,3,1,4,1),
(10,'t-shirt',7,3,3,4,4),
(11,'button-down shirt',2,3,4,4,3),
(12,'mini dress',7,2,3,4,2),
(13,'maxi dress',6,2,3,4,2),
(14,'jeans',2,3,3,4,1.5),
(15,'trousers',2,3,3,4,2),
(16,'shorts',7,3,3,4,3),
(17,'casual jumper',3,3,3,4,2),
(18,'formal jumper',3,3,4,4,2),
(19,'light jumper',7,3,3,4,1.5),
(20,'maxi skirt',6,2,3,4,2),
(21,'mini skirt',7,2,3,4,1.5),
(22,'winter coat',4,3,2,4,1),
(23,'coat',6,3,3,4,1),
(24,'light jacket',6,3,3,4,1),
(25,'gloves',4,3,8,2,1),
(26,'hat',4,3,8,2,1),
(27,'scarf',4,3,8,2,1),
(28,'casual shoes',2,3,3,4,1.5),
(29,'sturdy shoes',2,3,5,4,1),
(30,'sandals',7,2,1,4,1.5),
(31,'snow boots',4,3,8,2,1),
(32,'formal trousers',1,3,4,4,1.5),
(33,'nice top',1,2,4,4,1.5),
(34,'suit',1,1,4,4,1.5),
(35,'heels',1,2,4,4,2),
(36,'formal shoes',1,1,4,4,1),
(37,'tie',1,1,4,4,1.5),
(38,'wellies',8,3,8,1,1),
(39,'raincoat',8,3,8,1,1),
(40,'umbrella',8,3,8,1,1),
(41,'ski socks',4,3,2,4,2),
(42,'ski gloves',4,3,2,4,1),
(43,'spf lip balm',4,3,2,4,1),
(44,'pyjama top',1,3,7,4,2),
(45,'pyjama bottoms',1,3,7,4,2),
(46,'sunscreen',8,4,8,3,1),
(47,'pair underwear',1,3,7,4,7),
(48,'pair socks',1,3,7,4,7),
(49,'bra',1,2,7,4,2),
(50,'tights',3,2,7,4,2),
(51,'thermal top',4,3,5,4,1.5),
(52,'thermal bottoms',4,3,5,4,1),
(53, 'sunglasses', 8, 4, 8, 3,1);

INSERT INTO temp
(low, high)
VALUES
(-20.0, 45.0),
(-20.0, 25.0),
(-20.0, 15.0),
(-20.0, 0.0),
(0.0, 45.0),
(8.0, 16.0),
(15.0, 45.0),
(null, null);

INSERT INTO style
(style_desc)
VALUES
('masculine'),
('feminine'),
('unisex'),
(null);

INSERT INTO activity
(activity_type)
VALUES
('beach'),
('ski'),
('general'),
('formalwear'),
('activewear'),
('hiking'),
('essential'),
('extras');

INSERT INTO weather
(weather_condition)
VALUES
('rain'),
('snow'),
('clear'),
(null);