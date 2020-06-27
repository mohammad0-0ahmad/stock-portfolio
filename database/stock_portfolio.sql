-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 27, 2020 at 02:41 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stock_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `industry` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `industry`) VALUES
(1, 'ICA', 'Livsmedel'),
(2, 'COOP', 'Livsmedel'),
(3, 'Boliden AB', 'Grundmaterial'),
(4, 'Höganäs AB', 'Grundmaterial'),
(5, 'Astra', 'Läkemedel'),
(6, 'Tika', 'Läkemedel'),
(7, 'Soab AB', 'Olja & gas'),
(8, 'Nynas AB', 'Olja & gas'),
(9, 'Ericsson', 'Teknologi'),
(10, 'Spotify', 'Teknologi'),
(11, 'Saab', 'Transportmedel'),
(12, 'Volvo', 'Transportmedel');

-- --------------------------------------------------------

--
-- Table structure for table `industries`
--

CREATE TABLE `industries` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `industries`
--

INSERT INTO `industries` (`name`) VALUES
('Grundmaterial'),
('Läkemedel'),
('Livsmedel'),
('Olja & gas'),
('Teknologi'),
('Transportmedel');

-- --------------------------------------------------------

--
-- Table structure for table `preferred_industries`
--

CREATE TABLE `preferred_industries` (
  `user_email` varchar(255) NOT NULL,
  `industry_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `preferred_industries`
--

INSERT INTO `preferred_industries` (`user_email`, `industry_name`) VALUES
('magnus@gmail.com', 'Läkemedel'),
('magnus@gmail.com', 'Olja & gas'),
('magnus@gmail.com', 'Teknologi'),
('magnus@gmail.com', 'Transportmedel');

-- --------------------------------------------------------

--
-- Table structure for table `reset_password_requests`
--

CREATE TABLE `reset_password_requests` (
  `id` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `start_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `stocks`
--

CREATE TABLE `stocks` (
  `reg_nr` int(11) NOT NULL,
  `amount` int(11) NOT NULL,
  `value` int(11) NOT NULL,
  `type` char(1) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stocks`
--

INSERT INTO `stocks` (`reg_nr`, `amount`, `value`, `type`, `owner`, `company_id`) VALUES
(1, 3904, 284366, 'B', 'magnus@gmail.com', 9),
(2, 136, 383809, 'A', 'magnus@gmail.com', 2),
(3, 4079, 458577, 'A', 'magnus@gmail.com', 7),
(4, 1247, 759840, 'A', 'magnus@gmail.com', 11),
(5, 1979, 59411, 'A', 'magnus@gmail.com', 5),
(6, 1647, 963104, 'A', 'magnus@gmail.com', 9),
(7, 4127, 175020, 'A', 'magnus@gmail.com', 8),
(8, 2280, 595736, 'B', 'magnus@gmail.com', 12),
(9, 3114, 814228, 'A', 'magnus@gmail.com', 6),
(11, 1455, 500000, 'A', 'magnus@gmail.com', 1),
(12, 1908, 377914, 'B', 'magnus@gmail.com', 2),
(13, 2673, 249221, 'C', 'magnus@gmail.com', 8),
(14, 1473, 197872, 'C', 'magnus@gmail.com', 4),
(16, 4104, 935044, 'C', 'magnus@gmail.com', 6),
(17, 658, 102838, 'B', 'magnus@gmail.com', 5),
(20, 3761, 794949, 'C', 'magnus@gmail.com', 3),
(23, 938, 581135, 'A', 'magnus@gmail.com', 3),
(24, 359, 786097, 'A', 'magnus@gmail.com', 10),
(27, 125, 798189, 'A', 'magnus@gmail.com', 4),
(28, 2541, 830412, 'B', 'magnus@gmail.com', 4),
(30, 1134, 296994, 'B', 'magnus@gmail.com', 6),
(37, 3382, 208888, 'B', 'magnus@gmail.com', 1),
(38, 1550, 72173, 'C', 'magnus@gmail.com', 10),
(40, 3096, 210882, 'C', 'magnus@gmail.com', 5),
(42, 4521, 825734, 'B', 'magnus@gmail.com', 8),
(48, 166, 540381, 'C', 'magnus@gmail.com', 11);

-- --------------------------------------------------------

--
-- Table structure for table `stock_types`
--

CREATE TABLE `stock_types` (
  `symbol` char(1) NOT NULL,
  `vote_ability` float(1,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stock_types`
--

INSERT INTO `stock_types` (`symbol`, `vote_ability`) VALUES
('A', 0.6),
('B', 0.3),
('C', 0.1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `f_name` varchar(255) NOT NULL,
  `l_name` varchar(255) NOT NULL,
  `p_nr` bigint(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `postal_code` int(11) NOT NULL,
  `telephone` varchar(15) NOT NULL,
  `l_update` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `password`, `f_name`, `l_name`, `p_nr`, `address`, `city`, `postal_code`, `telephone`, `l_update`) VALUES
('magnus@gmail.com', '$2b$12$yYC/89jnf9JH1sBhl1rABOltDOeD2Zz.FgP0J217hnYX9lBEU8xMu', 'Magnus', 'Persson', 197807174444, 'Lantmilsgatan 7', 'Göteborg', 41501, '0799463654', '2020-06-26 16:23:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `industry` (`industry`);

--
-- Indexes for table `industries`
--
ALTER TABLE `industries`
  ADD PRIMARY KEY (`name`);

--
-- Indexes for table `preferred_industries`
--
ALTER TABLE `preferred_industries`
  ADD KEY `user_email` (`user_email`),
  ADD KEY `industry_name` (`industry_name`);

--
-- Indexes for table `reset_password_requests`
--
ALTER TABLE `reset_password_requests`
  ADD KEY `user_email` (`user_email`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD KEY `user_email` (`user_email`);

--
-- Indexes for table `stocks`
--
ALTER TABLE `stocks`
  ADD PRIMARY KEY (`reg_nr`),
  ADD UNIQUE KEY `owner_2` (`owner`,`type`,`company_id`),
  ADD KEY `type` (`type`),
  ADD KEY `owner` (`owner`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `stock_types`
--
ALTER TABLE `stock_types`
  ADD PRIMARY KEY (`symbol`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `p_nr` (`p_nr`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `stocks`
--
ALTER TABLE `stocks`
  MODIFY `reg_nr` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=256;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `companies`
--
ALTER TABLE `companies`
  ADD CONSTRAINT `companies_ibfk_1` FOREIGN KEY (`industry`) REFERENCES `industries` (`name`);

--
-- Constraints for table `preferred_industries`
--
ALTER TABLE `preferred_industries`
  ADD CONSTRAINT `preferred_industries_ibfk_1` FOREIGN KEY (`user_email`) REFERENCES `users` (`email`),
  ADD CONSTRAINT `preferred_industries_ibfk_2` FOREIGN KEY (`industry_name`) REFERENCES `industries` (`name`);

--
-- Constraints for table `reset_password_requests`
--
ALTER TABLE `reset_password_requests`
  ADD CONSTRAINT `reset_password_requests_ibfk_1` FOREIGN KEY (`user_email`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sessions`
--
ALTER TABLE `sessions`
  ADD CONSTRAINT `sessions_ibfk_1` FOREIGN KEY (`user_email`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `stocks`
--
ALTER TABLE `stocks`
  ADD CONSTRAINT `stocks_ibfk_1` FOREIGN KEY (`type`) REFERENCES `stock_types` (`symbol`),
  ADD CONSTRAINT `stocks_ibfk_2` FOREIGN KEY (`owner`) REFERENCES `users` (`email`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `stocks_ibfk_3` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
