var date = new Date();
console.log(date);

var start_date = new Date("June 18, 2015");
console.log(start_date)

var passed_days = date.getDate();
console.log(passed_days)

var passed = start_date - date;
console.log(passed);


var form = passed/(1000*60*60*24*30 *12)
var convert = Math.floor(form);
console.log(convert)