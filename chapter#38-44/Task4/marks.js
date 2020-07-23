function marksheet(){
var sub1=prompt("Enter marks 1");
var sub2=prompt("Enter marks 2");
var sub3=prompt("Enter marks 3");
var per;
var ave;
var totmarks=300;
function per1(sub1,sub2,sub3){
per= ((parseInt(sub1)+parseInt(sub2)+parseIne(sub3))*100)/totmarks;
return per;
}
document.write(per1(sub1,sub2,sub3));
return per1(per) 
}
document.write(marksheet());