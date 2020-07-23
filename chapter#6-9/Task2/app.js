var a = 2
var b = 1;
document.write("a is: " + a);
document.write("<br>b is: " + b);
var result = (--a) - (--b) + (++b) + (b--);
document.write("<br>result is: " + result);
document.write("<br><h1>Explanation</h1>");
document.write("<br>--a is: 1");
document.write("<br>(--a) - (--b) is: 1-0 = 1");
document.write("<br>(--a) - (--b) + (++b)is: 1-0+1 = 2");
document.write("<br>(--a) - (--b) + (++b) - (b--) is: 1-0+1+1 = 3");