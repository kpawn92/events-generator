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

 Date: 03/01/2023 21:44:56
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
  `status` tinyint(1) NOT NULL DEFAULT 0,
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
INSERT INTO `users` VALUES ('5558ef20-6742-412a-a36a-a8f5f91f9c75', 'ale@gmail.com', '$2a$10$zKstyUJEhb1qbisq/Y2mNOs64CmczAnXuSN/Nr2OQYpyMPWOv2slq', 136, 1);
INSERT INTO `users` VALUES ('63fe7bd3-3e88-4647-a9e9-9b82b08650bf', 'admin@admin.com', '$2a$10$yGxHug98ZDTtq8mrVRagCOMQ3a6m4SZeNHFq3MMjd5gacbWT79z4S', 135, 1);

SET FOREIGN_KEY_CHECKS = 1;
