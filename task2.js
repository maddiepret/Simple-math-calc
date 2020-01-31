//function to add values. You have to get the value of the id and assign to new variable
function sum(){
	let val1 = Number(document.getElementById("num1").value);
	let val2 = Number(document.getElementById("num2").value);
	let ansD = document.getElementById("ansSum");//create variable for answer
	ansD.value = val1 + val2;//add these numbers to get the new value
}
//function to multiply values.
function multiply(){
	let val3 = Number(document.getElementById("num3").value);//get first the value from html (user input) and save as new variable
	let val4 = Number(document.getElementById("num4").value);//get the second value from html (user input) and save as new variable
	let multiplyAnsw = document.getElementById("ansMultiply");//get the answer id from html and save as new variable to be able to do calculation
	multiplyAnsw.value = val3 * val4;//multiply the two values
}
//function to get the modulus of 2 values. 
function modulus(){
	let val5 = Number(document.getElementById("num5").value);//get the first value from html (user input) and save as new variable
	let val6 = Number(document.getElementById("num6").value);//get the second value from html (user input) and save as new variable
	let modAnsw = document.getElementById("ansMod");//get the answer id from html and save as new variable to be able to do calculation
	modAnsw.value = val5 % val6; //get modulus from two values
}