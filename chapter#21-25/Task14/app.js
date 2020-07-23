document.write("<h1>Chap#21-25  Task14</h1>","<br>");

var arr=["cake","apple pie","chips","patties","cookies"];
var input=prompt("Welcome to Disco Bakery..! What do you want to order sir/mam" );
var user_choice=input;
user_choice=user_choice.toUpperCase();
var user_choice2=user_choice.toLowerCase();

var found=false;
for(var i=0;i<arr.length;i++){

		if (arr[i]===user_choice || arr[i]==user_choice2){
			console.log(arr[i] +" is available at index " +i +" in our bakery");
			found=true;
			break;
		}
	}
	if(found==false){
			console.log("Sorry " +(arr[i]) +" is not available in our Bakery");
		}