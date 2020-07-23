var n=prompt("Enter Number for square");
var ans=1;
var demo1= document.getElementById("demo");
function demo2(n){ 
	for(i=2;i<=n;i++)
      ans = ans * i; 
demo1.innerHTML= ans
console.log(ans)
}
demo2(n)