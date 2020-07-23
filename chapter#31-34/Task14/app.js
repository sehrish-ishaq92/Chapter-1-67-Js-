document.write("<h1>Chap#35-38  Task14</h1>","<br>");
document.write("<h2>K-Electric Bill</h2>");
var date = new Date();
console.log(date);

var name = "Sehrish";
var month =date.getMonth();
var convert = month.toString();
var slice = convert.slice(4,6)
console.log(convert)
console.log(slice)

var units = 250;
var charges = 12;
var late_payment = 300;

var net_amount = units * charges;
var gross_amout = net_amount + late_payment ;

document.write("Customer Name: " , name);
document.write("<br> Currents month: " ,month);
document.write("<br> Number Of units: " , units);
document.write("<br> Charges per Unit: " , charges);
document.write("<br> Late Payment surcharge: " , late_payment);
document.write("<br> Net Amount Payable (within Due Date): ", net_amount);
document.write("<br> Gross Amount Payable (after Due Date): " , gross_amout);