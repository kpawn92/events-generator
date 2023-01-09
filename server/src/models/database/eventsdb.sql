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

 Date: 09/01/2023 12:00:07
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
INSERT INTO `digest_instance` VALUES ('a9581ea0-fcbe-4cdb-b385-354285b95142', 'b9bec396-8fea-42b2-a603-ca7507046935', 'ad2f4c51-7a9b-493b-8528-ca88f84e7650', 'lorem inpusy dasdasdgtg dsadsdg hmgmghf', 0, '2023-01-09 11:59:30.001812');

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
INSERT INTO `economist` VALUES ('9e1f65d1-8cb4-4e3d-859f-ed6dafcc79fd', 'Economist', 'Yes', '4546545121545', 'ba5651f9-b0f3-4faa-ae91-99a39c0b96ca', '2023-01-09 11:50:23.152375');

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
INSERT INTO `event` VALUES ('5caea558-68fd-4a72-8968-b65bc703d3de', 'Ciencia y tecnica', 'A long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opp', 1671577145, 1671577145, 1671577145, 1671577145, 13.58, '7874-5454-4564-4545', '2023-01-09 11:46:56.882905', 1);

-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid',
  `fk_subscriber` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL COMMENT 'uuid from users',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `link_presentation` varchar(400) CHARACTER SET utf8 COLLATE utf8_spanish_ci NULL DEFAULT NULL COMMENT 'link de redes sociales',
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_subscriber`(`fk_subscriber`) USING BTREE,
  CONSTRAINT `job_ibfk_1` FOREIGN KEY (`fk_subscriber`) REFERENCES `subscriber` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of job
-- ----------------------------
INSERT INTO `job` VALUES ('46b72c41-b9e5-4c47-9cd8-4330fc3bbd2b', '3077e79f-009e-4700-8dcd-7e61039ed73e', 'Manualdeusuario-1672633720423.pdf', NULL, '2023-01-01 23:28:40.541032');

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
INSERT INTO `living_room` VALUES ('ad2f4c51-7a9b-493b-8528-ca88f84e7650', '5caea558-68fd-4a72-8968-b65bc703d3de', 'Dpto Literatura', 'Lorem Ipsum es la denominación que recibe el texto en latín que habitualmente se utiliza de prueba en los proyectos de diseño gráfico y borradores par', 'a71b198a-29b0-4bb8-af83-c5b147033ec2', '2023-01-09 11:57:47.306549');

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
INSERT INTO `manager` VALUES ('a71b198a-29b0-4bb8-af83-c5b147033ec2', 'Manager', 'Wick', '454654047481', '799db7eb-b5dd-4f49-9e38-271fdb6e6959', '2023-01-09 11:56:43.582857');

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
INSERT INTO `moderator` VALUES ('38167dcf-5462-41b6-b37e-0f845cc59203', 'Jhon', 'Wick', '456546545456', 'ec7f0332-402c-418e-aefe-2cca0e392b3a', '2023-01-09 11:46:17.553279');
INSERT INTO `moderator` VALUES ('a3b54a1b-caa2-4ec8-aa6d-60093f431a40', 'Joe', 'Wick', '90102047481', 'c2d6bece-fa10-4e86-b94a-fd761f50ae16', '2023-01-05 12:59:32.958430');

-- ----------------------------
-- Table structure for payment_instance
-- ----------------------------
DROP TABLE IF EXISTS `payment_instance`;
CREATE TABLE `payment_instance`  (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `fk_subscriber` varchar(36) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
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
) ENGINE = InnoDB AUTO_INCREMENT = 140 CHARACTER SET = utf8 COLLATE = utf8_spanish_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES (135, 'admin');
INSERT INTO `roles` VALUES (136, 'user');
INSERT INTO `roles` VALUES (137, 'moderator');
INSERT INTO `roles` VALUES (138, 'manager');
INSERT INTO `roles` VALUES (139, 'economist');

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
INSERT INTO `subscriber` VALUES ('3077e79f-009e-4700-8dcd-7e61039ed73e', 'Alejo', 'Pozo Castro', 'Cuba', '921102047481', 'Fajardo', 0, '5558ef20-6742-412a-a36a-a8f5f91f9c75', '2023-01-01 23:27:05.537561');
INSERT INTO `subscriber` VALUES ('b9bec396-8fea-42b2-a603-ca7507046935', 'Jhon', 'Dae', 'Cuba-cu', '92122047481', 'UDG', 0, '06fe3665-321a-48c4-873a-76f109714f94', '2023-01-05 13:18:12.611238');

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
INSERT INTO `users` VALUES ('06fe3665-321a-48c4-873a-76f109714f94', 'jhon@gmail.com', '$2a$10$zz9PmUmnHnMCeLsh.xJl1eEALOuhEZrkgMnraSM9JgXG6evhY/fgG', 136, 1);
INSERT INTO `users` VALUES ('5558ef20-6742-412a-a36a-a8f5f91f9c75', 'ale@gmail.com', '$2a$10$zKstyUJEhb1qbisq/Y2mNOs64CmczAnXuSN/Nr2OQYpyMPWOv2slq', 136, 1);
INSERT INTO `users` VALUES ('63fe7bd3-3e88-4647-a9e9-9b82b08650bf', 'admin@admin.com', '$2a$10$yGxHug98ZDTtq8mrVRagCOMQ3a6m4SZeNHFq3MMjd5gacbWT79z4S', 135, 1);
INSERT INTO `users` VALUES ('799db7eb-b5dd-4f49-9e38-271fdb6e6959', 'manager@gmail.com', '$2a$10$aO3EEXvGFuDwHEpvSPc0H..mOtWw2zKTAe.DPX657QyEXUPZI.c1u', 138, 1);
INSERT INTO `users` VALUES ('ba5651f9-b0f3-4faa-ae91-99a39c0b96ca', 'economist@gamil.com', '$2a$10$xZGRx/u0L3pNDuGRw9BcyuqToor47mBqaomGoid9187mLARZkRkxi', 139, 1);
INSERT INTO `users` VALUES ('c2d6bece-fa10-4e86-b94a-fd761f50ae16', 'john@gamil.com', '$2a$10$z1wH7yfH/kqoi8NQkV6TOeHWO.p53Fg9VdHv5VJYfrM8.nA3G4XgK', 137, 1);
INSERT INTO `users` VALUES ('ec7f0332-402c-418e-aefe-2cca0e392b3a', 'moderator@gmail.com', '$2a$10$OOcdKftx.vA8hsnN9YJTjuITnsgDIlu7YAzWyOp658zHbihV8t1ou', 137, 1);

SET FOREIGN_KEY_CHECKS = 1;
