-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2025 at 04:53 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `dube`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  `description` text,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `category_name` (`category_name`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `description`) VALUES
(1, 'Dog Food', 'Nutritious and delicious food for your canine companions.'),
(2, 'Cat Food', 'Premium meals and treats for felines.'),
(3, 'Toys', 'Fun and engaging toys for all pets.'),
(4, 'Accessories', 'Collars, leashes, beds, and more.'),
(5, 'Grooming', 'Products to keep your pets clean and healthy.'),
(6, 'Health', 'Supplements and health-related items.'),
(7, 'Beds', 'Cozy and comfortable beds for your pets to rest and sleep.'),
(8, 'Cages & Crates', 'Secure and safe spaces for your pets at home or on the go.'),
(9, 'Treats', 'Delicious and healthy snacks for rewarding your pets.');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE IF NOT EXISTS `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `address` text,
  `phone_number` varchar(20) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`customer_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`customer_id`, `first_name`, `last_name`, `email`, `password_hash`, `address`, `phone_number`, `created_at`) VALUES
(1, 'Alice', 'Smith', 'alice.smith@example.com', 'hashedpassword1', '123 Pet Lane, Lagos', '08012345678', '2025-08-06 08:14:33'),
(2, 'Bob', 'Johnson', 'bob.j@example.com', 'hashedpassword2', '456 Woof Street, Abuja', '08023456789', '2025-08-06 08:14:33'),
(3, 'Charlie', 'Brown', 'charlie.b@example.com', 'hashedpassword3', '789 Meow Boulevard, Port Harcourt', '08034567890', '2025-08-06 08:14:33'),
(4, 'David', 'Evans', 'david.e@example.com', 'hashedpassword4', '101 Bark Avenue, Owerri', '08045678901', '2025-08-06 08:19:23'),
(5, 'Fiona', 'Green', 'fiona.g@example.com', 'hashedpassword5', '202 Purr Lane, Calabar', '08056789012', '2025-08-06 08:19:23');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `author_name` varchar(100) DEFAULT 'Admin',
  `category` varchar(50) DEFAULT 'General',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_published` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `image_url`, `author_name`, `category`, `created_at`, `updated_at`, `is_published`) VALUES
(1, 'Introducing Our New Line of Organic Pet Food!', 'We are thrilled to announce the launch of our new premium organic pet food line. Made with natural ingredients...', 'a.jpg', 'Sarah Doe', 'Press Release', '2025-08-08 03:03:31', '2025-08-08 03:41:41', 1),
(2, '5 Tips for a Healthy and Happy Dog', 'Keeping your dog happy and healthy is easier than you think. Here are our top five tips for canine wellness...', 'b.jpg', 'John Smith', 'Blog Post', '2025-08-08 03:03:31', '2025-08-08 03:41:49', 1),
(3, 'Summer Sale: 20% Off All Pet Toys!', 'Get ready for some fun! This weekend only, enjoy a 20% discount on all pet toys in-store and online. Don''t miss out!', 'm.jpg', 'Admin', 'Announcement', '2025-08-08 03:03:31', '2025-08-08 03:42:30', 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderitems`
--

CREATE TABLE IF NOT EXISTS `orderitems` (
  `order_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `price_at_purchase` decimal(10,2) NOT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `orderitems`
--

INSERT INTO `orderitems` (`order_item_id`, `order_id`, `product_id`, `quantity`, `price_at_purchase`) VALUES
(1, 1, 1, 1, '45.99'),
(2, 1, 5, 1, '12.99'),
(3, 2, 3, 1, '38.75'),
(4, 2, 6, 2, '8.50'),
(5, 3, 8, 1, '29.95'),
(6, 4, 2, 1, '55.50'),
(7, 4, 9, 2, '15.00'),
(8, 5, 13, 1, '25.99'),
(9, 5, 14, 1, '8.99'),
(10, 6, 16, 1, '85.00'),
(11, 7, 18, 1, '18.25');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) DEFAULT NULL,
  `order_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `total_amount` decimal(10,2) NOT NULL,
  `order_status` varchar(50) NOT NULL DEFAULT 'Pending',
  `shipping_address` text,
  PRIMARY KEY (`order_id`),
  KEY `customer_id` (`customer_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=8 ;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `customer_id`, `order_date`, `total_amount`, `order_status`, `shipping_address`) VALUES
(1, 1, '2025-08-06 08:14:33', '63.99', 'Delivered', '123 Pet Lane, Lagos'),
(2, 2, '2025-08-06 08:14:33', '53.25', 'Processing', '456 Woof Street, Abuja'),
(3, 1, '2025-08-06 08:14:33', '29.95', 'Pending', '123 Pet Lane, Lagos'),
(4, 3, '2025-08-06 08:14:33', '85.00', 'Shipped', '789 Meow Boulevard, Port Harcourt'),
(5, 4, '2025-08-06 08:19:23', '34.99', 'Shipped', '101 Bark Avenue, Owerri'),
(6, 5, '2025-08-06 08:19:23', '85.00', 'Pending', '202 Purr Lane, Calabar'),
(7, 4, '2025-08-06 08:19:23', '18.25', 'Processing', '101 Bark Avenue, Owerri');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `description` text,
  `price` decimal(10,2) NOT NULL,
  `stock_quantity` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `thumbnail_url` varchar(255) NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=172 ;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `description`, `price`, `stock_quantity`, `category_id`, `image_url`, `created_at`, `updated_at`, `thumbnail_url`) VALUES
(1, 'Premium Adult Dog Food', 'Complete and balanced nutrition for adult dogs.', '45.99', 150, 1, 'dog_food_adult.jpg', '2025-08-06 08:14:33', '2025-08-08 03:33:46', 'dog_food_adult_thumb.jpg'),
(2, 'Grain-Free Puppy Kibble', 'High-protein, grain-free formula for growing puppies.', '55.50', 100, 1, 'dog_food_puppy.jpg', '2025-08-06 08:14:33', '2025-08-08 03:15:09', 'dog_food_puppy.jpg'),
(3, 'Indoor Cat Formula', 'Specially formulated for less active indoor cats.', '38.75', 120, 2, 'cat_food_indoor.jpg', '2025-08-06 08:14:33', '2025-08-08 03:15:26', 'cat_food_indoor.jpg'),
(4, 'Wet Cat Food Variety Pack', 'Assorted flavors of pate and gravy wet food.', '25.00', 80, 2, 'cat_food_wet.jpg', '2025-08-06 08:14:33', '2025-08-08 03:15:36', 'cat_food_wet.jpg'),
(5, 'Durable Chew Toy', 'Indestructible rubber toy for strong chewers.', '12.99', 200, 3, 'toy_chew.jpg', '2025-08-06 08:14:33', '2025-08-08 03:15:54', 'toy_chew.jpg'),
(6, 'Interactive Laser Pointer', 'Engaging laser for endless playtime with cats.', '8.50', 300, 3, 'm.jpg', '2025-08-06 08:14:33', '2025-08-08 03:16:06', 'm.jpg'),
(7, 'Adjustable Dog Collar (Large)', 'Comfortable and durable collar for large dogs.', '18.00', 90, 4, 'adjustable.jpg', '2025-08-06 08:14:33', '2025-08-08 03:16:26', 'adjustable.jpg'),
(8, 'Retractable Dog Leash (Medium)', 'Ergonomic leash for walks and training.', '29.95', 70, 4, 'retractable.jpg', '2025-08-06 08:14:33', '2025-08-08 03:16:34', 'retractable.jpg'),
(9, 'Pet Grooming Brush', 'Removes loose fur and detangles coats.', '15.00', 110, 5, 'grooming.jpg', '2025-08-06 08:14:33', '2025-08-08 03:16:44', 'grooming.jpg'),
(10, 'Oatmeal Pet Shampoo', 'Soothing shampoo for sensitive skin.', '9.75', 180, 5, 'd.jpg', '2025-08-06 08:14:33', '2025-08-08 03:16:54', 'd.jpg'),
(11, 'Joint Support Supplement', 'Aids in hip and joint health for older pets.', '32.00', 60, 6, 'e.jpg', '2025-08-06 08:14:33', '2025-08-08 03:17:04', 'e.jpg'),
(12, 'Probiotic Chews', 'Supports digestive health and immunity.', '22.50', 95, 6, 'probiotic_chews.jpg', '2025-08-06 08:14:33', '2025-08-08 03:17:11', 'probiotic_chews.jpg'),
(13, 'Royal Canine Dog Food', 'A nutritionally complete food for adult small dogs.', '25.99', 200, 1, 'i.jpg', '2025-08-06 08:19:22', '2025-08-08 03:17:27', 'i.jpg'),
(14, 'Tuna & Salmon Cat Treats', 'Crunchy treats made with real tuna and salmon.', '8.99', 350, 7, 'e.jpg', '2025-08-06 08:19:22', '2025-08-08 03:17:37', 'e.jpg'),
(15, 'Plush Squeaky Toy', 'Soft, durable plush toy with a squeaker for fun.', '9.50', 180, 3, 'n.jpg', '2025-08-06 08:19:22', '2025-08-08 03:17:48', 'n.jpg'),
(16, 'Luxury Orthopedic Bed', 'Memory foam bed for older dogs or those with joint issues.', '85.00', 60, 7, 'f.jpg', '2025-08-06 08:19:22', '2025-08-08 03:17:57', 'f.jpg'),
(17, 'Dog Carrier Crate', 'Lightweight, portable crate for safe travel.', '49.99', 90, 8, 'a.jpg', '2025-08-06 08:19:22', '2025-08-08 03:18:07', 'a.jpg'),
(18, 'Stainless Steel Food Bowl', 'Durable, easy-to-clean bowl for food and water.', '14.00', 250, 4, 'steel_food_bowl.jpg', '2025-08-06 08:19:22', '2025-08-08 03:18:17', 'steel_food_bowl.jpg'),
(19, 'Teeth Cleaning Chews', 'Dental treats to help reduce plaque and tartar buildup.', '18.25', 120, 6, 'h.jpg', '2025-08-06 08:19:22', '2025-08-08 03:18:25', 'h.jpg'),
(20, 'Premium Adult Dog Food', 'Complete and balanced nutrition for adult dogs.', '45.99', 150, 1, 'dog_food_adult.jpg', '2025-08-06 07:14:33', '2025-08-08 02:33:46', 'dog_food_adult_thumb.jpg'),
(21, 'Grain-Free Puppy Kibble', 'High-protein, grain-free formula for growing puppies.', '55.50', 100, 1, 'dog_food_puppy.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:09', 'dog_food_puppy.jpg'),
(22, 'Indoor Cat Formula', 'Specially formulated for less active indoor cats.', '38.75', 120, 1, 'cat_food_indoor.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:26', 'cat_food_indoor.jpg'),
(23, 'Wet Cat Food Variety Pack', 'Assorted flavors of pate and gravy wet food.', '25.00', 80, 1, 'cat_food_wet.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:36', 'cat_food_wet.jpg'),
(24, 'Durable Chew Toy', 'Indestructible rubber toy for strong chewers.', '12.99', 200, 3, 'toy_chew.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:54', 'toy_chew.jpg'),
(25, 'Interactive Laser Pointer', 'Engaging laser for endless playtime with cats.', '8.50', 300, 1, 'm.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:06', 'm.jpg'),
(26, 'Adjustable Dog Collar (Large)', 'Comfortable and durable collar for large dogs.', '18.00', 90, 1, 'adjustable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:26', 'adjustable.jpg'),
(27, 'Retractable Dog Leash (Medium)', 'Ergonomic leash for walks and training.', '29.95', 70, 1, 'retractable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:34', 'retractable.jpg'),
(28, 'Pet Grooming Brush', 'Removes loose fur and detangles coats.', '15.00', 110, 1, 'grooming.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:44', 'grooming.jpg'),
(29, 'Oatmeal Pet Shampoo', 'Soothing shampoo for sensitive skin.', '9.75', 180, 1, 'd.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:54', 'd.jpg'),
(30, 'Joint Support Supplement', 'Aids in hip and joint health for older pets.', '32.00', 60, 1, 'e.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:04', 'e.jpg'),
(31, 'Probiotic Chews', 'Supports digestive health and immunity.', '22.50', 95, 1, 'probiotic_chews.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:11', 'probiotic_chews.jpg'),
(32, 'Royal Canine Dog Food', 'A nutritionally complete food for adult small dogs.', '25.99', 200, 1, 'i.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:27', 'i.jpg'),
(33, 'Tuna & Salmon Cat Treats', 'Crunchy treats made with real tuna and salmon.', '8.99', 350, 2, 'e.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:37', 'e.jpg'),
(34, 'Plush Squeaky Toy', 'Soft, durable plush toy with a squeaker for fun.', '9.50', 180, 2, 'n.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:48', 'n.jpg'),
(35, 'Luxury Orthopedic Bed', 'Memory foam bed for older dogs or those with joint issues.', '85.00', 60, 2, 'f.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:57', 'f.jpg'),
(36, 'Dog Carrier Crate', 'Lightweight, portable crate for safe travel.', '49.99', 90, 2, 'a.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:07', 'a.jpg'),
(37, 'Stainless Steel Food Bowl', 'Durable, easy-to-clean bowl for food and water.', '14.00', 250, 2, 'steel_food_bowl.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:17', 'steel_food_bowl.jpg'),
(38, 'Teeth Cleaning Chews', 'Dental treats to help reduce plaque and tartar buildup.', '18.25', 120, 2, 'h.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:25', 'h.jpg'),
(39, 'Premium Adult Dog Food', 'Complete and balanced nutrition for adult dogs.', '45.99', 150, 3, 'dog_food_adult.jpg', '2025-08-06 07:14:33', '2025-08-08 02:33:46', 'dog_food_adult_thumb.jpg'),
(40, 'Grain-Free Puppy Kibble', 'High-protein, grain-free formula for growing puppies.', '55.50', 100, 3, 'dog_food_puppy.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:09', 'dog_food_puppy.jpg'),
(41, 'Indoor Cat Formula', 'Specially formulated for less active indoor cats.', '38.75', 120, 3, 'cat_food_indoor.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:26', 'cat_food_indoor.jpg'),
(42, 'Wet Cat Food Variety Pack', 'Assorted flavors of pate and gravy wet food.', '25.00', 80, 3, 'cat_food_wet.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:36', 'cat_food_wet.jpg'),
(43, 'Durable Chew Toy', 'Indestructible rubber toy for strong chewers.', '12.99', 200, 3, 'toy_chew.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:54', 'toy_chew.jpg'),
(44, 'Interactive Laser Pointer', 'Engaging laser for endless playtime with cats.', '8.50', 300, 3, 'm.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:06', 'm.jpg'),
(45, 'Adjustable Dog Collar (Large)', 'Comfortable and durable collar for large dogs.', '18.00', 90, 3, 'adjustable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:26', 'adjustable.jpg'),
(46, 'Retractable Dog Leash (Medium)', 'Ergonomic leash for walks and training.', '29.95', 70, 3, 'retractable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:34', 'retractable.jpg'),
(47, 'Pet Grooming Brush', 'Removes loose fur and detangles coats.', '15.00', 110, 3, 'grooming.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:44', 'grooming.jpg'),
(48, 'Oatmeal Pet Shampoo', 'Soothing shampoo for sensitive skin.', '9.75', 180, 3, 'd.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:54', 'd.jpg'),
(49, 'Joint Support Supplement', 'Aids in hip and joint health for older pets.', '32.00', 60, 3, 'e.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:04', 'e.jpg'),
(50, 'Probiotic Chews', 'Supports digestive health and immunity.', '22.50', 95, 3, 'probiotic_chews.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:11', 'probiotic_chews.jpg'),
(51, 'Royal Canine Dog Food', 'A nutritionally complete food for adult small dogs.', '25.99', 200, 3, 'i.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:27', 'i.jpg'),
(52, 'Tuna & Salmon Cat Treats', 'Crunchy treats made with real tuna and salmon.', '8.99', 350, 2, 'e.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:37', 'e.jpg'),
(53, 'Plush Squeaky Toy', 'Soft, durable plush toy with a squeaker for fun.', '9.50', 180, 2, 'n.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:48', 'n.jpg'),
(54, 'Luxury Orthopedic Bed', 'Memory foam bed for older dogs or those with joint issues.', '85.00', 60, 2, 'f.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:57', 'f.jpg'),
(55, 'Dog Carrier Crate', 'Lightweight, portable crate for safe travel.', '49.99', 90, 2, 'a.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:07', 'a.jpg'),
(56, 'Stainless Steel Food Bowl', 'Durable, easy-to-clean bowl for food and water.', '14.00', 250, 2, 'steel_food_bowl.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:17', 'steel_food_bowl.jpg'),
(57, 'Teeth Cleaning Chews', 'Dental treats to help reduce plaque and tartar buildup.', '18.25', 120, 2, 'h.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:25', 'h.jpg'),
(58, 'Premium Adult Dog Food', 'Complete and balanced nutrition for adult dogs.', '45.99', 150, 4, 'dog_food_adult.jpg', '2025-08-06 07:14:33', '2025-08-08 02:33:46', 'dog_food_adult_thumb.jpg'),
(59, 'Grain-Free Puppy Kibble', 'High-protein, grain-free formula for growing puppies.', '55.50', 100, 4, 'dog_food_puppy.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:09', 'dog_food_puppy.jpg'),
(60, 'Indoor Cat Formula', 'Specially formulated for less active indoor cats.', '38.75', 120, 4, 'cat_food_indoor.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:26', 'cat_food_indoor.jpg'),
(61, 'Wet Cat Food Variety Pack', 'Assorted flavors of pate and gravy wet food.', '25.00', 80, 4, 'cat_food_wet.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:36', 'cat_food_wet.jpg'),
(62, 'Durable Chew Toy', 'Indestructible rubber toy for strong chewers.', '12.99', 200, 4, 'toy_chew.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:54', 'toy_chew.jpg'),
(63, 'Interactive Laser Pointer', 'Engaging laser for endless playtime with cats.', '8.50', 300, 4, 'm.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:06', 'm.jpg'),
(64, 'Adjustable Dog Collar (Large)', 'Comfortable and durable collar for large dogs.', '18.00', 90, 4, 'adjustable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:26', 'adjustable.jpg'),
(65, 'Retractable Dog Leash (Medium)', 'Ergonomic leash for walks and training.', '29.95', 70, 4, 'retractable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:34', 'retractable.jpg'),
(66, 'Pet Grooming Brush', 'Removes loose fur and detangles coats.', '15.00', 110, 4, 'grooming.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:44', 'grooming.jpg'),
(67, 'Oatmeal Pet Shampoo', 'Soothing shampoo for sensitive skin.', '9.75', 180, 4, 'd.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:54', 'd.jpg'),
(68, 'Joint Support Supplement', 'Aids in hip and joint health for older pets.', '32.00', 60, 4, 'e.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:04', 'e.jpg'),
(69, 'Probiotic Chews', 'Supports digestive health and immunity.', '22.50', 95, 4, 'probiotic_chews.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:11', 'probiotic_chews.jpg'),
(70, 'Royal Canine Dog Food', 'A nutritionally complete food for adult small dogs.', '25.99', 200, 5, 'i.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:27', 'i.jpg'),
(71, 'Tuna & Salmon Cat Treats', 'Crunchy treats made with real tuna and salmon.', '8.99', 350, 5, 'e.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:37', 'e.jpg'),
(72, 'Plush Squeaky Toy', 'Soft, durable plush toy with a squeaker for fun.', '9.50', 180, 5, 'n.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:48', 'n.jpg'),
(73, 'Luxury Orthopedic Bed', 'Memory foam bed for older dogs or those with joint issues.', '85.00', 60, 5, 'f.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:57', 'f.jpg'),
(74, 'Dog Carrier Crate', 'Lightweight, portable crate for safe travel.', '49.99', 90, 5, 'a.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:07', 'a.jpg'),
(75, 'Stainless Steel Food Bowl', 'Durable, easy-to-clean bowl for food and water.', '14.00', 250, 5, 'steel_food_bowl.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:17', 'steel_food_bowl.jpg'),
(76, 'Teeth Cleaning Chews', 'Dental treats to help reduce plaque and tartar buildup.', '18.25', 120, 5, 'h.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:25', 'h.jpg'),
(77, 'Premium Adult Dog Food', 'Complete and balanced nutrition for adult dogs.', '45.99', 150, 4, 'dog_food_adult.jpg', '2025-08-06 07:14:33', '2025-08-08 02:33:46', 'dog_food_adult_thumb.jpg'),
(78, 'Grain-Free Puppy Kibble', 'High-protein, grain-free formula for growing puppies.', '55.50', 100, 4, 'dog_food_puppy.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:09', 'dog_food_puppy.jpg'),
(79, 'Indoor Cat Formula', 'Specially formulated for less active indoor cats.', '38.75', 120, 4, 'cat_food_indoor.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:26', 'cat_food_indoor.jpg'),
(80, 'Wet Cat Food Variety Pack', 'Assorted flavors of pate and gravy wet food.', '25.00', 80, 4, 'cat_food_wet.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:36', 'cat_food_wet.jpg'),
(81, 'Durable Chew Toy', 'Indestructible rubber toy for strong chewers.', '12.99', 200, 4, 'toy_chew.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:54', 'toy_chew.jpg'),
(82, 'Interactive Laser Pointer', 'Engaging laser for endless playtime with cats.', '8.50', 300, 4, 'm.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:06', 'm.jpg'),
(83, 'Adjustable Dog Collar (Large)', 'Comfortable and durable collar for large dogs.', '18.00', 90, 4, 'adjustable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:26', 'adjustable.jpg'),
(84, 'Retractable Dog Leash (Medium)', 'Ergonomic leash for walks and training.', '29.95', 70, 4, 'retractable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:34', 'retractable.jpg'),
(85, 'Pet Grooming Brush', 'Removes loose fur and detangles coats.', '15.00', 110, 4, 'grooming.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:44', 'grooming.jpg'),
(86, 'Oatmeal Pet Shampoo', 'Soothing shampoo for sensitive skin.', '9.75', 180, 4, 'd.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:54', 'd.jpg'),
(87, 'Joint Support Supplement', 'Aids in hip and joint health for older pets.', '32.00', 60, 4, 'e.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:04', 'e.jpg'),
(88, 'Probiotic Chews', 'Supports digestive health and immunity.', '22.50', 95, 4, 'probiotic_chews.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:11', 'probiotic_chews.jpg'),
(89, 'Royal Canine Dog Food', 'A nutritionally complete food for adult small dogs.', '25.99', 200, 5, 'i.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:27', 'i.jpg'),
(90, 'Tuna & Salmon Cat Treats', 'Crunchy treats made with real tuna and salmon.', '8.99', 350, 5, 'e.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:37', 'e.jpg'),
(91, 'Plush Squeaky Toy', 'Soft, durable plush toy with a squeaker for fun.', '9.50', 180, 5, 'n.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:48', 'n.jpg'),
(92, 'Luxury Orthopedic Bed', 'Memory foam bed for older dogs or those with joint issues.', '85.00', 60, 5, 'f.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:57', 'f.jpg'),
(93, 'Dog Carrier Crate', 'Lightweight, portable crate for safe travel.', '49.99', 90, 5, 'a.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:07', 'a.jpg'),
(94, 'Stainless Steel Food Bowl', 'Durable, easy-to-clean bowl for food and water.', '14.00', 250, 5, 'steel_food_bowl.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:17', 'steel_food_bowl.jpg'),
(95, 'Teeth Cleaning Chews', 'Dental treats to help reduce plaque and tartar buildup.', '18.25', 120, 5, 'h.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:25', 'h.jpg'),
(96, 'Premium Adult Dog Food', 'Complete and balanced nutrition for adult dogs.', '45.99', 150, 6, 'dog_food_adult.jpg', '2025-08-06 07:14:33', '2025-08-08 02:33:46', 'dog_food_adult_thumb.jpg'),
(97, 'Grain-Free Puppy Kibble', 'High-protein, grain-free formula for growing puppies.', '55.50', 100, 6, 'dog_food_puppy.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:09', 'dog_food_puppy.jpg'),
(98, 'Indoor Cat Formula', 'Specially formulated for less active indoor cats.', '38.75', 120, 6, 'cat_food_indoor.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:26', 'cat_food_indoor.jpg'),
(99, 'Wet Cat Food Variety Pack', 'Assorted flavors of pate and gravy wet food.', '25.00', 80, 6, 'cat_food_wet.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:36', 'cat_food_wet.jpg'),
(100, 'Durable Chew Toy', 'Indestructible rubber toy for strong chewers.', '12.99', 200, 6, 'toy_chew.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:54', 'toy_chew.jpg'),
(101, 'Interactive Laser Pointer', 'Engaging laser for endless playtime with cats.', '8.50', 300, 6, 'm.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:06', 'm.jpg'),
(102, 'Adjustable Dog Collar (Large)', 'Comfortable and durable collar for large dogs.', '18.00', 90, 6, 'adjustable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:26', 'adjustable.jpg'),
(103, 'Retractable Dog Leash (Medium)', 'Ergonomic leash for walks and training.', '29.95', 70, 6, 'retractable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:34', 'retractable.jpg'),
(104, 'Pet Grooming Brush', 'Removes loose fur and detangles coats.', '15.00', 110, 6, 'grooming.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:44', 'grooming.jpg'),
(105, 'Oatmeal Pet Shampoo', 'Soothing shampoo for sensitive skin.', '9.75', 180, 6, 'd.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:54', 'd.jpg'),
(106, 'Joint Support Supplement', 'Aids in hip and joint health for older pets.', '32.00', 60, 7, 'e.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:04', 'e.jpg'),
(107, 'Probiotic Chews', 'Supports digestive health and immunity.', '22.50', 95, 7, 'probiotic_chews.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:11', 'probiotic_chews.jpg'),
(108, 'Royal Canine Dog Food', 'A nutritionally complete food for adult small dogs.', '25.99', 200, 7, 'i.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:27', 'i.jpg'),
(109, 'Tuna & Salmon Cat Treats', 'Crunchy treats made with real tuna and salmon.', '8.99', 350, 7, 'e.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:37', 'e.jpg'),
(110, 'Plush Squeaky Toy', 'Soft, durable plush toy with a squeaker for fun.', '9.50', 180, 7, 'n.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:48', 'n.jpg'),
(111, 'Luxury Orthopedic Bed', 'Memory foam bed for older dogs or those with joint issues.', '85.00', 60, 7, 'f.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:57', 'f.jpg'),
(112, 'Dog Carrier Crate', 'Lightweight, portable crate for safe travel.', '49.99', 90, 7, 'a.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:07', 'a.jpg'),
(113, 'Stainless Steel Food Bowl', 'Durable, easy-to-clean bowl for food and water.', '14.00', 250, 7, 'steel_food_bowl.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:17', 'steel_food_bowl.jpg'),
(114, 'Teeth Cleaning Chews', 'Dental treats to help reduce plaque and tartar buildup.', '18.25', 120, 7, 'h.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:25', 'h.jpg'),
(115, 'Premium Adult Dog Food', 'Complete and balanced nutrition for adult dogs.', '45.99', 150, 8, 'dog_food_adult.jpg', '2025-08-06 07:14:33', '2025-08-08 02:33:46', 'dog_food_adult_thumb.jpg'),
(116, 'Grain-Free Puppy Kibble', 'High-protein, grain-free formula for growing puppies.', '55.50', 100, 8, 'dog_food_puppy.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:09', 'dog_food_puppy.jpg'),
(117, 'Indoor Cat Formula', 'Specially formulated for less active indoor cats.', '38.75', 120, 8, 'cat_food_indoor.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:26', 'cat_food_indoor.jpg'),
(118, 'Wet Cat Food Variety Pack', 'Assorted flavors of pate and gravy wet food.', '25.00', 80, 8, 'cat_food_wet.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:36', 'cat_food_wet.jpg'),
(119, 'Durable Chew Toy', 'Indestructible rubber toy for strong chewers.', '12.99', 200, 8, 'toy_chew.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:54', 'toy_chew.jpg'),
(120, 'Interactive Laser Pointer', 'Engaging laser for endless playtime with cats.', '8.50', 300, 8, 'm.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:06', 'm.jpg'),
(121, 'Adjustable Dog Collar (Large)', 'Comfortable and durable collar for large dogs.', '18.00', 90, 8, 'adjustable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:26', 'adjustable.jpg'),
(122, 'Retractable Dog Leash (Medium)', 'Ergonomic leash for walks and training.', '29.95', 70, 8, 'retractable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:34', 'retractable.jpg'),
(123, 'Pet Grooming Brush', 'Removes loose fur and detangles coats.', '15.00', 110, 8, 'grooming.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:44', 'grooming.jpg'),
(124, 'Oatmeal Pet Shampoo', 'Soothing shampoo for sensitive skin.', '9.75', 180, 8, 'd.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:54', 'd.jpg'),
(125, 'Joint Support Supplement', 'Aids in hip and joint health for older pets.', '32.00', 60, 8, 'e.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:04', 'e.jpg'),
(126, 'Probiotic Chews', 'Supports digestive health and immunity.', '22.50', 95, 8, 'probiotic_chews.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:11', 'probiotic_chews.jpg'),
(127, 'Royal Canine Dog Food', 'A nutritionally complete food for adult small dogs.', '25.99', 200, 9, 'i.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:27', 'i.jpg'),
(128, 'Tuna & Salmon Cat Treats', 'Crunchy treats made with real tuna and salmon.', '8.99', 350, 9, 'e.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:37', 'e.jpg'),
(129, 'Plush Squeaky Toy', 'Soft, durable plush toy with a squeaker for fun.', '9.50', 180, 9, 'n.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:48', 'n.jpg'),
(130, 'Luxury Orthopedic Bed', 'Memory foam bed for older dogs or those with joint issues.', '85.00', 60, 9, 'f.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:57', 'f.jpg'),
(131, 'Dog Carrier Crate', 'Lightweight, portable crate for safe travel.', '49.99', 90, 9, 'a.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:07', 'a.jpg'),
(132, 'Stainless Steel Food Bowl', 'Durable, easy-to-clean bowl for food and water.', '14.00', 250, 9, 'steel_food_bowl.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:17', 'steel_food_bowl.jpg'),
(133, 'Teeth Cleaning Chews', 'Dental treats to help reduce plaque and tartar buildup.', '18.25', 120, 9, 'h.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:25', 'h.jpg'),
(134, 'Premium Adult Dog Food', 'Complete and balanced nutrition for adult dogs.', '45.99', 150, 8, 'dog_food_adult.jpg', '2025-08-06 07:14:33', '2025-08-08 02:33:46', 'dog_food_adult_thumb.jpg'),
(135, 'Grain-Free Puppy Kibble', 'High-protein, grain-free formula for growing puppies.', '55.50', 100, 8, 'dog_food_puppy.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:09', 'dog_food_puppy.jpg'),
(136, 'Indoor Cat Formula', 'Specially formulated for less active indoor cats.', '38.75', 120, 8, 'cat_food_indoor.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:26', 'cat_food_indoor.jpg'),
(137, 'Wet Cat Food Variety Pack', 'Assorted flavors of pate and gravy wet food.', '25.00', 80, 8, 'cat_food_wet.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:36', 'cat_food_wet.jpg'),
(138, 'Durable Chew Toy', 'Indestructible rubber toy for strong chewers.', '12.99', 200, 8, 'toy_chew.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:54', 'toy_chew.jpg'),
(139, 'Interactive Laser Pointer', 'Engaging laser for endless playtime with cats.', '8.50', 300, 8, 'm.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:06', 'm.jpg'),
(140, 'Adjustable Dog Collar (Large)', 'Comfortable and durable collar for large dogs.', '18.00', 90, 8, 'adjustable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:26', 'adjustable.jpg'),
(141, 'Retractable Dog Leash (Medium)', 'Ergonomic leash for walks and training.', '29.95', 70, 8, 'retractable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:34', 'retractable.jpg'),
(142, 'Pet Grooming Brush', 'Removes loose fur and detangles coats.', '15.00', 110, 8, 'grooming.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:44', 'grooming.jpg'),
(143, 'Oatmeal Pet Shampoo', 'Soothing shampoo for sensitive skin.', '9.75', 180, 8, 'd.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:54', 'd.jpg'),
(144, 'Joint Support Supplement', 'Aids in hip and joint health for older pets.', '32.00', 60, 8, 'e.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:04', 'e.jpg'),
(145, 'Probiotic Chews', 'Supports digestive health and immunity.', '22.50', 95, 8, 'probiotic_chews.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:11', 'probiotic_chews.jpg'),
(146, 'Royal Canine Dog Food', 'A nutritionally complete food for adult small dogs.', '25.99', 200, 9, 'i.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:27', 'i.jpg'),
(147, 'Tuna & Salmon Cat Treats', 'Crunchy treats made with real tuna and salmon.', '8.99', 350, 9, 'e.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:37', 'e.jpg'),
(148, 'Plush Squeaky Toy', 'Soft, durable plush toy with a squeaker for fun.', '9.50', 180, 9, 'n.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:48', 'n.jpg'),
(149, 'Luxury Orthopedic Bed', 'Memory foam bed for older dogs or those with joint issues.', '85.00', 60, 9, 'f.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:57', 'f.jpg'),
(150, 'Dog Carrier Crate', 'Lightweight, portable crate for safe travel.', '49.99', 90, 9, 'a.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:07', 'a.jpg'),
(151, 'Stainless Steel Food Bowl', 'Durable, easy-to-clean bowl for food and water.', '14.00', 250, 9, 'steel_food_bowl.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:17', 'steel_food_bowl.jpg'),
(152, 'Teeth Cleaning Chews', 'Dental treats to help reduce plaque and tartar buildup.', '18.25', 120, 9, 'h.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:25', 'h.jpg'),
(153, 'Premium Adult Dog Food', 'Complete and balanced nutrition for adult dogs.', '45.99', 150, 8, 'dog_food_adult.jpg', '2025-08-06 07:14:33', '2025-08-08 02:33:46', 'dog_food_adult_thumb.jpg'),
(154, 'Grain-Free Puppy Kibble', 'High-protein, grain-free formula for growing puppies.', '55.50', 100, 8, 'dog_food_puppy.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:09', 'dog_food_puppy.jpg'),
(155, 'Indoor Cat Formula', 'Specially formulated for less active indoor cats.', '38.75', 120, 8, 'cat_food_indoor.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:26', 'cat_food_indoor.jpg'),
(156, 'Wet Cat Food Variety Pack', 'Assorted flavors of pate and gravy wet food.', '25.00', 80, 8, 'cat_food_wet.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:36', 'cat_food_wet.jpg'),
(157, 'Durable Chew Toy', 'Indestructible rubber toy for strong chewers.', '12.99', 200, 8, 'toy_chew.jpg', '2025-08-06 07:14:33', '2025-08-08 02:15:54', 'toy_chew.jpg'),
(158, 'Interactive Laser Pointer', 'Engaging laser for endless playtime with cats.', '8.50', 300, 8, 'm.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:06', 'm.jpg'),
(159, 'Adjustable Dog Collar (Large)', 'Comfortable and durable collar for large dogs.', '18.00', 90, 8, 'adjustable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:26', 'adjustable.jpg'),
(160, 'Retractable Dog Leash (Medium)', 'Ergonomic leash for walks and training.', '29.95', 70, 8, 'retractable.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:34', 'retractable.jpg'),
(161, 'Pet Grooming Brush', 'Removes loose fur and detangles coats.', '15.00', 110, 8, 'grooming.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:44', 'grooming.jpg'),
(162, 'Oatmeal Pet Shampoo', 'Soothing shampoo for sensitive skin.', '9.75', 180, 8, 'd.jpg', '2025-08-06 07:14:33', '2025-08-08 02:16:54', 'd.jpg'),
(163, 'Joint Support Supplement', 'Aids in hip and joint health for older pets.', '32.00', 60, 8, 'e.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:04', 'e.jpg'),
(164, 'Probiotic Chews', 'Supports digestive health and immunity.', '22.50', 95, 8, 'probiotic_chews.jpg', '2025-08-06 07:14:33', '2025-08-08 02:17:11', 'probiotic_chews.jpg'),
(165, 'Royal Canine Dog Food', 'A nutritionally complete food for adult small dogs.', '25.99', 200, 9, 'i.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:27', 'i.jpg'),
(166, 'Tuna & Salmon Cat Treats', 'Crunchy treats made with real tuna and salmon.', '8.99', 350, 9, 'e.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:37', 'e.jpg'),
(167, 'Plush Squeaky Toy', 'Soft, durable plush toy with a squeaker for fun.', '9.50', 180, 9, 'n.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:48', 'n.jpg'),
(168, 'Luxury Orthopedic Bed', 'Memory foam bed for older dogs or those with joint issues.', '85.00', 60, 9, 'f.jpg', '2025-08-06 07:19:22', '2025-08-08 02:17:57', 'f.jpg'),
(169, 'Dog Carrier Crate', 'Lightweight, portable crate for safe travel.', '49.99', 90, 9, 'a.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:07', 'a.jpg'),
(170, 'Stainless Steel Food Bowl', 'Durable, easy-to-clean bowl for food and water.', '14.00', 250, 9, 'steel_food_bowl.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:17', 'steel_food_bowl.jpg'),
(171, 'Teeth Cleaning Chews', 'Dental treats to help reduce plaque and tartar buildup.', '18.25', 120, 9, 'h.jpg', '2025-08-06 07:19:22', '2025-08-08 02:18:25', 'h.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE IF NOT EXISTS `stores` (
  `store_id` int(11) NOT NULL AUTO_INCREMENT,
  `store_name` varchar(255) NOT NULL,
  `store_type` varchar(100) DEFAULT NULL,
  `description` text,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(100) DEFAULT NULL,
  `zip_code` varchar(20) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `latitude` decimal(10,8) DEFAULT NULL,
  `longitude` decimal(11,8) DEFAULT NULL,
  `established_date` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`store_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`store_id`, `store_name`, `store_type`, `description`, `address`, `city`, `state`, `zip_code`, `phone_number`, `email`, `image_url`, `latitude`, `longitude`, `established_date`, `created_at`) VALUES
(1, 'Paws & Claws Emporium', 'Main Branch', 'Your one-stop shop for all pet needs.', '12 Ikoyi Crescent', 'Lagos', 'Lagos', '101233', '08071234567', 'info@pawsandclaws.com', 'store_lagos.jpg', '6.45660000', '3.39340000', '2020-05-15', '2025-08-06 08:43:24'),
(2, 'The Pet Palace', 'City Center', 'Premium pet supplies and grooming services.', '5 Victoria Island Way', 'Lagos', 'Lagos', '101241', '08079876543', 'contact@petpalace.com', 'store_vi.jpg', '6.42810000', '3.42100000', '2018-11-01', '2025-08-06 08:43:24'),
(3, 'Furry Friends Hub', 'Express Outlet', 'Quick pick-up for food and essential accessories.', '3 FCT Road', 'Abuja', 'FCT', '900101', '08075554321', 'support@furryfriends.ng', 'store_abuja.jpg', '9.07650000', '7.39860000', '2022-03-20', '2025-08-06 08:43:24'),
(4, 'Aqua & Aviary Pet Shop', 'Specialty Store', 'Dedicated to fish, birds, and their habitats.', '8 Riverside Drive', 'Port Harcourt', 'Rivers', '500001', '08071112233', 'sales@aquaaviary.com', 'store_ph.jpg', '4.80930000', '7.02700000', '2021-09-10', '2025-08-06 08:43:24'),
(5, 'Happy Tails Pet Boutique', 'Boutique', 'Exclusive range of pet apparel and artisan treats.', '2 Bello Avenue', 'Kano', 'Kano', '700001', '08074445566', 'boutique@happytails.ng', 'store_kano.jpg', '12.00000000', '8.51670000', '2019-07-01', '2025-08-06 08:43:24'),
(6, 'Pawsome Grooming Studio', 'Grooming Salon', 'Professional grooming and spa services for pets.', '45 Awolowo Road', 'Ibadan', 'Oyo', '200001', '09012345678', 'grooming@pawsome.com', 'store_ibadan.jpg', '7.39800000', '3.90690000', '2023-01-20', '2025-08-06 07:49:30'),
(7, 'The Pet Health Clinic', 'Health & Vet', 'Veterinary services and premium health supplements.', '10 Aba Road', 'Owerri', 'Imo', '460001', '09087654321', 'vet@pethealth.com', 'store_owerri.jpg', '5.48510000', '7.03450000', '2021-08-05', '2025-08-06 07:49:30'),
(8, 'Lagos Aquatic Center', 'Aquatic Center', 'Everything for your aquarium and aquatic pets.', '20 Marina Drive', 'Lagos', 'Lagos', '100223', '08123456789', 'aquatics@lagos.com', 'store_aquatics.jpg', '6.45270000', '3.39340000', '2024-02-14', '2025-08-06 07:49:30'),
(9, 'Katsina Pet Supplies', 'Local Store', 'A community-focused pet shop with all the essentials.', '9 Sabon Gari Road', 'Katsina', 'Katsina', '820001', '08198765432', 'katsina@petsupplies.com', 'store_katsina.jpg', '12.98680000', '7.60830000', '2022-09-01', '2025-08-06 07:49:30'),
(10, 'Enugu Pet Food Mart', 'Food & Feed', 'Wholesale and retail of high-quality pet food.', '5 Independence Avenue', 'Enugu', 'Enugu', '400001', '09056781234', 'enugu@petfoodmart.com', 'store_enugu.jpg', '6.44470000', '7.50280000', '2023-11-10', '2025-08-06 07:49:30');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orderitems`
--
ALTER TABLE `orderitems`
  ADD CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  ADD CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
