-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 02 月 06 日 13:50
-- 服务器版本: 5.5.20
-- PHP 版本: 5.3.10

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `suvllian`
--

-- --------------------------------------------------------

--
-- 表的结构 `article`
--

CREATE TABLE IF NOT EXISTS `article` (
  `aId` int(11) NOT NULL AUTO_INCREMENT,
  `aTopic` varchar(32) DEFAULT NULL,
  `aImage` varchar(128) DEFAULT NULL,
  `aIntro` text NOT NULL,
  `aContent` text NOT NULL,
  `aLike` int(11) NOT NULL DEFAULT '0',
  `aShow` tinyint(4) NOT NULL DEFAULT '1',
  `aDate` int(128) NOT NULL,
  `aClass` int(11) NOT NULL,
  `aVisit` int(11) NOT NULL,
  PRIMARY KEY (`aId`),
  KEY `aClass` (`aClass`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;


--
-- 表的结构 `articleclass`
--

CREATE TABLE IF NOT EXISTS `articleclass` (
  `aId` int(11) NOT NULL AUTO_INCREMENT,
  `aClassName` varchar(32) NOT NULL,
  PRIMARY KEY (`aId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;


--
-- 表的结构 `bookclass`
--

CREATE TABLE IF NOT EXISTS `bookclass` (
  `cId` int(11) NOT NULL AUTO_INCREMENT,
  `cClass` varchar(32) NOT NULL,
  PRIMARY KEY (`cId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 表的结构 `bookinfor`
--

CREATE TABLE IF NOT EXISTS `bookinfor` (
  `iId` int(11) NOT NULL AUTO_INCREMENT,
  `iBgLink` varchar(128) NOT NULL,
  `iName` varchar(128) DEFAULT NULL,
  `iImage` varchar(128) DEFAULT NULL,
  `iContent` text NOT NULL,
  `iLike` int(11) NOT NULL DEFAULT '0',
  `iShow` tinyint(4) NOT NULL DEFAULT '1',
  `iDate` int(11) NOT NULL,
  `iClass` int(11) NOT NULL,
  PRIMARY KEY (`iId`),
  KEY `iClass` (`iClass`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 表的结构 `travelcity`
--

CREATE TABLE IF NOT EXISTS `travelcity` (
  `cId` int(11) NOT NULL AUTO_INCREMENT,
  `cName` varchar(32) NOT NULL,
  PRIMARY KEY (`cId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- 表的结构 `travelimage`
--

CREATE TABLE IF NOT EXISTS `travelimage` (
  `iId` int(11) NOT NULL AUTO_INCREMENT,
  `iTopic` varchar(32) DEFAULT NULL,
  `iImage` varchar(32) DEFAULT NULL,
  `iContent` text NOT NULL,
  `iLike` int(11) NOT NULL DEFAULT '0',
  `iShow` tinyint(4) NOT NULL DEFAULT '1',
  `iDate` int(11) NOT NULL,
  `iCity` int(11) NOT NULL,
  PRIMARY KEY (`iId`),
  KEY `iCity` (`iCity`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=23 ;

--
-- 限制导出的表
--

--
-- 限制表 `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`aClass`) REFERENCES `articleclass` (`aId`);

--
-- 限制表 `travelimage`
--
ALTER TABLE `travelimage`
  ADD CONSTRAINT `travelimage_ibfk_1` FOREIGN KEY (`iCity`) REFERENCES `travelcity` (`cId`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
