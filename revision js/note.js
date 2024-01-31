// Here i have every note of practise questions which will be very for revision

    	        1

// using console.log

console.log("Hello world");

//using prompt

prompt("Hello world");

//using alert

alert("Hello world");

//document.write

document.write("Hello world");

                2

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


                    3


                    //to find the square root of a number in js

let a= prompt("please enter a number")
let b= Math.sqrt(a); //this method is used to find the square root of any number
console.log(b)

//nan ==  not a number


                    4


                    //to find the area of triangle

let a= prompt("Enter the height");
let b= prompt("Enter the base");
let c= (a*b)/2;
console.log("The area of your triangle is",c)

//new method using Math.sqrt() 

let a= prompt("Enter the first side");
let b= prompt("Enter the second side");
let c= prompt("Enter the third side");
let s=(parseInt(a)+parseInt(b)+parseInt(c))/2; //parseInt is very important man!!!
console.log("the area of triangle is",s);
let area= s*(s-a)*(s-b)*(s-c);
let ans= Math.sqrt(area);
console.log("the area of the triangle using heron's formula is",ans);



                    5

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



                    6

                    //converting km to miles info 1km= 0.621371

function convert(){
    var kms = document.getElementById('data').value;
    const factor=0.621371;
    var miles = kms * factor;
   document.getElementById('out').innerText = `${miles} miles`
}


                    7



//to convert celcius into fernite info f=c*1.8+32

function temp(){
    var cel=document.getElementById('data').value
    var fer= cel * 1.8 +32;
    document.getElementById('out').innerText=`${fer},fernheit`;

}


                    8


                    // to check either it is a positve, negative or zero number

//using math.sign() method   ==> math library

function check(){


    var num= document.getElementById('inp').value;
    if(num<0){
        document.getElementById('out').innerText=`The number ${num} is a negative number`
    }
    else if(num>0){
        document.getElementById('out').innerText=`The number ${num} is a positive number`
    }
    else if(num===0){
        document.getElementById('out').innerText=`The number ${num} is zero`
    }
    else(
        document.getElementById('out').innerText=`Go and fuck yourself bitch, its not a number`
    )


}


                        9


                        // generating a rendom number using math.random function
function ran(){
    

    var hn=document.getElementById('hval').value ;
    var ln=document.getElementById('lval').value ;
    var x= Math.random();
    var R=Math.floor( x*(hn-ln))
    document.getElementById('out').innerText=`${R} is your random number`
    
    }//it generated number but the last value didn't changed


    //well it didn't work properly in the wenpage may be because of some problem but worled well in the node js // terminal

    var x=Math.random();
var y=Math.floor( x *(10000-1))+1;
console.log(y);//it generated random numbers



                            10


                            //using function whether number is even or odd
function check(){
    
    var x=document.getElementById('valu').value;
    if(x%2===0){
        document.getElementById('out').innerText=`The given number ${x} is Even number`
    }
    else if(x==0){
        document.getElementById('out').innerText=`The given number ${x} is 0 number`
    }
        else{  
        document.getElementById('out').innerText=`The given number ${x} is odd number`
    }
    }


                            11

                            // to check wheteher the number is prime or not

var x = prompt("Please enter a number");
if (x == 1) {
    console.log(`${x} is not a prime number`)
}
else if (x < 1) {
    console.log(`${x} is not a prime number`)
}
else {
    for (var i = 2; i < x; i++) {
        if (x % i == 0) {
            var res = `${x} is not a prime number`
            break;
        }
        else {
            var res = `${x} is a prime number`
            

        }

    }
    console.log(res)


}


                            12

                            //to find largest number among other

//using Math.max() method
//using user defined

var a=parseInt( prompt("Enter first number"))
var b=parseInt( prompt("Enter second number"))
var c=parseInt( prompt("Enter third number"))
var y= Math.max(a,b,c);
console.log(`${y} is the greatest number`)


                            13

                            
                            // to find the factorial of any number
 var num = prompt("Please enter a number")
 var fact=1;
 
 if(num==0){
     console.log(`The factorial of ${num} is 1`)
 }
 else if(num<0){
     console.log(`The factorial of ${num} is not possible`)
 
 }
 else{
     for(var i=1;i<=num;i++){
         fact=fact*i;
         
     }console.log(`the factorial of ${num} is ${fact}`)
 }


            // using recursionm

