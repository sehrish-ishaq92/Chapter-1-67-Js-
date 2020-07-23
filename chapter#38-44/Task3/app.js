var a = +prompt("Enter a value of a","6")
var b = +prompt("Enter a value of b","6")
var c = +prompt("Enter a value of c","6")

var s = +(a + b + c)/2;
var area = +s(s-a)(s-b)(s-c)

function abc(){

    //  s = +(a + b + c)/2;
   document.write("S value is " + s)
} 


function area(){

    // var area = +s(s-a)(s-b)(s-c)
    document.write("area of a triangle value is " + area)
     
}

abc()
area()

 