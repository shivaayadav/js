                                    Javascript-language-learning


                                            {LECTURE-1}


                                           first program//

// in javascript we use console.log to print any value in terminal or display
// for example
           console.log("hello world")

// remember each and every text which are also called string while writing in javascript we have to write them in double quotation mark foe eg:
//we have a lot of Data Types which are going to be used in javascript

                                             Data types//


//1) Number --> example --> 1, 2, 3, 24 , 25 etc
//2) string --> example -->  "shiva",'rajan',`pappu` etc
//3) boolean--> example --> it is used to define (true) or (false)
//4) undefined --> example --> in the case if a variable type is not defined
//5) null --> example --> means vacant or zero or empty
//6) object -->example --> now only i came to know object is also a data type in javascript yesterday i have not understood but today i got to know!!!
//7) symbol --> example ->  is also a datatype

                                                Variables//

//javascript varaiables can be decleared in 3 ways :
     //  var   ---> old one
     //  let   ---> new one
     //  const  ---> means (costant) whose value cannot be changed once declared but can be changed in the object datatypes if we use constant:


//in javascript for variables we cannot uses some things such as:
    // Reserved keywords
    // other special characters and symbols except ($) sign and (_) underscore
     //its better to start variable name with $ sign /string/ use camel method or snake method while giving name to the variable


         let age=19;//number
         const name="shiva" //string inside double quotation
         var myclass = 'two'//string inside single quotation

// if we have already decleared a variable then we can change it like this


1//code to change the const varaiable name

           let fName='shiva';//firstname
           fName='rajan'//name to be replaced
           console.log(fName)//output is rajan


2//To change the number variable;
           let a=45;
           a=12;
           console.log(a);


3//To change the string to number
            let a="78";     --->//"78" is not a number cuz its inside double quotation mark;
            a=36;               //anything inside double quotation is an string always
            console.log(a);       


4//



//Objects in javascripts

//objects changing data's of objects

                                    const shiva={
                                     fclass : 12, 
                                     fadd : "beldanda",
                                     age : 19,
                                     job : "cyber security",
                                    };
                                    shiva["age"]=shiva["age"]+1   //changing the variable
                                    console.log(shiva.age);



                                            {LECTURE-2}

                                        
                       1) Comments-in-javascript

                                    //there are two types of comment in javascript :they are :

                                    // 1) single line Comment---> use (ctrl + /) keys

                                    // 2) multi line Comment---> use (/*....*/) keys

                      2) OPerators_IN_JAvaScript----
                                         >Arithmetic_Operators

                                    // there are many OPerators_IN_JAvaScript they are:

                                    // (+) addition--> to add two variables  -->eg: let c=a+b;

                                    // (-) subtraction--> to subtract two variables  -->eg: let c=a-b;

                                    // (*) multiplication--> to  multiply two variables  -->eg: let c=a*b;

                                    // (/) division--> to divide two variables  -->eg: let c=a/b;

                                    // (%) taking reminder--> to get reminder of two variables  -->eg: let c=a%b;
                                    

                         5) unary_OPerator

                                    //post operator

                                    //example (a++)/(a--)
                                    
                                    let a=5
                                    let b=6
                                     console.log(a++) //if we have to get the value of a=6 then we have to use pre operator

                                     //pre operator

                                     //example (++a)/(--a)

                                     let a=5
                                    let b=6
                                     console.log(--a) //it will print the value of a=4 


                         6) Assignment_OPerator

                                    // (+= ) eg-->  
                                   b .  let a=6
                                    a+=4             //a=a+4
                                    console.log(a) // it will preint a=10

                                    
                                    //(-=) eg --> 
                                    let a=6
                                    a-=2             //a=a-2
                                    connsol.log(a)  //it will print a=4

                                    //(*=) eg--->
                                    let a=6
                                    a*=2   //a=a*2
                                    console.log(a) // it will give a=12


                                    //(/=) eg--->
                                    let a=4
                                    a/=2            //a=a/2
                                    console.log(a) //it will divide and give a=2

                                    //(**=) eg--->
                                    let a=3
                                    a **=2          //a=a**2
                                    console.log(a) //it will do powering of 3 square and gives the result a=9

                                    //(%=) eg--->
                                    let a=5
                                    a%=2            //a=a%2
                                    console.log(a)  //it will give the reminder of 1





//comparision operaor
 //equal to
let a=5;
let b=2;
console.log("5==2",a==b); //result is false it returns boolean value


// not equal to
let a=5;
let b=2;
console.log("5!=2",a!=b); // result is true it returns boolean value

//flaw
let a=5; // this isa number
let b="5"; // this is a string
console.log("a==b",a==b); // but it shows both equal because this operator converts the string into number  but but but

//it has a solution

//equal to & type(===)

let a=5
let b=5
console.log("a===b",a===b); //this equal to type checks every datatype and try not to make equal to string and a number

//like
let a=5
let b=3
console.log("a!==b",a!==b);

//similarly we have (> , < , >= , <=) operators

// logical operator

// logical and &&
// both value should be true to get final value true for eg 
let a=4
let b=3
let cond1=a>b
let cond2=a===4
console.log("cond1 && cond2 =",cond1 && cond2) //it gives true return

//logical OR operator
                EITHER both value should be true or at least 1 should be true ,if both are false then it will print false

let a=2
let b=3
let cond1=a>b
let cond2=a===2
console.log("cond1 || cond2 =",cond1 || cond2)


//logical nor operator

let a=2
let b=3
console.log("!(2>3) =",!(2>3))


//conditional statement

//if statement
// program to print he/she can vote or not
let age =16;
if (age>18){
    console.log("you can vote")
}
if (age<18){
    console.log("you cannot vote")
}

//to check the mode of screen
let mode ="light";
let color;
if  (mode === "dark"){
    color = "black";

}
if(mode === "light"){
    color = "white";
    
}
console.log(color);

//if else statement

//to check the dark mode
let mode="dark";
let color;

if(mode==="derk"){
    console.log("black");
}
else{
    console.log("white");
}


//to check odd or even number
let num=5
if(num%2===0){
    console.log("even")
}
else{
    console.log("odd")
}

//elseif statement

let mode="dark"
let color;

if (mode ==="dark"){
color = "black"
}
else if(mode ==="light"){
    color="white";
}
else if(mode ==="brown"){
    color="chocolate"
}
else {
    color="red"
 
}
   console.log(color)


   //ternry operator
   let age=25;

   let result = age>18?"boy":"girl"
  console.log(result)



  //switch statement

  const nam="shiva";
switch(nam){

    case "rajan":
        console.log("rajan is a good coder");
        break;

    case "nishant":
        console.log("nishant is a fucker");
        break;

    case "shiva":
        console.log("he is a good sketcher");
        break;
    default:
        console.log(`soory we are out of ${nam}.`);   
}


//practice question 

//get user to input a number using prompt (Ënter a number:)check if the number is a multiple of 5 or not

//diaplays a pop up like alert in the website /webpage

let num = prompt("enter a number");
if (num % 5 === 0){
    console.log(num, "is a multiple of 5"); 
} 
  else{
    console.log(num,"is not a multiple of 5");
  }

//it will display whether a number is multiple of  or not


//write a code which can give grade to students according to their scores
//80-100,A
//70-89,B
//60-69,C
//50-59,D
//0-49,F

let num=7;
let grade;
if(num>=80 && num<=100){
   grade = "A"
}
else if(num>=70 && num<=89){
    grade = "B"
}
if(num>=60 && num<=69){
    grade = "c"
}
if(num>=50 && num<=59){
    grade = "D"
}
if(num>=0 && num<=49){
    grade = "F"
}

console.log("your grade is =", grade);


                       

                            lecture 3



//Loopes i js
//to execute a piece of code again and again

//for loop
// to print 5 times statement

let i;
for (i=1;i<=5;i++){
    console.log("shiva fucks bitches");

}


//infinite loops

let i;
for (i=1;i>=0;i++){
    console.log("i",i);//this will print infinite numbers and freez the screen by occuping space in memory

}


//while loops

let i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}

//do while loop
 
let i=40;
do{
    console.log("shivayadav")
    i++               //from 40 i has increased to 41 now
} while (i<=50);   //so 41<=50 if it is true then only ("shivayadav") is printed 10 times

//for-of loop
-001 
let str="shivaYadav"
for(let s of str){
    console.log("i=",i)
}
//the for of loop is used to print all the characters in a string
//also we can print the size of the string


for in loop


let std={
    name:"shiva",
    roll:28,
    class:13,
    ispassed:true,
};
for(let key in std){
    console.log("key",key,"value=",std[key]);
}
//used to access data's inside an object

//to print 1 to 100 number


for( let i=1;i<=100;i++);{
    console.log("i=",i)
}

//to print even number from 1 to 100

// let i=0;
for( let i=1;i<=100;i++){


    if(i%2===0){

    console.log("i=",i)
    }
}

//to print odd number from 1 to 100
// let i=0;
for( let i=1;i<=100;i++){


    if(i%2!==0){

    console.log("i=",i)
    }
}

//create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value
leave it

//game guessing the number


let gamenum = 25;
let usr = prompt("guess the game number")

while(usr != gamenum){
    usr = prompt("you entered wrong number, guess again")

}
console.log("congratulation you guessed the right number")



//game completed 


strings in JS



creating an strings

let str="shiva";
let str='shiva';

to return string length we can use (str.length) 
for example

let str="shiva";
let str1="kmryadav";

console.log(str.length)//it will return 5 
//because the string length of str variable is 5

to print the exact position of a character or index or indeces

use
str[0]||etc likewisely
for Eg 
let str="shiva";
let str1="kmryadav";

console.log(str[2])// it will print (i) because string counting is start from 0


template literas(``)//used to write a string its a special type of string
example


let obj={

    item:"pen",
    price:10,

};
console.log("the price of",obj.item,"is",obj.price,"Rupees");
//we cannot access the key directly in console.log so we use object name.key to access the value of the key like above


let obj={

    item:"pen",
    price:10,

};
let res=`the cost of ${obj.item} is rupees ${obj.price}`//template literals
console.log(res);
console.log(typeof res)
//this method is easier than the previous one
//it is also called the (strin g interpolation) asked inn interview question

we can do arithimatic progession inside ${1+2+3}//likewisely


string methods in JS

for example

to make string into uppercase use( str.toUpperCase()) for Eg

nam="shiukuamr\nyadav"
console.log(nam.length)
let hi = nam.toUpperCase()
console.log(hi)


to make string into lowercase use( str.toLowerCase()) for Eg

let nam="shiukuamr\nYADAV"
console.log(nam.length)
let hi = nam.toLowerCase()
console.log(hi)

to trim white spaces from strings

let nam="     shiukuamr\nYADAV    "
console.log(nam.trim())
//it will return(shiukumar\nyadav) delete the white space


to slice string fromm 1 part to another

let nam="     shiukuamr\nYADAV    "
console.log(nam.slice(6,11))// the middlel part we can get including the first one



if we have to collide to strings and prinnt them at ones we use (str.concat(str2))
for Eg
let str1="shiukumar";
let str2="yadav";
let col=str1.concat(str2)
console.log(col)

to replace charaters in the strin gwe use replace method

let str="shiva"
let i=str.replace("s","x")
console.log(i)//it will print xhiva now
//we can replace 2 or 3 characters any anymuch characters at once also 



there is also  a replaceall method 



                            lecture 4


arrays


array is used when we have to print the data of same types like colection of names, marks of students in such conditions we use arrays.

for Eg
let std=['shiu','rajan','bibek','lauda','machik','muji','landchus']
console.log(std)//it will return all the names
console.log(std.length)//it will return 7

 0
//note we can make array mixing numbers as well as strings like

let std=['shiva',77,'rajan',101]

array indices
//array indices /for eg

let std=['shiu','kumar','yadav','rjan',45,78,79]
console.log(std[0])

//it will print shiu

//it helps to print certain indices


we can also change the value of string inside an array in a particular Index.
//array indices /for eg

let std=['shiu','kumar','yadav','rjan',45,78,79]
let i=std[0]="nabin"
console.log(i)

but in string we cannot chnage the valur of the strings because they are 
strinngs=immutable//note
array=mutable//note

                            looping over an array


printing all the elements in the array

//for loop
let heros=['thor','spidereman','huk','superman','batman']
for(let i=0; i<heros.length; i++)//array length ==last index+1
{
    console.log(heros[i]);

}
//we never write i<=  we only write i< that's it

//practise example

let cities=['butwal','rupandehi','ktm','muji','lado',]
for(let city of cities){
    console.log(city);
}

//if we have to print all the cities using uppercase we use the method called str.toUpperCase()
for Eg

//practise example

let cities=['butwal','rupandehi','ktm','muji','lado',]

for(let city of cities){
    console.log(city.toUpperCase());
    
}


practise question

to print the sum of marks of all the students

//to print the sum of marks of students in class

let marks=[85,97,44,37,76,60];
let sum=0;
for(let val of marks){
    console.log(val);
    sum+=val;  //assignment operator
}
console.log("the sum of the numbers is ",sum);


//to print the average marks of all the students in the class

//to print the sverage marks in class

let marks=[85,97,44,37,76,60];//array
let sum=0;
for(let val of marks){ //loops
    console.log(val);
    sum+=val;  //assignment operator
}


let avg=sum/marks.length
console.log(`the average of the maeks is ${avg}`);//template literals




practisequestion


change the array to store final orice after applying the Offer
//this is for of loop 

let items=[45,55,65,75,85]
for(let val of items){
    let items=val/10
    val-=items
        console.log(`final price after 10 % discount is ${val}`);
  
}

//this is for loop

let items=[45,55,65,75,85]
for(let i=0;i<items.length;i++){
    let offer=items[i]/10
    items[i]-=offer
        console.log(`final price after 10 % discount is ${items[i]}`);
  
}



push


to add any items in the array we must use push method for Eg

let items=[45,55,65,75,85]
items.push("shivaFUcksAkritiSoHArd","rajanFucker")
console.log(items)


pop



to delete any items from the array we use pop method for Eg

let items=[45,55,65,75,85]
items.pop()
console.log(items)//it deletes the last number 75 and print the other numbers



toString


to convert the array to the string but the actual value doesnot get affected

let items=[45,55,65,75,85]

console.log(items.toString)// it will print all the valus not in array form but simply in string form but does not change the actual value



concat


//to combine to arrays 

for Eg


let mar=['thor','ironman','spiderman','captain','wanda']
let dc=['superman','batman','flash']
let heros= mar.concat(dc);//concating arrays
console.log(heros.toString());//converting to the string


unshift

//if we have to add any valur inside the array in strating position or index 0 we can use the method unshift
for Eg

let mar=['thor','ironman','spiderman','captain','wanda']
let dc=['superman','batman','flash']
mar.unshift("vision") //adding the value tot he startinng of mar array
dc.unshift("venom")//adding the value tot he startinng of dc array
let heros= mar.concat(dc);//concating arrays
console.log(heros.toString());//converting to the string


shift


if we have to delete the first value of any array we use let mar=['thor','ironman','spiderman','captain','wanda']
let dc=['superman','batman','flash']
mar.unshift("vision")
dc.unshift("venom")
mar.shift();                    // it deletes the first value of mar array
dc.shift();                     //it deletes the first value of dc value
let heros= mar.concat(dc);//concating arrays
console.log(heros.toString());//converting to the string


slice


we can get a piece of a array using slice without changing the original vaue of the array

let mar=['thor','ironman','spiderman','captain','wanda']
let dc=['superman','batman','flash']
console.log(mar.slice(1,4))// it result value of index 1 to 4 only


Splice 

it is used to change the value if the original arrays

mar.splice(2,0,10)
//it will replace the value after the second index to 10

mar.splice(2,1,0)
//it is used to delete the value after the 2nd index and 1 value will be deleted
//we can also delete multiples values

how many vaues are to be deleted are written in the middle

                    


                        practise question




let com=['bloomberg','microsoft','uber','google','ibm','netflix']


let i=com.shift()           //remove the first company from the array
console.log(com)

let j=com.splice(2,1,"ola")         //to remove uber and add ola inits place
console.log(com)

let k=com.push("Amazon")
console.log(com)            //to add amazon at the end

thtis wil be enough to again revice the questions easily



                    lecture 5



Functions

block of code that perform a specific Task, can be invoke(call) anytime whenever needed


function can be used to prinnt a Message 


function mess(msg){
    console.log(msg)
}
mess("hi bitch fuck you so hard")



sum



function can used to print sum of two numbers and perform mathmatical OPerators_IN_JAvaScrips

function sum(a,b){
    s= a+b;
    return s;
   }
   
   sum(3,4;)



   some examples if functins used for mathmatics calculations

   //sum functions
function sum(a,b){
    return a+b;
}
let i=sum(4,5);
console.log(i)

//multiplications functions
function mult(a,b){
    return a*b;
}
let j=mult(4,8);
console.log(j)



//arrow function
let sum=(a,b)=>{
    console.log(a+b);
}
sum(4,5)

//we also need to give variable name
//need to use arrow
//paranthesis
in bracket we use console


let mult=(a,b)=>{

    console.log(a*b);
}
mult(8,7);


practise question

create a function which can count vowels in any words 


function countVowels(str) {
    let count = 0;
    for (let char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") { count++; }
      
    }  console.log(count);
}
countVowels("aaeeii") //it will return the value 6




creating an arrow function to perform the same task 


vowelcounter=(str)=>{let count=0
    for(let char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){count++}
       
    } console.log(count)
}
vowelcounter("shiva")// it will return value 2


        methods are totally a function but because they are connected with any kind of data types they are said to be a method 
         atually 
         .toString is also a function
        .toUpperCase is also a function
        but because we use string before this function they are said to be a methods

        siimilarly


        forEach Loops in arrays
        it is used to create a loop on nay tyoe if array

        we can also call our function like this 
        
function abc(){
    console.log("hello")
}
function myname(abc){
    return abc;
}


use forEach loop to print the squares of the numbers in an array


let nums =[1,2,3,4,5];

nums.forEach((num)=>{
    console.log(num*num);
});

another method to do this is

let nums =[1,2,3,4,5];

let calsqr=(num)=>{
    console.log(num*num);
}
nums.forEach(calsqr);



some more array methods


Map

similar to forEach


first method
let nums =[1,2,3,4,5];

nums.map((val)=>{
    console.log(val);
}) //it will not return the value in the array form

second method

let nums =[1,2,3,4,5];

let newarr=nums.map((val)=>{
    return val;
});
console.log(newarr) // it will return all the value in array form



filter 

to print all the ven values onplay
example

let arr=[4,5,6,7,8,9]
let evenarr=arr.filter((val)=>
{
    return val %2===0;
});
console.log(evenarr)



to print all the odd values

let arr=[4,5,6,7,8,9]
let evenarr=arr.filter((val)=>
{
    return val %2!==0;
});
console.log(evenarr)








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
            
            

























































