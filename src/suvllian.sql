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
-- 转存表中的数据 `article`
--

INSERT INTO `article` (`aId`, `aTopic`, `aImage`, `aIntro`, `aContent`, `aLike`, `aShow`, `aDate`, `aClass`, `aVisit`) VALUES
(1, '我的2016年', 'http://www.suvllian.com/static/images/article/a1/hashiqi1.jpg', '<p>年初的时候，谷歌公司的围棋程序 AlphaGo 战胜了世界冠军李世石。</p><p>2016，无人驾驶、虚拟现实、可穿戴设备、人工智能成的元年。也许未来的移动终端就是一个“统一体”，也许会像《超体》中露西在结尾说的那句：我，将无处不在。</p>', '<div class="intro-img">	<img src="http://www.suvllian.com/static/images/article/a1/hashiqi1.jpg" alt="">\r\n</div><div class="intro-p"><p>2016年，我感觉什么都没有发生，但是他就是结束了。</p>\r\n<p>让我先想想这一年发生了什么大事。</p><p>年初的时候，谷歌公司的围棋程序 AlphaGo 战胜了世界冠军李世石。</p><p>2016，无人驾驶、虚拟现实、可穿戴设备、人工智能成的元年。也许未来的移动终端就是一个“统一体”，也许会像《超体》中露西在结尾说的那句：我，将无处不在。</p><div class="intro-img"><img src="http://suvllian.com/static/images/article/a1/chaoti.png"></div><p>2016，奥运会在巴西举办，女排再次夺得冠军。</p><p>2016，陪跑奥斯卡22年的小李子终于拿到了小金人。</p><p>2016，还发生过许多事。</p>\r\n<div class="intro-img"><img src="http://suvllian.com/static/images/article/a1/china.png"></div><p>2016还是发生了不少事...</p><p class="biger">回归正题，谈谈我的2016年。</p><p>我印象中这一年对我影响最大的就是选择了前端作为发展方向吧，放弃了Windows方向。</p><p>有很多人和我说，学底层的东西比较好。学的人少难度高，前端只是做个界面而已，没什么意思。</p><p>我觉得这就是以偏概全了。</p><p>只选择一个方向，我觉得那就有趣多了，下半年也开始认真学习了。下面就是的github2016记录，虽然没有写出什么有价值的东西，但也算是一个对成长的过程记录。</p><div class="intro-img"><img src="http://suvllian.com/static/images/article/a1/github2016.png"></div><p class="biger">2016年，我也读了不少书。</p>\r\n<p>课外书读了三十来本，技术书籍也读了20来本。</p><p>个人偏爱纸质书籍，一向认为开卷有益。所以看的书也是比较杂。闲来无事看看书打发时光还是挺不错的，且不说能不能学到什么。</p>\r\n<div class="intro-img"><img src="http://suvllian.com/static/images/article/a1/book2016.png"></div><p>懒了一年的我也终于开始搞事了。简单的搭了个博客，UI界面是各种“抄”，看到好看的设计就往上凑，我觉得现在的导航栏还是挺难看的。</p><p>简单的学习了Vue.js和React.js框架。觉得Vue更易上手，就用Vue做了一些小Demo，前后端分离的感觉真是太好了。</p><p class="biger">其他？</p><p>这一年，也经历了不少有趣的事，认识了许多有趣的朋友。</p><p>(觉得身边的人都是大神)</p><p class="biger">2017年</p><p>2017年，好好学习，好好生活，好好睡觉。坚持搞事情。</p><p>"道阻且长，行则将至"。</p><p class="end">不好意思，一不小心点开了前置摄像头</p><div class="intro-img"><img src="http://suvllian.com/static/images/article/a1/hashiqi2.jpg"></div><p>好吧 我承认我没它↑帅</p></div>', 0, 1, 14828544, 1, 60),
(2, 'Vue.js总结(一)', 'http://www.suvllian.com/static/images/article/a2/logo.png', '<p>从去年接触Vue.js到现在，已经快半年了，用Vue做过不少小Demo，我现在的博客也是用Vue做的。</p><p>相比于以前一招jQuery打遍天下来说<strong>(如下图 哈哈哈)</strong>，真的是觉得用框架方便多了。</p>', '<div class="intro-img"><img src="http://www.suvllian.com/static/images/article/a2/logo.png" alt=""></div><div class="intro-p"><p>从去年接触Vue.js到现在，已经快半年了，用Vue做过不少小Demo，我现在的博客也是用Vue做的。</p><p>相比于以前一招jQuery打遍天下来说<strong>(如下图 哈哈哈)</strong>，真的是觉得用框架方便多了。</p><p>框架还包括各种插件：Vue-Resource、Vue-Router、Vuex，满足你的各种需求。</p><div class="intro-img"><img src="http://www.suvllian.com/static/images/article/a2/1.jpg" class="small-img" alt=""></div><p>Vue中的<strong>基础知识</strong>主要包括：列表渲染、模板语法、指令、Class绑定、条件渲染、计算属性和表单控件绑定等等。</p><p><strong>进阶的知识</strong>主要有：响应式原理、过渡效果、路由、组件间传参等等。</p><p>下面主要总结一下我在写Demo过程中遇到的一些坑。</p><p class="biger">1、v-html doesn''t work with scoped CSS</p><p>v-html是Vue中的模板语法，能够将变量中的html标签解析。</p><p>在搭建博客时，我想通过异步请求将文本从后台传递过来再使用v-html进行插值，但是写的CSS却不管用了。</p><p><strong>原因：写CSS时如果声明了scoped，则CSS对v-html插值无效。</strong></p><p><strong>解决办法：去掉写CSS时声明的scoped属性即可。</strong></p><p class="biger">2、路由动态传参</p><p>Vue中的路由是通过Vue-Router来实现的，在切换路由时，Vue只会切换发生改变的Dom节点，这样就大大提高了性能。</p><p>但是在写的过程中就遇到了问题，以前传递动态参数可以进行字符串拼接然后传递给GET即可，但是使用路由就不知道怎么传递动态参数了。</p><p><strong>解决办法：</strong> </p><div class="intro-img"><img src="http://www.suvllian.com/static/images/article/a2/2.png" alt=""></div><p>Vue详细知识点就放在下次总结。</p>', 0, 1, 14863829, 2, 8);

-- --------------------------------------------------------

--
-- 表的结构 `articleclass`
--

CREATE TABLE IF NOT EXISTS `articleclass` (
  `aId` int(11) NOT NULL AUTO_INCREMENT,
  `aClassName` varchar(32) NOT NULL,
  PRIMARY KEY (`aId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- 转存表中的数据 `articleclass`
--

INSERT INTO `articleclass` (`aId`, `aClassName`) VALUES
(1, '生活'),
(2, 'Vue');

-- --------------------------------------------------------

--
-- 表的结构 `bookclass`
--

CREATE TABLE IF NOT EXISTS `bookclass` (
  `cId` int(11) NOT NULL AUTO_INCREMENT,
  `cClass` varchar(32) NOT NULL,
  PRIMARY KEY (`cId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- 转存表中的数据 `bookclass`
--

INSERT INTO `bookclass` (`cId`, `cClass`) VALUES
(2, '小说'),
(3, '随笔'),
(4, '传记'),
(5, '纪实'),
(6, '哲学'),
(7, '经济'),
(9, '社科'),
(10, '天文'),
(11, '历史');

-- --------------------------------------------------------

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
-- 转存表中的数据 `bookinfor`
--

INSERT INTO `bookinfor` (`iId`, `iBgLink`, `iName`, `iImage`, `iContent`, `iLike`, `iShow`, `iDate`, `iClass`) VALUES
(1, 'http://img.alicdn.com/tfs/TB1cVgDNpXXXXb2XFXXXXXXXXXX-900-500.jpg', '一个人的朝圣', 'http://www.suvllian.com/static/images/books/yigeren.jpg', '生活离平淡无奇有多遥远，又可以在多短的一瞬间不复从前。', 1, 1, 1482421162, 2),
(2, 'https://gw.alicdn.com/tps/TB1pOFzOVXXXXbhaXXXXXXXXXXX-900-500.jpg', '追风筝的人', 'http://www.suvllian.com/static/images/books/zhuifengzheng.jpg', '为你，千千万万遍。', 1, 1, 1482422195, 2),
(3, 'https://img.alicdn.com/tfs/TB15ZeJOFXXXXcYXVXXXXXXXXXX-900-500.jpg', '傲慢与偏见', 'http://www.suvllian.com/static/images/books/aoman.jpg', '要是爱你爱的少些，话就可以说的多些了。', 0, 1, 1482422362, 2),
(4, 'http://img.alicdn.com/tfs/TB1KBJsOpXXXXaeXFXXXXXXXXXX-900-500.jpg', '且听风吟', 'http://www.suvllian.com/static/images/books/qieting.jpg', '心情抑郁的人只能做抑郁的梦，要是更加抑郁。', 0, 1, 1482422429, 2),
(5, 'http://img.alicdn.com/tfs/TB1_ZnHNXXXXXXBXpXXXXXXXXXX-900-500.jpg', '菊与刀', 'http://www.suvllian.com/static/images/books/juyudao.jpg', '日本人生性及其好斗而又非常温和；黩武而又爱美。', 0, 1, 1482422663, 4),
(6, 'https://img.alicdn.com/tps/TB1sXu_LFXXXXcgXXXXXXXXXXXX-900-500.jpg', '人类的群星闪耀时', 'http://www.suvllian.com/static/images/books/renlei.jpg', '一个人最大的幸福莫过于在人生的中途、富有创造力的壮年，发现自己此生的使命。', 0, 1, 1482422776, 4),
(7, 'http://www.suvllian.com/static/images/books/bookBg/1.jpg', '送你一颗子弹', 'http://www.suvllian.com/static/images/books/songni.jpg', '没有无聊的人生，只有无聊的人生态度。', 0, 1, 1482502244, 3),
(8, 'http://www.suvllian.com/static/images/books/bookBg/2.jpg', '天谴行动', 'http://www.suvllian.com/static/images/books/tianqian.jpg', '以杀止杀!', 0, 1, 1482502396, 5),
(9, 'http://www.suvllian.com/static/images/books/bookBg/3.jpg', '蒋介石传', 'http://www.suvllian.com/static/images/books/jiangjieshi.jpg', '宜将剩勇追穷寇，不可沽名学霸王。', 0, 1, 1482502440, 4),
(10, 'http://www.suvllian.com/static/images/books/bookBg/4.jpg', '三体', 'http://www.suvllian.com/static/images/books/santi.jpg', '给时光以生命，给岁月以文明。', 0, 1, 1482502507, 2),
(12, 'http://img.alicdn.com/tps/TB1eBPqKpXXXXcwXXXXXXXXXXXX-900-500.jpg', '平凡的世界', 'http://www.suvllian.com/static/images/books/pingfan.jpg', '其实我们每个人的生活都是一个世界，即使最平凡的人也要为他生活的那个世界而奋斗。', 0, 1, 1485438218, 2);

-- --------------------------------------------------------

--
-- 表的结构 `travelcity`
--

CREATE TABLE IF NOT EXISTS `travelcity` (
  `cId` int(11) NOT NULL AUTO_INCREMENT,
  `cName` varchar(32) NOT NULL,
  PRIMARY KEY (`cId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=14 ;

--
-- 转存表中的数据 `travelcity`
--

INSERT INTO `travelcity` (`cId`, `cName`) VALUES
(1, '成都'),
(2, '青岛'),
(3, '北京'),
(4, '天津'),
(5, '重庆'),
(6, '西安'),
(7, '延安'),
(8, '武汉'),
(9, '丽江'),
(10, '大理'),
(12, '平遥'),
(13, '洛阳');

-- --------------------------------------------------------

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
-- 转存表中的数据 `travelimage`
--

INSERT INTO `travelimage` (`iId`, `iTopic`, `iImage`, `iContent`, `iLike`, `iShow`, `iDate`, `iCity`) VALUES
(5, '二王庙', 'chengdu1', '二王庙是在都江堰里，“二王”指的是李冰和他的儿子。', 15, 1, 0, 1),
(6, '锦里', 'chengdu2', '暂无简介', 5, 1, 0, 1),
(7, '都江堰', 'chengdu3', '四面被山环绕着，江水蜿蜒曲折，宛如人间仙境。', 3, 1, 0, 1),
(8, '栈桥', 'qingdao2', '在栈桥上拍出的观象山。', 1, 1, 0, 2),
(9, '天安门', 'beijing1', '初次来到帝都，长安街的路真是宽！', 1, 1, 0, 3),
(11, '观象山', 'qingdao1', '红瓦绿树，碧海蓝天。青岛的海景真美！', 1, 1, 0, 2),
(12, '圆明园的夕阳', 'beijing2', '夕阳很美。', 2, 1, 0, 3),
(13, '宝塔山', 'yanan1', '宝塔山上有宝塔。', 1, 1, 1482265417, 7),
(18, '泸沽湖', 'luguhu2', '泸沽湖的清晨 随手一拍就是壁纸', 1, 1, 1483966212, 9),
(19, '洱海', 'erhai2', '也许爱情就在洱海边', 1, 1, 1483966352, 10),
(22, '泸沽湖', 'luguhu1', '随风荡漾', 1, 1, 1483966492, 9);

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
