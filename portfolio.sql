-- MariaDB dump 10.17  Distrib 10.4.6-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: portfolio
-- ------------------------------------------------------
-- Server version	10.4.6-MariaDB

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
-- Table structure for table `exa_comments`
--

DROP TABLE IF EXISTS `exa_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exa_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exa_comments`
--

LOCK TABLES `exa_comments` WRITE;
/*!40000 ALTER TABLE `exa_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `exa_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exa_contact_info`
--

DROP TABLE IF EXISTS `exa_contact_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exa_contact_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `city` varchar(45) NOT NULL,
  `phone` int(11) NOT NULL,
  `fax` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exa_contact_info`
--

LOCK TABLES `exa_contact_info` WRITE;
/*!40000 ALTER TABLE `exa_contact_info` DISABLE KEYS */;
INSERT INTO `exa_contact_info` VALUES (1,'Boligstjernen A/S','Park Allé 335','2100 København Ø',67912801,67912811,'info@boligstjernen.dk');
/*!40000 ALTER TABLE `exa_contact_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exa_house_type`
--

DROP TABLE IF EXISTS `exa_house_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exa_house_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exa_house_type`
--

LOCK TABLES `exa_house_type` WRITE;
/*!40000 ALTER TABLE `exa_house_type` DISABLE KEYS */;
INSERT INTO `exa_house_type` VALUES (1,'Villa'),(2,'Rækkehus'),(3,'Lejlighed'),(4,'Landejendom');
/*!40000 ALTER TABLE `exa_house_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exa_houses`
--

DROP TABLE IF EXISTS `exa_houses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exa_houses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `case_number` int(11) NOT NULL,
  `title` varchar(105) NOT NULL,
  `description` text NOT NULL,
  `price` int(11) NOT NULL,
  `brutto` int(11) NOT NULL,
  `netto` int(11) NOT NULL,
  `size_home` int(11) NOT NULL,
  `size_area` int(11) NOT NULL,
  `fk_house_type` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_houses_house_type_idx` (`fk_house_type`),
  CONSTRAINT `fk_houses_house_type` FOREIGN KEY (`fk_house_type`) REFERENCES `exa_house_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exa_houses`
--

LOCK TABLES `exa_houses` WRITE;
/*!40000 ALTER TABLE `exa_houses` DISABLE KEYS */;
INSERT INTO `exa_houses` VALUES (7,287100,'Indflytningsklar luksusejendom nær skov og strand.','I byggeriet er der lagt vægt på enkle materialer. Det sker for at opnå et æstetisk rent udtryk, der danner en moderne kontrast til det naturskønne område. ',550000,32689,26357,285,11700,4),(8,108072,'Nyopført rækkehus ved golfbanen','Beliggenheden er ideel, fordi man bor i byen, men samtidig er meget nær en god golfbane og dejlige, rekreative områder.',2895000,17976,16137,128,182,2),(9,180702,'Nydelig og funktionelt indrettet høj stuelejlighed.','Lejligheden er beliggende i en hyggelig, stille sidegade med mange smukke, gamle ejendomme og masser miljø. Lejligheden ligger i gåafstand til et spændende udvalg af indkøbsmuligheder, caféer, specialbutikker samt restauranter. Der er ligeledes få minutters gang til offentligt transport. Lejligheden indeholder entre/gang, nyt stort HTH køkken med mulighed for spiseplads, stort lyst soveværelse, stort pænt badeværelse samt 2 store og dejlige lyse stuer en suite. Lejligheden er indflytningsklar, meget lys og har nye flotte plankegulve. Ejendommen, der er opført i 1920, er istandsat med respekt for de mange detaljer denne ejendom byder på. Tag og facader er nyistandsat med nye termovinduer med lavenergiglas. Til lejligheden hører kælderrum, fælles vaskekælder samt hyggeligt nyrenoveret gårdmiljø.',1795000,12854,9873,128,128,3),(10,172708,'Arkitektonisk perle tæt på centrum.','Herskabelig og nyistandsat villa med en meget attraktiv beliggenhed i det bedste kvartér. Den charmerende villa, der er opført i 1910 og er beliggende direkte ned til åen.	 \r\nVillaens samlede boligareal udgør 212 m2 fordelt på stueplan og første sal. \r\nDertil kommer en kælder på 108 m2 i meget fin boligkvalitet.',4795000,29229,25120,212,2046,1);
/*!40000 ALTER TABLE `exa_houses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exa_images`
--

DROP TABLE IF EXISTS `exa_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exa_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(100) NOT NULL,
  `primary_img` tinyint(4) NOT NULL DEFAULT 0,
  `fk_house` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_images_houses_idx` (`fk_house`),
  CONSTRAINT `fk_images_houses` FOREIGN KEY (`fk_house`) REFERENCES `exa_houses` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exa_images`
--

LOCK TABLES `exa_images` WRITE;
/*!40000 ALTER TABLE `exa_images` DISABLE KEYS */;
INSERT INTO `exa_images` VALUES (23,'1569502082016_aold.jpg',1,7),(24,'1569502082018_ynki.jpg',0,7),(25,'1569502082019_ageo.jpg',0,7),(26,'1569502082019_rlod.jpg',0,7),(27,'1569502188768_l913.jpg',1,8),(28,'1569502188769_af29.jpg',0,8),(29,'1569502188770_g1w5.jpg',0,8),(30,'1569502188770_qlgg.jpg',0,8),(31,'1569502308745_24gr.jpg',1,9),(32,'1569502308747_jqay.jpg',0,9),(33,'1569502308747_s06p.jpg',0,9),(34,'1569502308747_rfyy.jpg',0,9),(35,'1569502379081_8bl1.jpg',1,10),(36,'1569502379082_8cwv.jpg',0,10),(37,'1569502379082_xvry.jpg',0,10),(38,'1569502379083_4whu.jpg',0,10);
/*!40000 ALTER TABLE `exa_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exa_news`
--

DROP TABLE IF EXISTS `exa_news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exa_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `headline` varchar(72) NOT NULL,
  `text` text NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exa_news`
--

LOCK TABLES `exa_news` WRITE;
/*!40000 ALTER TABLE `exa_news` DISABLE KEYS */;
INSERT INTO `exa_news` VALUES (1,'EJENDOMSHANDEL MERE TRYG OG SIKKER','Ejendomsmæglerne får øget oplysningspligt. Og et disciplinærnævn skal sikre skrappere sanktioner, hvis en mægler overtræder reglerne.  Økonomi- og erhvervsminister Bendt Bendtsen (K) fik torsdag vedtaget sin skarpere linje over for ejendomsmæglere i Folketinget.  - Jeg er meget tilfreds med, at der var bred opbakning i Folketinget til mit lovforslag til stramninger af reglerne for omsætning af fast ejendom. Det bliver nu endnu mere trygt og sikkert for forbrugerne at handle bolig i Danmark, siger økonomi- og erhvervsminister Bendt Bendtsen.','2006-04-26'),(2,'VI SKAL INFORMERE BEDRE','Dansk Ejendomsmæglerforening vil se nærmere på, om danske ejendomsmæglere kan blive bedre til at informere køberne ved bolighandler.   Når vi mødes efter sommerferien vil vi kigge på, om vores forbrugeretiske regler bør udbygges med nogle punkter om det her, siger næstformand Arne Madsen fra Dansk Ejendomsmæglerforening.   Generelt vil vi indskærpe, at man skal informere ordentligt. Køberne skal altid være velinformerede om deres situation, tilføjer Arne Madsen.','2006-04-30'),(3,'LÆNGERE MELLEM BUDRUNDER PÅ BOLIGMARKEDET','Boligkøberne står ikke længere på nakken af hinanden, og det har siden sidste sommer betydet en halvering af boliger, der bliver sat til salg i licitation.  Boligejernes Videncenter Bolius har taget temperaturen på licitationsalget hos de tre største ejendomsmæglerkæder, Home, EDC og Danbolig. Alle tre melder om en halvering fra 10-12 procent sidste sommer til under 4-5 procent i dag.','2006-05-05');
/*!40000 ALTER TABLE `exa_news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exa_newsletter`
--

DROP TABLE IF EXISTS `exa_newsletter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exa_newsletter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exa_newsletter`
--

LOCK TABLES `exa_newsletter` WRITE;
/*!40000 ALTER TABLE `exa_newsletter` DISABLE KEYS */;
/*!40000 ALTER TABLE `exa_newsletter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exa_open_times`
--

DROP TABLE IF EXISTS `exa_open_times`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exa_open_times` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `days` varchar(20) NOT NULL,
  `open` time NOT NULL,
  `close` time NOT NULL,
  `not_open` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exa_open_times`
--

LOCK TABLES `exa_open_times` WRITE;
/*!40000 ALTER TABLE `exa_open_times` DISABLE KEYS */;
INSERT INTO `exa_open_times` VALUES (1,'Mandag','00:00:00','00:00:00',1),(2,'Tirsdag','09:30:00','17:30:00',0),(3,'Onsdag','09:30:00','17:30:00',0),(4,'Torsdag','09:30:00','17:30:00',0),(5,'Fredag','09:30:00','17:30:00',0),(6,'Lørdag','09:30:00','13:00:00',0),(7,'Søndag','10:00:00','15:00:00',0);
/*!40000 ALTER TABLE `exa_open_times` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exa_roles`
--

DROP TABLE IF EXISTS `exa_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exa_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `level` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exa_roles`
--

LOCK TABLES `exa_roles` WRITE;
/*!40000 ALTER TABLE `exa_roles` DISABLE KEYS */;
INSERT INTO `exa_roles` VALUES (1,'SuperAdmin',100),(2,'admin',99);
/*!40000 ALTER TABLE `exa_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exa_users`
--

DROP TABLE IF EXISTS `exa_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exa_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(18) NOT NULL,
  `password` varchar(72) NOT NULL,
  `fk_role` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_roles_idx` (`fk_role`),
  CONSTRAINT `fk_users_roles` FOREIGN KEY (`fk_role`) REFERENCES `exa_roles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exa_users`
--

LOCK TABLES `exa_users` WRITE;
/*!40000 ALTER TABLE `exa_users` DISABLE KEYS */;
INSERT INTO `exa_users` VALUES (1,'admin','$2a$10$RePqOuxNyvVZIkpm/Ddm/.wQoWgREBsOF2BmMlZG0dIDs6uAmqC/m',1);
/*!40000 ALTER TABLE `exa_users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-01 15:34:44
