document.write("<h1>Chap#35-38  Task4</h1>","<br>");

var day = ["Monday","Tuesday","Wednesday","Thursday","Saturday","Sunday"];
var date= new Date();
var set_date = date.setDate(0);

var getDay = date.getDay();
var convert=date.toString();
var slice=convert.slice(0,3);

for(var i=0;i<=5;i++){
	if(i==="Sunday || Saturday")
	alert("It is Funday");
	break;
	}

else{
		alert("not found");
	}

