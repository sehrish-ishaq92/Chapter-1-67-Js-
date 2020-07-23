var height=prompt("Enter height");
var width=prompt("Enter width");
var ans;
function demo1(height, width){
ans= height * width;
document.write(ans);
}
document.write("Arguement as variable<br>");
demo1(height, width);
document.write("<br>Arguement as Value<br>");
demo1(6, 12);