-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema club_trueque
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema club_trueque
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `club_trueque` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `club_trueque` ;

-- -----------------------------------------------------
-- Table `club_trueque`.`pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `club_trueque`.`pais` (
  `id_pais` INT NOT NULL AUTO_INCREMENT,
  `pais_nombre` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_pais`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `club_trueque`.`ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `club_trueque`.`ciudad` (
  `id_ciudad` INT NOT NULL AUTO_INCREMENT,
  `id_pais` INT NOT NULL,
  `ciudad_nombre` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_ciudad`, `id_pais`),
  INDEX `fk_ciudad_pais1_idx` (`id_pais` ASC) VISIBLE,
  CONSTRAINT `fk_ciudad_pais1`
    FOREIGN KEY (`id_pais`)
    REFERENCES `club_trueque`.`pais` (`id_pais`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `club_trueque`.`descripcion_propiedad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `club_trueque`.`descripcion_propiedad` (
  `id_propiedad` INT NOT NULL AUTO_INCREMENT,
  `descripcion_label` VARCHAR(45) NULL DEFAULT NULL,
  `descripcion_value` VARCHAR(45) NULL DEFAULT NULL,
  `descripcion_unidad` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_propiedad`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `club_trueque`.`propiedad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `club_trueque`.`propiedad` (
  `id_prop` INT NOT NULL AUTO_INCREMENT,
  `id_pais` INT NOT NULL,
  `id_ciudad` INT NOT NULL,
  `name` VARCHAR(150) NULL DEFAULT NULL,
  `price` INT NULL DEFAULT NULL,
  `description` VARCHAR(300) NULL DEFAULT NULL,
  `address` VARCHAR(200) NULL DEFAULT NULL,
  `beds` VARCHAR(45) NULL DEFAULT NULL,
  `toileds` VARCHAR(45) NULL DEFAULT NULL,
  `square` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id_prop`),
  INDEX `fk_propiedad_ciudad1_idx` (`id_ciudad` ASC, `id_pais` ASC) VISIBLE,
  CONSTRAINT `fk_propiedad_ciudad1`
    FOREIGN KEY (`id_ciudad` , `id_pais`)
    REFERENCES `club_trueque`.`ciudad` (`id_ciudad` , `id_pais`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `club_trueque`.`imagen`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `club_trueque`.`imagen` (
  `id_img` INT NOT NULL AUTO_INCREMENT,
  `img_url` TEXT NULL DEFAULT NULL,
  `img_datetime` DATETIME NULL DEFAULT NULL,
  `img_principal` VARCHAR(1) NULL DEFAULT NULL,
  `img_enable` VARCHAR(1) NULL DEFAULT NULL,
  `id_prop` INT NOT NULL,
  PRIMARY KEY (`id_img`, `id_prop`),
  INDEX `fk_imagen_propiedad1_idx` (`id_prop` ASC) VISIBLE,
  CONSTRAINT `fk_imagen_propiedad1`
    FOREIGN KEY (`id_prop`)
    REFERENCES `club_trueque`.`propiedad` (`id_prop`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `club_trueque`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `club_trueque`.`usuario` (
  `id_usuario` INT NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(45) NULL DEFAULT NULL,
  `telephone` VARCHAR(45) NULL DEFAULT NULL,
  `address` VARCHAR(250) NULL DEFAULT NULL,
  `email` VARCHAR(200) NULL DEFAULT NULL,
  `propiedad_id_prop` INT NOT NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `fk_usuario_propiedad1_idx` (`propiedad_id_prop` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_propiedad1`
    FOREIGN KEY (`propiedad_id_prop`)
    REFERENCES `club_trueque`.`propiedad` (`id_prop`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
