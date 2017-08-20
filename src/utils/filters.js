// 格式化时间
export default
{
	// 格式化文章发布时间
	formatTime: time => {
		// 数据库中存储时删除了后面五位0
		let tempDate = new Date(parseInt(time) * 100000),
	    year = tempDate.getFullYear(),
	    month = tempDate.getMonth() + 1,
	    monthInChinese = "",
	    day = tempDate.getDate(); 
		
		switch (month) {
			case 1 :
				month = 'January';
				monthInChinese = "一月";
				break;
			case 2 :
				month = 'February';
				monthInChinese = "二月";
				break;
			case 3 :
				month = 'March';
				monthInChinese = "三月";
				break;
			case 4 :
				month = 'April';
				monthInChinese = "四月";
				break;
			case 5 :
				month = 'May';
				monthInChinese = "五月";
				break;
			case 6 :
				month = 'June';
				monthInChinese = "六月";
				break;
			case 7 :
				month = 'July';
				monthInChinese = "七月";
				break;
			case 8 :
				month = 'August';
				monthInChinese = "八月";
				break;
			case 9 :
				month = 'September';
				monthInChinese = "九月";
				break;
			case 10 :
				month = 'October';
				monthInChinese = "十月";
				break;
			case 11 :
				month = 'November';
				monthInChinese = "十一月";
				break;
			case 12 :
				month = 'December';
				monthInChinese = "十二月";
				break;
		}
		
		return {
      year,
      month,
      monthInChinese,
      day,
      time: `${year}/${month}/${day}`.trim() 
		}
	},

	// 格式化书籍发布时间
	bookTime: time => {
		let tempDate = new Date(parseInt(time) * 1000);

		let returnTime = tempDate.getFullYear() + "/" + 
						(tempDate.getMonth() + 1) + "/" +
						 tempDate.getDate();
		return returnTime;
	}
}