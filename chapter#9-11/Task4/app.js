var input_fuel=prompt("Enter a remaining fuel");
console.log(input_fuel);

fuel=0.25;
if (input_fuel<=fuel){
	document.write("Please refill the fuel in your car");
}
else{
	document.write("Already fill");
}