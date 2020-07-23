var a = prompt("Insert First Number");
console.log(a);
var b = prompt("Insert Second Number");
console.log(b);
var c = prompt("Enter 1 For Adiition, Enter 2 For Subtraction, Enter 3 For Multiplication, Enter 4 For Division")
console.log(c);
if (c == 1) {
    document.write('addition is: ' + (parseInt(a) + parseInt(b)));
}
else if (c == 2) {
    document.write('subtraction is: ' + (parseInt(a) - parseInt(b)));
}
else if (c == 3) {
    document.write('multiplication is: ' + (parseInt(a) * parseInt(b)));
}
else if (c == 4) {
    document.write('division is: ' + (parseInt(a) / parseInt(b)));
}
