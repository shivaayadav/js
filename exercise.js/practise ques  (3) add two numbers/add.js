//program to add static numbers

let a=5;
let b=6;
var c=a+b;
console.log(`The sum of a and b is ${c}`)

//to write anything in the body we use document.write command like


document.write("Hello everyone to my website")

//taking user input

let ab = prompt("enter a number")
let bc = prompt("enter a number")
let cd=parseInt(ab)+parseInt(bc); //when we take input from the user it receives the number as a string so we need to convert it into number again before adding for that we use parseInt method to convert 
console.log("the sum is ",cd)