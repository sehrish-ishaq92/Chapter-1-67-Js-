document.write("<h1><i>MARKS</i></h1>");

var a = prompt("English Marks");
console.log(a);

var b = prompt("Urdu Marks");
console.log(b);
 
var c = prompt("Math Marks");
console.log(c);

var tm=(300);
var om =parseInt(a)+parseInt(b)+parseInt(c);
var per=parseInt(om)*100/parseInt(tm);

document.write('<br>Total Marks: '+ tm);
document.write('<br>Obtain Marks:' +om);
document.write('<br>Percentage \n: '+per);

//Grade A+
if(per>=80){
document.write('<br>Grade: A+');
document.write('<br>Remarks: Brilliant');
}

//Grade A
else if(per>=70){
document.write('<br>Grade: A');
document.write('<br>Remarks: Good');
}

//Grade B
else if(per>=60){
document.write('<br>Grade: B');
document.write('<br>Remarks: Average');
}

//Grade C
else if(per>=50){
document.write('<br>Grade: C');
document.write('<br>Remarks: Satisfactory');
}

///Grade D
else if(per>=40){
document.write('<br>Grade: D');
document.write('<br>Remarks: Need Improvement');
}

//Fail
else{
document.write('<br>Grade: Fail');
document.write('<br>Remarks: Sorry');
}