document.write("<h1>Chap#35-38  Task6</h1>","<br>");
 var date = new Date();
 console.log(date);

 var get_hour = date.getHours();
 console.log(get_hour)


 if(get_hour<=date){
 	 alert("It's AM");
	 document.write("Before noon so it's AM");
 }
 else{
 	 alert("It's PM");
 }
  
