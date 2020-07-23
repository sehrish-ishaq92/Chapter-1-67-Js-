var Array = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

var userInput=prompt("Enter your item")


for(i=0;i<Array.length;i++){
    var trueValue = "False"

    if(userInput==Array[i]){
    document.write("Yes this item " + userInput + " is available at index  " + i)
    break }

    else{
        
}

