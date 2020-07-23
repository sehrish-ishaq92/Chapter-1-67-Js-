var a= prompt("Enter First Number");
console.log(a);
var b= prompt("Enter Second Number");
console.log(b);

var c=prompt('Enter 1 for add,2 for Sub,3 for Multiplication,4 for Divsion');
console.log(c);
if (c==1){
	document.write('Addition is:' + (parseInt(a) + parseInt(b) ));
}
else if(c==2){
	document.write('Subtraction is:' + (parseInt(a) - parseInt(b)));
}
else if(c==3){
	document.write('Multiplication is:' + (parseInt(a) * parseInt(b)));
}
else if(c==4){
	document.write('Divsion is:' + (parseInt(a)/parseInt(b)));
}