// 格式化时间
export const formatTime = time => {
	const tempDate = new Date(parseInt(time)),
    year = tempDate.getFullYear(),
    month = `${tempDate.getMonth()+1}`.padStart(2, '0'),
    day = `${tempDate.getDate()}`.padStart(2, '0'); 
	let monthInChinese = "",
	  monthInEnglish = "";

	switch (month) {
		case 1 :
			monthInEnglish = 'January';
			monthInChinese = "一月";
			break;
		case 2 :
			monthInEnglish = 'February';
			monthInChinese = "二月";
			break;
		case 3 :
			monthInEnglish = 'March';
			monthInChinese = "三月";
			break;
		case 4 :
			monthInEnglish = 'April';
			monthInChinese = "四月";
			break;
		case 5 :
			monthInEnglish = 'May';
			monthInChinese = "五月";
			break;
		case 6 :
			monthInEnglish = 'June';
			monthInChinese = "六月";
			break;
		case 7 :
			monthInEnglish = 'July';
			monthInChinese = "七月";
			break;
		case 8 :
			monthInEnglish = 'August';
			monthInChinese = "八月";
			break;
		case 9 :
			monthInEnglish = 'September';
			monthInChinese = "九月";
			break;
		case 10 :
			monthInEnglish = 'October';
			monthInChinese = "十月";
			break;
		case 11 :
			monthInEnglish = 'November';
			monthInChinese = "十一月";
			break;
		case 12 :
			monthInEnglish = 'December';
			monthInChinese = "十二月";
			break;
	}
	
	return {
    year,
    month,
    monthInEnglish,
    monthInChinese,
    day,
    time: `${year}-${month}-${day}`.trim() 
	}
}