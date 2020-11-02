export const orderByFastestTime = (a, b) => {
	let aHour = a.depart_time.split(':')[0];
	let bHour = b.depart_time.split(':')[0];
	let aMin = a.depart_time.split(':')[1];
	let bMin = b.depart_time.split(':')[1];
	if (aHour === bHour) return aMin - bMin;
	return aHour - bHour;
};

export const filterOutAirlineList = (airTickets) => {
	let airlineList = [];
	airTickets.forEach(({ airline }) => {
		if (!airlineList.includes(airline)) airlineList.push(airline);
	});
	return airlineList.sort();
};

export const filterOutSeatClassList = (airTickets) => {
	let seatClassList = [];
	airTickets.forEach(({ seat_class }) => {
		if (!seatClassList.includes(seat_class)) seatClassList.push(seat_class);
	});
	return seatClassList.sort();
};

export const changeDateFormatForFetching = (date) => {
	date = date.split('/');
	const tmp = date.pop();
	date.unshift(tmp);
	return date.join('-');
};

export const changeTimeFormat = (time) => {
	time = time.split(':');
	time.splice(2, 1);
	return time.join(':');
};

export const changeDateFormatToKorean = (date) => {
	date = date.split('-');
	const ko = ['년', '월', '일'];
	return ko.map((korean, idx) => date[idx] + korean).join('');
};

export const calculateFinalTotalAmount = (
	adultPrice,
	adultNum,
	childPrice,
	childNum,
) => {
	return Number(adultPrice) * adultNum + Number(childPrice) * childNum;
};
