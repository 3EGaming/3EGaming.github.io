var refreshtimedate = function()
{
var timestuffs = new Date();
window.SECOND = timestuffs.getSeconds()
window.MINUTE = timestuffs.getMinutes()
window.HOUR = timestuffs.getHours()
window.DAY = timestuffs.getDay()
window.DATE = timestuffs.getDate()
window.MONTH = timestuffs.getMonth() + 1 //add 1 because the getMonth() function starts from 0 (January is 0 normaly)
window.YEAR = timestuffs.getFullYear()
setTimeout(refreshtimedate, 1000);
}

refreshtimedate();