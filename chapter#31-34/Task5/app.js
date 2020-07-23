document.write("<h1>Chap#35-38  Task5</h1>","<br>");
 var date = new Date();
 alert("Current Date  " +  date);

 var get_date = date.getDate();
 alert("Today Date " + get_date);

 if(get_date<=16){
 	 alert("First fifteen days of the month");
 }
 else{
	 alert("Last days of the month");
	 }