var refreshtimedate = function()
{
var timestuffs = new Date();
var window.SECOND = timestuffs.getSeconds()
var window.MINUTE = timestuffs.getMinutes()
var window.HOUR = timestuffs.getHours()
var window.DAY = timestuffs.getDay()
var window.DATE = timestuffs.getDate()
var window.MONTH = timestuffs.getMonth() + 1 //add 1 because the getMonth() function starts from 0 (January is 0 normaly)
var window.YEAR = timestuffs.getFullYear()
setTimeout(refreshtimedate, 1000);
}

refreshtimedate();