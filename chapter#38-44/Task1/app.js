document.write("<h1>Power Function</h1>")
var input1 = +prompt("Enter a num 1")
var input2 = +prompt("Enter a num 2")

function value(){
    newValue = Math.pow(input1,input2)
    document.write("value of a : " + input1)
    document.write("<br>value of b : " + input2)
    document.write("<br> Power function : " + newValue)
    document.write("<br>raised value:"  + input1+ "^" +input2)

}
value()
