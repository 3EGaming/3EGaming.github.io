var timestuffs = new Date();
var SECOND = timestuffs.getSeconds()
var MINUTE = timestuffs.getMinutes()
var HOUR = timestuffs.getHours()
var DAY = timestuffs.getDay()
var DATE = timestuffs.getDate()
var MONTH = timestuffs.getMonth() + 1 //add 1 because the getMonth() function starts from 0 (January is 0 normaly)
var YEAR = timestuffs.getFullYear()