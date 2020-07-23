var passWord="sehrish123"

var input = prompt("enter your password");

if(input==""){
    alert("Please enter your password")
}
else if(input==passWord){
    alert("Correct! The password you entered matches the original password")
}
else{
    alert("Incorrect password")
}