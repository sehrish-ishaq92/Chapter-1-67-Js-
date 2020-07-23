document.write("<h1>Chap#31-34  Task 13</h1>","<br>");
//Calculate Age

var date = new Date();
var current_time = date.getTime();
console.log(current_time);

var dob = new Date("Nov 27,1997");
var my_dob = dob.getTime();
console.log(my_dob);

var diff = current_time - my_dob ;
console.log(diff);

var cal_age = (diff/(1000 * 60 * 60 * 24 *30 *12));
console.log(cal_age)

var conver_age = Math.floor(cal_age);
document.write("My age is " + conver_age)

//Calculate Year

var dob_year = dob.getFullYear();
document.write("<br>My Birth year is " , dob_year);

//var diff_year = current_year - dob_year ;

//ar cal_year = diff_year/(1000*60*60*24*30*12);
//console.log(cal_year)

//var convert_year = Math.floor(cal_year);

//document.write("My Birth Year is " + convert_year)

