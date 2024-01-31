//swapping values btn two variables using temproary variable

let a = prompt("Enter the first value")
let b = prompt("Enter the second value")
console.log(`the value of a is: ${a}, The value of b is:${b}`)
let temp=a; //temp=5;
a=b; //a=6  b=!!;
b= temp; //b=5;
console.log(`after swapping a is:${a}, b is ${b}`)


// swapping variables without using temproary variable

let a = parseInt(prompt("Enter the first value"))
let b = parseInt(prompt("Enter the second value"))
console.log(`the value of a is: ${a}, The value of b is:${b}`)
a=a+b;
b=a-b;
a=a-b;
console.log(`after swapping a is:${a}, b is ${b}`)

