var vowel = ["a","e","i","o","u"]

var input = prompt("enter a character " + " <br> " + "Now I tell you your character is vowel or not");
for(i=0;i<vowel.length;i++){
    if(input==vowel[i]){
        alert("True")
        break

    }
    else{
        alert("False")
break
    }
}
