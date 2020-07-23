var sub1 = prompt("Enter a 1 subject name");
var sub2 = prompt("Enter a 2 subject name");
var sub3 = prompt("Enter a 3 subject name");

var tlt_marks = 100;



var marks1= +prompt("Enter your marks")

var marks2= +prompt("Enter your marks")

var marks3= +prompt("Enter your marks")

document.write("<br> " + sub1 + " ")
document.write( tlt_marks + " " )
document.write( marks1 + " ")


document.write("<br> " + sub2 + " ")
document.write( tlt_marks + " ")
document.write( marks2 + " ")

document.write("<br> " + sub3 + " ")
document.write( tlt_marks + " ")
document.write( marks3 + " ")


document.write("<br> Total marks" + tlt_marks*3)
// document.write("<br> Obtained Marks " + marks1+marks2+marks3)

var per1 = marks1*100/tlt_marks;
var per2= marks2*100/tlt_marks;
var per3 = marks3*100/tlt_marks;
var sum = +(marks1 + marks2+marks3)
document.write("Obtained Marks " + sum)

document.write("<br> " + sub1 + " Percentage " + " " + per1+ "% <br>" + sub2 + " Percentage " + per2 + "% <br>" + sub3 + " Percentage "  + per3+  "%")
var allPer = sum*100/300;
document.write("<br>All subject percentage " + allPer + "%" ) 