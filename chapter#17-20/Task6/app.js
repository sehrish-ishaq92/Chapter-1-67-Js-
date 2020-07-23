var array =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,16,17,18,19,20]


document.write("<h1>Counting</h1>")
for(var i=0;i<array.length;i++){
    document.write("<br>" + array[i])

}


document.write("<h1>Reverse Counting</h1>")
for(var i=array.length;i>0;i--){
   
    
    document.write(" " + "<br> " + array[i])
    

}

document.write("<h1>EvenNumber</h1>")
for(var i=1;i<array.length;i=i+2){
    document.write("<br> " + array[i])
   console.log("<br> " + array[i])

}



document.write("<h1>Odd Number</h1>")
for(var i=0;i<array.length;i=i+2){
    document.write("<br> " + array[i])
   console.log("<br> " + array[i])

}

document.write("<h1>Series Number</h1>")
for(var i=1;i<array.length;i=i+2){
    document.write("<br> " + array[i] + "k")
   console.log("<br> " + array[i])

}