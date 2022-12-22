/*
 Navicat Premium Data Transfer

 Source Server         : Farmram
 Source Server Type    : MySQL
 Source Server Version : 100421
 Source Host           : localhost:3306
 Source Schema         : eventsdb

 Target Server Type    : MySQL
 Target Server Version : 100421
 File Encoding         : 65001

 Date: 22/12/2022 12:52:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for digest_instance
-- ----------------------------
DROP TABLE IF EXISTS `digest_instance`;
CREATE TABLE `digest_instance`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid',
  `fk_subscriber` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid from subscriber',
  `abstract` varchar(400) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `status` int(1) NULL DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_subscriber`(`fk_subscriber`) USING BTREE,
  CONSTRAINT `digest_instance_ibfk_1` FOREIGN KEY (`fk_subscriber`) REFERENCES `subscriber` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of digest_instance
-- ----------------------------

-- ----------------------------
-- Table structure for economist
-- ----------------------------
DROP TABLE IF EXISTS `economist`;
CREATE TABLE `economist`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid',
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `dni` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fk_user` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid from users',
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_user`(`fk_user`) USING BTREE,
  CONSTRAINT `economist_ibfk_1` FOREIGN KEY (`fk_user`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of economist
-- ----------------------------
INSERT INTO `economist` VALUES ('c06e8d38-d40d-4cc7-b42f-5b64b60d2622', 'Alejandro', 'Pozo Castro', '92102047481', '0875ff13-7f67-4f65-b74b-cbf4311e5c16', '2022-12-19 14:25:47.519596');

-- ----------------------------
-- Table structure for event
-- ----------------------------
DROP TABLE IF EXISTS `event`;
CREATE TABLE `event`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `description` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `date_beginning_inscription` int(15) NOT NULL,
  `end_date_inscription` int(15) NOT NULL,
  `date_beginning` int(15) NOT NULL COMMENT 'strToTime',
  `end_date` int(15) NOT NULL COMMENT 'strToTime',
  `cost` decimal(10, 2) NULL DEFAULT NULL COMMENT 'campo para economist',
  `target` varchar(20) CHARACTER SET utf8 COLLATE utf8_spanish_ci NULL DEFAULT NULL COMMENT 'campo para economist',
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6),
  `status` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of event
-- ----------------------------
INSERT INTO `event` VALUES ('d8bacbca-899e-45a1-87d6-ec9b606ca2e4', 'Matematicas', 'A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opp', 1671577145, 1671577146, 1671577147, 1671577148, NULL, NULL, '2022-12-20 18:13:51.016195', 0);
INSERT INTO `event` VALUES ('da4f08a4-7eb4-4e5f-a77e-2c8b2082c8f8', 'Humanidades', 'A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opp', 1671577145, 1671577146, 1671577147, 1671577148, NULL, NULL, '2022-12-21 11:34:57.396138', 0);
INSERT INTO `event` VALUES ('f0d17a2f-6cea-4d5c-85cf-c60f056bea04', 'Español Literatura y Didactica', 'Pasaje Lorem ipsum... se ha extraído del texto que dice Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..., que se traduciría como No hay nadie que ame el do', 1671577145, 1671577146, 1671577147, 1671577148, NULL, NULL, '2022-12-20 18:24:06.274543', 0);

-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid',
  `fk_subscriber` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid from users',
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `link_presentation` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'link de redes sociales',
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_subscriber`(`fk_subscriber`) USING BTREE,
  CONSTRAINT `job_ibfk_1` FOREIGN KEY (`fk_subscriber`) REFERENCES `subscriber` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of job
-- ----------------------------

-- ----------------------------
-- Table structure for living_room
-- ----------------------------
DROP TABLE IF EXISTS `living_room`;
CREATE TABLE `living_room`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid',
  `fk_event` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid from event',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `description` varchar(150) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fk_manager` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid from manager',
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_event`(`fk_event`) USING BTREE,
  INDEX `fk_manager`(`fk_manager`) USING BTREE,
  CONSTRAINT `living_room_ibfk_1` FOREIGN KEY (`fk_event`) REFERENCES `event` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `living_room_ibfk_2` FOREIGN KEY (`fk_manager`) REFERENCES `manager` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of living_room
-- ----------------------------
INSERT INTO `living_room` VALUES ('1ba79f82-1525-488d-9ba9-1b4f887be5a0', 'd8bacbca-899e-45a1-87d6-ec9b606ca2e4', 'Dpto Informatica', '2do piso Bloque2', '1a588fda-9551-4af8-aa85-8164124ca950', '2022-12-22 12:46:19.236901');
INSERT INTO `living_room` VALUES ('3f9f4da5-064d-4217-8bd6-b93ad5935e9a', 'd8bacbca-899e-45a1-87d6-ec9b606ca2e4', 'Dpto Español Literatura', '2do piso Bloque2', '1a588fda-9551-4af8-aa85-8164124ca950', '2022-12-22 12:46:36.476504');

-- ----------------------------
-- Table structure for manager
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid',
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `dni` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fk_user` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid from users',
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_users`(`fk_user`) USING BTREE,
  CONSTRAINT `manager_ibfk_1` FOREIGN KEY (`fk_user`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of manager
-- ----------------------------
INSERT INTO `manager` VALUES ('1a588fda-9551-4af8-aa85-8164124ca950', 'Oscar', 'Pozo Castro', '234520423456', '9b557e67-361b-45e3-a96a-f35fd6dd5fe5', '2022-12-19 14:21:42.069901');

-- ----------------------------
-- Table structure for moderator
-- ----------------------------
DROP TABLE IF EXISTS `moderator`;
CREATE TABLE `moderator`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid',
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `dni` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fk_user` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid from users',
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_user`(`fk_user`) USING BTREE,
  CONSTRAINT `moderator_ibfk_1` FOREIGN KEY (`fk_user`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of moderator
-- ----------------------------
INSERT INTO `moderator` VALUES ('1b1eb631-62f9-46ff-af27-a6b8d39e9d20', 'Jhon', 'Wick', '93102047481', 'e2fb04e5-9536-4633-8278-042f01e32bc4', '2022-12-21 11:00:06.127139');
INSERT INTO `moderator` VALUES ('c1310722-42cd-4422-81a1-b8ca0c92fae7', 'Oscar', 'Pozo Castro', '234520423456', 'd5c804a3-f1e7-402b-9948-0c185828afdd', '2022-12-19 14:19:54.412611');

-- ----------------------------
-- Table structure for payment_instance
-- ----------------------------
DROP TABLE IF EXISTS `payment_instance`;
CREATE TABLE `payment_instance`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fk_subscriber` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `transaction` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `status` int(1) NULL DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `payment_instance_ibfk_1`(`fk_subscriber`) USING BTREE,
  CONSTRAINT `payment_instance_ibfk_1` FOREIGN KEY (`fk_subscriber`) REFERENCES `subscriber` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of payment_instance
-- ----------------------------

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_name` varchar(11) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 135 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (130, 'admin');
INSERT INTO `roles` VALUES (131, 'moderator');
INSERT INTO `roles` VALUES (132, 'manager');
INSERT INTO `roles` VALUES (133, 'economist');
INSERT INTO `roles` VALUES (134, 'user');

-- ----------------------------
-- Table structure for subscriber
-- ----------------------------
DROP TABLE IF EXISTS `subscriber`;
CREATE TABLE `subscriber`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid',
  `name` varchar(25) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `lastname` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `nation` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'getJson(cuba-cu)',
  `dni` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `institution` varchar(50) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `category` tinyint(1) NOT NULL DEFAULT 1 COMMENT '1: Estudiante, 0: Trabajador',
  `fk_user` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid => table users',
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_user`(`fk_user`) USING BTREE,
  CONSTRAINT `subscriber_ibfk_1` FOREIGN KEY (`fk_user`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of subscriber
-- ----------------------------
INSERT INTO `subscriber` VALUES ('3a4e5c13-059c-4c3b-bcab-047d26fca2ce', 'Oscar', 'Pozo Castro', 'Cuba', '234520423456', 'Fajardo', 1, 'a6ca6906-1d43-48c0-bb5a-f0a0904aea28', '2022-12-19 14:23:25.495359');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `rol` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `rol`(`rol`) USING BTREE,
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rol`) REFERENCES `roles` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('0875ff13-7f67-4f65-b74b-cbf4311e5c16', 'ale@gmail.com', '$2a$10$Ca/WWaGmAAdGxE1bgC8ea.wCF2YKnc17yFtte.lg68jYfEBK1MKFO', 133, 1);
INSERT INTO `users` VALUES ('77d226a2-f7b2-445c-b74a-729de570d481', 'admin@admin.com', '$2a$10$0MXhYC75nkivMwxslnqFSufhf.gFzzqYTGRYXFCx9LzRd4t3/h.Ka', 130, 1);
INSERT INTO `users` VALUES ('9b557e67-361b-45e3-a96a-f35fd6dd5fe5', 'oscar_manager@gmail.com', '$2a$10$hGSNCXtHUY5WJkx6rWaOGuPWVRw3.3Yd33Q2sPoDCNdLTRDp.IObK', 132, 1);
INSERT INTO `users` VALUES ('a6ca6906-1d43-48c0-bb5a-f0a0904aea28', 'oscar@gmail.com', '$2a$10$WeU1rIVf.Ao2Ssi63AGJ3uOWBQ8/B.hqb07Hle4r.Nwhr/TSAOgRG', 134, 1);
INSERT INTO `users` VALUES ('d5c804a3-f1e7-402b-9948-0c185828afdd', 'oscar_moderator@gmail.com', '$2a$10$pa28iPOPj0jQBhqpFJ59AuiN20kpvZXZK2vUra2eDhBscoxr6lfeG', 131, 1);
INSERT INTO `users` VALUES ('e2fb04e5-9536-4633-8278-042f01e32bc4', 'jhon@gmail.com', '$2a$10$gSjGFzWn4pE1QT050tvoG.SecwHow/Mq2TeVTGtQKCLgCXUwfAT0u', 131, 1);

SET FOREIGN_KEY_CHECKS = 1;
