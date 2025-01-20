CREATE TABLE IF NOT EXISTS `user` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `firstname` VARCHAR(50),
  `lastname` VARCHAR(50),
  `birth_date` TIMESTAMP,
  `adress` VARCHAR(5000)
);

CREATE TABLE IF NOT EXISTS `vehicle` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `model` VARCHAR(50),
  `brand` VARCHAR(50),
  `category_id` INT
);

CREATE TABLE IF NOT EXISTS `category` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `type` VARCHAR(40),
  `cost` INT
);

CREATE TABLE IF NOT EXISTS `agency` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(40),
  `adress` VARCHAR(5000),
  `vehicles` INT
);

CREATE TABLE IF NOT EXISTS `message` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `content` VARCHAR(400),
  `title` VARCHAR(40),
  `date` TIMESTAMP,
  `user_id` INT
);

CREATE TABLE IF NOT EXISTS `rental` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `departureCity` VARCHAR(40),
  `arrivalCity` VARCHAR(40),
  `departureDate` VARCHAR(40),
  `arrivalDate` VARCHAR(40),
  `category_id` INT
);

ALTER TABLE `vehicle` ADD FOREIGN KEY (`category_id`) REFERENCES `category`(`id`);
ALTER TABLE `rental` ADD FOREIGN KEY (`category_id`) REFERENCES `category`(`id`);
ALTER TABLE `message` ADD FOREIGN KEY (`user_id`) REFERENCES `user`(`id`);
ALTER TABLE `agency` ADD FOREIGN KEY (`vehicles`) REFERENCES `vehicle`(`id`);
