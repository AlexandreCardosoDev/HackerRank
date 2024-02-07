function dayOfProgrammer(year) {
	if (year <= 1917) {
		if (year % 4 === 0) 
			return `12.09.${year}`
		else 
			return `13.09.${year}`
	}
	else if (year === 1918) {
		return `26.09.${year}`
	}
	else if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
		return `12.09.${year}`
	}
	else 
		return `13.09.${year}`
}


console.log(dayOfProgrammer(1918))



/*
def dayOfProgrammer(year):
    if 1700 <= year <= 1917:
        if year % 4 == 0:
            return f"12.09.{str(year)}"
        else:
            return f"13.09.{str(year)}"
    elif year == 1918:
        return f"26.09.{str(year)}"
    else:
        if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
            return f"12.09.{str(year)}"
        else:
            return f"13.09.{str(year)}"
*/