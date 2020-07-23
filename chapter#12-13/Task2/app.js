var input1 = prompt("Enter a value 1, so i tell you larger num","like 2")
var input2 = prompt("Enter a value 1,so i tell you larger num","like 2")

if(input1>input2){
    alert(input1 + " is larger than " + input2)
}
else if(input2>input1){
    alert(input2 + " is larger than " + input1)
}
else if(input1==input2){
    alert(input1 + " is equal to " + input2)

}
else{
    alert("value not exist")
}