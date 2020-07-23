document.write("<h1> Marksheet</h1>")

var total_marks=500;
var obt_marks=230;

var per=parseFloat(obt_marks*100)/total_marks;
document.write("Total Marks: " + total_marks);
document.write("<br> Obtained Marks: " + obt_marks);
document.write("<br> Percentage : " + per);