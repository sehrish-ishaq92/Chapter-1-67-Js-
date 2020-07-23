document.write("<h1>Shipping Cart</h1>");
var Price_item1=750;
var Quantity1=4;
var Price_item2=950;
var Quantity2=8;
var charges=100;

var total_cost=(Price_item1 + Price_item2 +  Quantity1 +  Quantity2 + charges );

document.write("Price of item 1 is: " + Price_item1 + "<br> b. Price of item 2 is: " + Price_item2 + "<br> c. Ordered quantity of item 1 is: " + Quantity1 + "<br> d. Ordered Quantity of item 2 is : " + Quantity2 + "<br> e. Shipping charges is: " + charges);
document.write("<br> <br>Total Cost of Your device is " + total_cost);

