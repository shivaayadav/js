//to find the area of triangle

let a= prompt("Enter the height");
let b= prompt("Enter the base");
let c= (a*b)/2;
console.log("The area of your trianle is",c)

//new method using Math.sqrt()

let a= prompt("Enter the first side");
let b= prompt("Enter the second side");
let c= prompt("Enter the third side");
let s=(parseInt(a)+parseInt(b)+parseInt(c))/2; //parseInt is very important man!!!
console.log("the area of triangle is",s);
let area= s*(s-a)*(s-b)*(s-c);
let ans= Math.sqrt(area);
console.log("the area of the triangle using heron's formula is",ans);
