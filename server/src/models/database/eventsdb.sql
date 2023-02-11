/*
 Navicat Premium Data Transfer

 Source Server         : FarmaRAM
 Source Server Type    : MySQL
 Source Server Version : 100419
 Source Host           : localhost:3306
 Source Schema         : eventsdb

 Target Server Type    : MySQL
 Target Server Version : 100419
 File Encoding         : 65001

 Date: 11/02/2023 11:13:53
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
  `fk_living` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `abstract` varchar(400) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `link_presentation` varchar(500) CHARACTER SET utf8 COLLATE utf8_spanish_ci NULL DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_subscriber`(`fk_subscriber`) USING BTREE,
  INDEX `fk_living`(`fk_living`) USING BTREE,
  CONSTRAINT `digest_instance_ibfk_1` FOREIGN KEY (`fk_subscriber`) REFERENCES `subscriber` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `digest_instance_ibfk_2` FOREIGN KEY (`fk_living`) REFERENCES `living_room` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of digest_instance
-- ----------------------------
INSERT INTO `digest_instance` VALUES ('3f873836-09a3-4a45-a668-135850c4a6e1', '76a7b956-ebca-44dd-adaa-2deaa58f55a4', '4ae3ba04-aa1d-4e86-b90a-e90f46cbafd7', 'To send an Axios POST request with headers you need to use the headers option. With axiospost the first parameter is the URL the nd parameter is the request body and the rd parameter is the options. For example below is how you set the ContentType header on an HTTP POST request', 'https://masteringjs.io/tutorials/axios/post-headers', 0, '2023-02-10 17:39:01.904038');
INSERT INTO `digest_instance` VALUES ('758456b6-ad51-431e-a541-b70b2ada692e', 'ec33acc4-fcaf-4720-8b1a-5b104a60d6fe', 'd020e402-491e-4051-ad7e-da17d6514e15', 's de tipografíasdasdasd sdassdasd sdass dasdsad asdsdsaffggdsgs gfs sdfdf dfsdwdgwffsfgfg sfsfgs fg as de tipografíasdasdasd sdassdasd sdass dasdsad asdsdsaffggdsgs gfs sdfdf dfsdwdgwffsfgfg sfsfgs fg as de tipografíasdasdasd sdassdasd sdass dasdsad asdsdsaffggdsgs gfs sdfdf dfsdwdgwffsfgfg sfsfgs fg as de tipografíasdasdasd sdassdasd sdass dasdsad asdsdsaffggdsgs gfs sdfdf dfsdwdgwffsfgfg sfsf', '0', 1, '2023-02-11 10:01:24.379990');
INSERT INTO `digest_instance` VALUES ('98da8abd-83c9-4279-a844-74cfeb59186a', 'ec33acc4-fcaf-4720-8b1a-5b104a60d6fe', '4ae3ba04-aa1d-4e86-b90a-e90f46cbafd7', 'Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final', '0', 0, '2023-02-11 09:23:30.521313');

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
INSERT INTO `economist` VALUES ('f3e1145e-b035-4305-ade8-5e93c5d6851f', 'Economist', 'Joe Last', '92102548471', '99a096cb-5429-407c-9b1e-f1fcc1fcab65', '2023-02-06 16:10:33.603391');

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
INSERT INTO `event` VALUES ('5caea558-68fd-4a72-8968-b65bc703d3de', 'Ciencia y tecnica', 'A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opp', 1671577145, 1671577145, 1671577145, 1671577145, 12.00, '1299-1255-5666-5455', '2023-01-09 11:46:56.882905', 1);
INSERT INTO `event` VALUES ('e71d42f8-8a6d-4a77-be58-3eda3d78709c', 'Forum', 'Ciencia y Tecnica', 1676206800, 1676491200, 1677675600, 1677934800, 45.00, '1222122156545646', '2023-02-06 16:14:59.838635', 1);

-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid',
  `fk_subscriber` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid from users',
  `fk_digest_instance` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_subscriber`(`fk_subscriber`) USING BTREE,
  INDEX `fk_digest_instance`(`fk_digest_instance`) USING BTREE,
  CONSTRAINT `job_ibfk_1` FOREIGN KEY (`fk_subscriber`) REFERENCES `subscriber` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `job_ibfk_2` FOREIGN KEY (`fk_digest_instance`) REFERENCES `digest_instance` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
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
INSERT INTO `living_room` VALUES ('4ae3ba04-aa1d-4e86-b90a-e90f46cbafd7', 'e71d42f8-8a6d-4a77-be58-3eda3d78709c', 'Departamento Fisica', '3do piso ala izq', 'b4660615-2fee-4130-a5b8-3e5c8dd36860', '2023-02-06 16:18:07.690865');
INSERT INTO `living_room` VALUES ('d020e402-491e-4051-ad7e-da17d6514e15', '5caea558-68fd-4a72-8968-b65bc703d3de', 'Laboratorio', '2do piso ala derecha', 'b4660615-2fee-4130-a5b8-3e5c8dd36860', '2023-02-06 16:17:02.162491');

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
INSERT INTO `manager` VALUES ('b4660615-2fee-4130-a5b8-3e5c8dd36860', 'Manager', 'Oz Dert', '95102048471', '9d26d980-25a5-47ff-9938-5d1c5885c70a', '2023-02-06 16:13:11.629762');

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
INSERT INTO `moderator` VALUES ('2696d3df-bbea-4b12-9ad8-36034d84eeda', 'Moderator', 'Joe Last', '92102548471', 'da13957f-f891-417b-aa93-ff2fa09e9819', '2023-02-06 16:10:00.352446');

-- ----------------------------
-- Table structure for payment_instance
-- ----------------------------
DROP TABLE IF EXISTS `payment_instance`;
CREATE TABLE `payment_instance`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fk_subscriber` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fk_digestInstance` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `transaction` varchar(15) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
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
) ENGINE = InnoDB AUTO_INCREMENT = 145 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (140, 'admin');
INSERT INTO `roles` VALUES (141, 'moderator');
INSERT INTO `roles` VALUES (142, 'user');
INSERT INTO `roles` VALUES (143, 'manager');
INSERT INTO `roles` VALUES (144, 'economist');

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
INSERT INTO `subscriber` VALUES ('76a7b956-ebca-44dd-adaa-2deaa58f55a4', 'Leandro', 'Pozo Castro', 'Cuba-cu', '93102548472', 'Fajardo', 1, '24051faa-c92f-4897-a561-2a385c6b8f59', '2023-02-09 16:22:24.000511');
INSERT INTO `subscriber` VALUES ('922d76ab-75c0-4acc-9147-6e06568fadfd', 'SubscriberOne', 'Sosa Castillo', 'Emiratos Árabes', '23423423423', 'Fajardo', 0, 'a2a9679a-7727-48c4-aba0-a16cc68b6f4c', '2023-02-09 16:16:48.560604');
INSERT INTO `subscriber` VALUES ('d5526b70-085b-4e04-b85e-95c0b3cec6f8', 'Alejandro', 'Suarez Cespedez', 'Cuba-cu', '92103045487', 'Fajardo', 1, 'b5417e2b-62be-457e-b884-c1f6c70a923e', '2023-02-07 18:34:05.803127');
INSERT INTO `subscriber` VALUES ('ec33acc4-fcaf-4720-8b1a-5b104a60d6fe', 'Alejandro', 'Sosa Castillo', 'Anguila-ai', '93102548471', 'Fajardo', 1, '6feeb01e-6b7c-4d34-8610-4b2caf798e89', '2023-02-09 16:20:47.555853');

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
INSERT INTO `users` VALUES ('24051faa-c92f-4897-a561-2a385c6b8f59', 'leo@gmail.com', '$2a$10$94dR0Lb83YRnOo1BRd0zBuIvbkBYoCymVkkncakdjDlZvsMGJiuVi', 142, 1);
INSERT INTO `users` VALUES ('6feeb01e-6b7c-4d34-8610-4b2caf798e89', 'ale@gmail.com', '$2a$10$Ed5NJDKxD3Lx7gVONiPFq.ui.lYmqtm/LRswCK1HEtjbHFqc.iD/m', 142, 1);
INSERT INTO `users` VALUES ('72804c43-e3e7-4a1b-a87b-175f740b30c6', 'admin@admin.com', '$2a$10$CTJdPhPo7Kg/n0goh7i8luy9lpxLnqf7xP9RP6fSLq7MHQmCRRtXu', 140, 1);
INSERT INTO `users` VALUES ('99a096cb-5429-407c-9b1e-f1fcc1fcab65', 'economist@gmail.com', '$2a$10$2OME2CBe7Ieyq8ZzNnr7/e6pJeXDuh2AbFBJ.yA7c6DoHxYGNketC', 144, 1);
INSERT INTO `users` VALUES ('9d26d980-25a5-47ff-9938-5d1c5885c70a', 'man@gmail.com', '$2a$10$N8sFQlN7oeWoK1yG38zQOeenQLBSyFufXdG8HgdCMAV5CFoZMCgCe', 143, 1);
INSERT INTO `users` VALUES ('a2a9679a-7727-48c4-aba0-a16cc68b6f4c', 'subs@gmail.com', '$2a$10$YrVQ4JqS03YR6sLbtHecTO5mxg7k1ew8hFVMcjXEykwi6Ag1LwPoy', 142, 1);
INSERT INTO `users` VALUES ('b5417e2b-62be-457e-b884-c1f6c70a923e', 'alejo@gmail.com', '$2a$10$loI9etTo2ToNGH/WFVOpJuGjwOryF00rtA/bJi4a7nm5.7cmdh1mm', 142, 1);
INSERT INTO `users` VALUES ('da13957f-f891-417b-aa93-ff2fa09e9819', 'mod@gmail.com', '$2a$10$Anu91zOFn8XaG6tZ05S80ucLL7AYo.JsRXoq4.JwBfuMLej0dRPDy', 141, 1);

SET FOREIGN_KEY_CHECKS = 1;
