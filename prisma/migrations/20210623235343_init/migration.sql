-- CreateTable
CREATE TABLE `subscriber` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `subscriber.email_unique`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_of_child` VARCHAR(255) NOT NULL,
    `number_of_siblings` INTEGER NOT NULL DEFAULT 0,
    `age` VARCHAR(255) NOT NULL,
    `date_of_birth` DATETIME(3) NOT NULL,
    `gender` ENUM('male', 'female') NOT NULL,
    `level` ENUM('level_1', 'level_2', 'level_3') NOT NULL,
    `name_of_parent` VARCHAR(255),
    `name_of_guardian` VARCHAR(255),
    `address` VARCHAR(255) NOT NULL,
    `contact` VARCHAR(255) NOT NULL,
    `is_sms` ENUM('yes', 'no') NOT NULL,
    `child_medical_condition` TEXT,
    `allegies` TEXT,
    `signature` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
