-- Run in XAMPP phpMyAdmin (http://localhost/phpmyadmin) -> SQL tab
CREATE DATABASE IF NOT EXISTS upsdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE upsdb;

CREATE TABLE IF NOT EXISTS ups_entries (
  id           BIGINT       NOT NULL AUTO_INCREMENT PRIMARY KEY,
  no_of_ups    INT          NOT NULL,
  reference_no VARCHAR(100) NOT NULL
);
