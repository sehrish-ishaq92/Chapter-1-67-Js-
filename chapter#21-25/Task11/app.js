document.write("<h1>Chap#21-25  Task11</h1>","<br>");
var user_input=prompt("Enter something..! \n But in lowercase");

//slice function ,Uppercase

var char_first=user_input.slice(0,1);
uppercase=char_first.toUpperCase();

//slice function ,Lowercase

var other_char=user_input.slice(1);
lowercase=other_char.toLowerCase();

alert(uppercase + lowercase);