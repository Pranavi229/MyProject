CREATE DATABASE  IF NOT EXISTS `billpayment` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `billpayment`;
-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: billpayment
-- ------------------------------------------------------
-- Server version	5.7.10-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `age` int(2) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `contact_num` int(10) DEFAULT NULL,
  `pan_no` varchar(15) DEFAULT NULL,
  `aadhar_no` varchar(15) DEFAULT NULL,
  `cust_id` varchar(15) NOT NULL,
  `password` varchar(95) DEFAULT NULL,
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES ('abc','abc',44,'Male',444,'ggg','ggg','abc','$2a$10$a3k/8AStks6FxdC0/qsFK.2v00XBug2VM7CEetXJlwT1RpPk8Z1xO',1),('vvv','vvv',23,'Male',111,'vvv','vvv','vvv','$2a$10$4jW7MDN4c6O5l7Yo2SjhHeNxH7iaN3hGQ9zoVpqLFPxlOVL6s7wTO',2),('nnn','nnn',99,'Male',88888,'nn','nn','nnn','$2a$10$VATGCM9IPhcFdqOgn1TSHOetHrxh1T0RDxImb2q9IPLvy7NE4p/s2',3),('sas','sas',44,'Male',444,'dd','ddd','sas','$2a$10$2s/DXGcMS.X65RqsG2gilO1mGnYoHS943xGxDVj2pHbx4w0r26hAq',4),('Bharad','Bharad',22,'Male',88888,'hhhh','hhhhh','Bharad','$2a$10$jKydhhWwNZvnI/eNhguGJuPfTRdAaib9CduRyNR4IfOjH5DLBJQGG',5);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (116),(116);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pay_bills`
--

DROP TABLE IF EXISTS `pay_bills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pay_bills` (
  `electricity` varchar(15) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL,
  `DTH` varchar(15) DEFAULT NULL,
  `insurance` varchar(15) DEFAULT NULL,
  `tax` varchar(15) DEFAULT NULL,
  `credit_card` varchar(15) DEFAULT NULL,
  `loan_account` varchar(15) DEFAULT NULL,
  `others` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pay_bills`
--

LOCK TABLES `pay_bills` WRITE;
/*!40000 ALTER TABLE `pay_bills` DISABLE KEYS */;
/*!40000 ALTER TABLE `pay_bills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'customer'),(3,'vendor');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` varchar(15) NOT NULL,
  `password` varchar(95) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('admin','$2a$10$.S5.ltkrkde9P0NWUnNjmefxUYGH2Aj0E1Gl4t3eBC8rGUFXH5EOa',1),('abc','$2a$10$a3k/8AStks6FxdC0/qsFK.2v00XBug2VM7CEetXJlwT1RpPk8Z1xO',99),('pranavi','$2a$10$/Cam7nctyqlNM5r3A6ZC0eLgP4k7K8fdSFebU.734r635PnIN1Aj2',100),('vvv','$2a$10$4jW7MDN4c6O5l7Yo2SjhHeNxH7iaN3hGQ9zoVpqLFPxlOVL6s7wTO',102),('nnn','$2a$10$VATGCM9IPhcFdqOgn1TSHOetHrxh1T0RDxImb2q9IPLvy7NE4p/s2',105),('avi','$2a$10$QxheUKDHC6GdeywUdVJyOeI.Shx0IoMN8.1Nri.GjWB3MoVxoX0ji',106),('navi','$2a$10$KTJve4igvV1T7FHOYc7IIOSjzmYnAvoMNb6.4/kthYwA1bQizZAwa',107),('enavi','$2a$10$aMQrBTOAEmmhMnh46b023OIDpcn1SBqrnstrF4QrovKyEHSyobwj2',108),('sas','$2a$10$2s/DXGcMS.X65RqsG2gilO1mGnYoHS943xGxDVj2pHbx4w0r26hAq',110),('test','$2a$10$lnJlQp4rz2WsmDOWkQM9Ie/AsinWxXavrYWeelP.fNaqSspVprEFu',111),('sowmya','$2a$10$7LSPp3kXV67yHCLajr.OF.3kW6NLYH0jQO43opj/wIWAoHFWKbiMG',112),('Bharad','$2a$10$jKydhhWwNZvnI/eNhguGJuPfTRdAaib9CduRyNR4IfOjH5DLBJQGG',113),('rrr','$2a$10$yokbkIJ5QGvZY7utPdqS1utygpp/uTMsAGzSxanAkAlx8gKITnhsS',114),('fgfg','$2a$10$.J6./Sl4/Q45kEBgJaECIeA1V9qvlV3Pk9hnsbHOCuTJlN2rciabq',115);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `ur_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_role_id` varchar(45) DEFAULT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ur_id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,'1','1'),(2,'2','2'),(3,'2','3'),(4,'2','4'),(5,'2','5'),(6,'2','6'),(7,'2','7'),(8,'2','8'),(9,'2','9'),(10,'2','10'),(11,'2','11'),(12,'2','12'),(13,'2','13'),(14,'2','14'),(15,'3','15'),(16,'3','16'),(17,'3','17'),(18,'3','18'),(19,'3','19'),(20,'3','20'),(21,'3','21'),(22,'3','22'),(23,'3','23'),(24,'3','24'),(25,'3','25'),(26,'3','26'),(27,'3','27'),(28,'2','28'),(29,'3','29'),(30,'2','30'),(31,'3','31'),(32,'3','32'),(33,'3','33'),(34,'3','34'),(35,'3','35'),(36,'3','36'),(37,'3','37'),(38,'3','38'),(45,'3','45'),(46,'3','46'),(48,'3','48'),(52,'2','52'),(54,'3','54'),(55,'2','55'),(57,'3','57'),(58,'3','59'),(63,'2','73'),(66,'3','76'),(67,'2','77'),(68,'2','78'),(69,'2','79'),(71,'2','81'),(72,'2','82'),(73,'3','83'),(74,'3','84'),(75,'3','85'),(76,'3','87'),(77,'3','88'),(78,'3','91'),(79,'3','92'),(80,'3','93'),(81,'2','94'),(82,'2','95'),(83,'3','96'),(84,'3','97'),(86,'2','99'),(87,'3','100'),(89,'2','102'),(92,'2','105'),(93,'3','106'),(94,'3','107'),(95,'3','108'),(97,'2','110'),(98,'3','111'),(99,'3','112'),(100,'2','113'),(101,'3','114'),(102,'3','115');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendor`
--

DROP TABLE IF EXISTS `vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vendor` (
  `vendor_name` varchar(50) NOT NULL,
  `company_reg_no` varchar(50) NOT NULL,
  `vendor_type` varchar(50) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `email_address` varchar(15) DEFAULT NULL,
  `contact_no` int(12) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  `certificate_Issued_Date` date DEFAULT NULL,
  `certificate_Validity_Date` date DEFAULT NULL,
  `year_of_Establishment` varchar(45) DEFAULT NULL,
  `password` varchar(500) DEFAULT NULL,
  `vend_id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_gateway` varchar(255) NOT NULL,
  `v_status` bit(1) NOT NULL,
  PRIMARY KEY (`vend_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendor`
--

LOCK TABLES `vendor` WRITE;
/*!40000 ALTER TABLE `vendor` DISABLE KEYS */;
INSERT INTO `vendor` VALUES ('avi','ra111','dth','op','india','delhi','op',999999999,'999999999','1970-01-01','1970-01-01','1970-01-01','$2a$10$QxheUKDHC6GdeywUdVJyOeI.Shx0IoMN8.1Nri.GjWB3MoVxoX0ji',1,'c',''),('navi','ra111','dth','op','india','delhi','op',999999999,'yyy','1970-01-01','1970-01-01','1970-01-01','$2a$10$KTJve4igvV1T7FHOYc7IIOSjzmYnAvoMNb6.4/kthYwA1bQizZAwa',5,'ccc','\0'),('enavi','ra111','dth','op','india','delhi','op',999999999,'yyy','1970-01-01','1970-01-01','1970-01-01','$2a$10$aMQrBTOAEmmhMnh46b023OIDpcn1SBqrnstrF4QrovKyEHSyobwj2',6,'ccc','\0'),('test','test','Telephone','op','UnitedStates','TamilNadu','test',55555,'test','2019-12-19','2019-12-12','2019-12-27','$2a$10$lnJlQp4rz2WsmDOWkQM9Ie/AsinWxXavrYWeelP.fNaqSspVprEFu',8,'test','\0'),('sowmya','Ra111','CreditCard','street','Spain','Beijing','ghbb',78787878,'yyyy','2019-12-20','2019-12-25','2019-12-19','$2a$10$7LSPp3kXV67yHCLajr.OF.3kW6NLYH0jQO43opj/wIWAoHFWKbiMG',9,'Yes',''),('rrr','rrr','DTH','op','China','Virginia','pranavi',555,'ff','2019-12-19','2019-12-17','2019-12-24','$2a$10$yokbkIJ5QGvZY7utPdqS1utygpp/uTMsAGzSxanAkAlx8gKITnhsS',10,'rrr','\0'),('fgfg','fff','Telephone','op','China','Virginia','vv',984036,'gg','2019-12-12','2019-12-18','2019-12-19','$2a$10$.J6./Sl4/Q45kEBgJaECIeA1V9qvlV3Pk9hnsbHOCuTJlN2rciabq',11,'nn','\0');
/*!40000 ALTER TABLE `vendor` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-04 10:18:51
