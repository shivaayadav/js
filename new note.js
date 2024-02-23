// how to assign variables lets see here

// keywords const, var, let
// variables
// dataTypes

/*  note is=> do not use 'var' keyword for assigning variables in js because "var" was unable to identify the scope {} which are global scope and local scope so if two variables were defined at same name it used to replace the value from the previous value, that is why we mostly use let and we used const dor constant values which we don't have to change */

// structure is
// const variableName="Something";
// console.log("") is used to print the statements or results

// let do a work now

const firstName = "shiva";
const lastName = "yadav";
const age = 19;
console.log(firstName);
console.log(lastName);
console.log(age);
// this is too long and consume time
// we can print all this consoles at ones lets see how

// Using console.table([])

console.table([firstName, lastName, age]);


|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// There are a lot of data types in js they are listed below

/* let firstNamer="shiva" => string dataType
 let age = 25  => number dataType
 
let isLoggedIn=> ture/ false  =>boolean dataType

let lastName;  => undefined

null dataType => This is a object datatype, if we have to return nothing, literally intensionally vacant at that time we use null,

bigInt => dataType used to store large numbers 
*/

function studentName(nam = null) {
    // null here means doesn't return any value , literally anything / not even zero / only null
    if (nam) {
      console.log("Hello, " + nam);
    } else {
      console.log("Hello" + "world");
    }
  }
  studentName("shiu");
  console.log(typeof studentName);
  //we can also know the type of data we are getting through the command "typeof value"/ "typeof variable name"
  // )
  
  // like
  let className = "five";
  console.log(typeof className);
  
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  //Data Type Conversion
  
  // string to number
  let value = "33";
  let converted = Number(value);
  console.log(typeof converted, value);
  
  // numbers to string
  let val1 = 33;
  let con1 = String(33);
  console.log(typeof con1, con1);
  
  // number to boolean
  let isLoggedIn = 1;
  let con2 = Boolean(isLoggedIn);
  console.log(typeof con2, con2);
  
  //  boolean to number
  let isSuckingIn = false;
  let isFuckingIn = true;
  let bol1 = Number(isFuckingIn);
  let bol2 = Number(isSuckingIn);
  
  console.log(bol1, bol2);
  
  // the mistake number is converted in 0
  let firName = null;
  let con3 = Boolean(firName);
  console.log(typeof con3, con3);
  
  // undefined to number
  let def;
  let con4 = Number(def);
  console.log(con4); //returned not a number (NaN)
  
  
  
  // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // operators
  
  // postfix operator
  let x=4;
  let y=x++
  console.log(y,x)  // value of y=4 and x=5 because at first value of x is already assign to y which is 4 and then value of x is changed which is 5
  
  
  // prefix operator
  let X=5;
  let Y=++x;
  console.log(x,y) // value of x=6 and y=6 because at first we have x=5 and then we have preoperator which doesn't assign the value to y before the opertion it only assign the value to y after the using of operator so after value of x becommes 6 it will be assign on y as 6 so finally the value of x, y both will be 6
  
  // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  // There are different types of data's but they are categorized into two types of data's which are-:-
  // 1) primitive data type 
      //   it consisits 7 data types they are:-
      // Number, string , Boolean, symbol, null, undefined, BigInt
  
      // 2) non-primitive data types or referencial data types 
      // Array, object, function 
  
      // now lets see what is symbol
  
      // symbol is used to give same data in two different varialble but also they are different like  
  
      let str=Symbol('34566')
      let anotherStr=Symbol('34566')
      console.log(str==anotherStr)
      //it returns false value because it return different value in each variables
  
      //similarly BigInt
  
  let bigNumber=44555794452555889n
  console.log(typeof bigNumber) // it returned bigint data type
  
  
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||  

let myDate= new Date()
console.log(myDate) // output=2024-02-12T15:56:45.649Z => it gives the current date and time
console.log(myDate.toString())//output=Mon Feb 12 2024 21:41:45 GMT+0545 (Nepal Time=> it gives the perfect and complete and true and valid date of present day as well as time.
console.log(myDate.toDateString()) // output =Mon Feb 12 2024 =>it only prinnts the date of today
console.log(myDate.toISOString()) /// output = 2024-02-12T15:58:25.184Z => it gives some unusual output
console.log(myDate.toJSON())// output= 2024-02-12T15:59:21.761Z => it gives similar output
console.log(myDate.toLocaleDateString()) // output=2/12/2024 => it gives output in this way
console.log(myDate.toLocaleString())// output=2/12/2024, 9:50:40 PM => it prints both date as well as time
console.log(myDate.toLocaleTimeString()) //output=9:52:09 PM  => it print times only
console.log(myDate.toTimeString())//output=21:53:21 GMT+0545 (Nepal Time) => it prints both time and jone as well.
console.log(myDate.toUTCString())//output=Mon, 12 Feb 2024 16:09:29 GMT  date with time
console.log(typeof myDate) //it isobject

let newDate= new Date("01-1-1971")
console.log(newDate.toLocaleString())


// time stamps in js 
// this is used to compare two datas in js
// let see 
let timeStamp= Date.now()
console.log(timeStamp)
console.log(Math.floor(Date.now()/1000))
console.log(newDate.getTime())
//time stamp will be used to make times alarm etc
// to get the milliseconds form 1 jan 1970 we used Date.now()

||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// lets see how memory is allocated and how it works in javascript
// we have two types of memories
//stack memory
// heap memory

// all the primitive data types are allocated in the stack memory
// where as all the non-premitive data types are stored in the heap memory

// so the main point is 
// if we define any variable in the primitive type it allocate some space for it 
// when we ask the data into another variable it only provides the copy of the data to store in another variable  
//    like 

let nam="shivayadav"
let meronam=nam
meronam="genius boy shiva"
console.log(nam) // it returned=> shivayadav
console.log(meronam)// it returned =>genius boy shiva
// it means it doesn't change the original located value

// but but but 

// let see the heap memory here

let teronam={
    user:"landeswar",
    email:"thuloland@muji.com",
}
teronam.email="ladochusmuji@valu.com"
console.log(teronam.email)

|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// The maths and numbers in the js

const num1=25
console.log(typeof num1,num1)
const num2= new Number(45.2) // if we have to specially introduce a number then we can use this method to introduce anynumber using the new Number() method 
console.log(typeof num2,num2)
console.log(num2.toString().length) //converting number into string

console.log(num2.toFixed(2)) //it contracts the number into 2 numbers in the decimal area or after the dot.

console.log(num2.toPrecision(2)) //it removes the decimal points and provides the actual integers only

const num4=1000000
console.log(num4.toLocaleString()) //it adds commas to the large integers and is by default set to us system if we have to change it in indian system we can do it by.
console.log(num4.toLocaleString('en-IN')) // it is converted to indian system of numbering.

// ++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)

console.log(Math.abs(-9)) // only changes he sign fromm neg to positive

console.log(Math.round(4.5)) // rounds the number


console.log(Math.ceil(4.1)) // rounds to the highest value
console.log(Math.floor(4.9)) // rounds to the smallest one

console.log(Math.max(4,8,6)) // print the max value 

console.log(Math.min(1,0,5)) // print the smallest

console.log(Math.random()) // print random number btn 0 and 1
console.log((Math.random()*10)) // now the number will be only btn 0 to 10 that means 0 can also be printed that is why we do
console.log((Math.random()*10)+1) // it will never give the number 0 beccause 1 is already added to the upcoming result 
// if by chance 0 was printed then also at last 1 is added so while printing it will display 1

// but still it is being printed in decimal values which is not looking nice so lets print them in integer value 
console.log(Math.floor(Math.random()*10)+1) // this will now provide all the numbers in interger

// suppose we have to print random number btn 10 to 20 so how can we do that lets see 

const max=20
const min=10

console.log(Math.floor(Math.random()*(max-min+1))+min) // now it will print the numbers between 10 to 20




||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// string 
const nau="     lado    muji    randi      "  // the trim method doesn't trim spaces inside the words but trim spaces and tabs outside the words or text
console.log(nau.trim())
const nam="shiva"
const lnam="yadav"

console.log(nam.substring(0,5))// substring is used to trim words from anypart of the text but not in reverse order
console.log(nam.slice(1,4))// it is also same but we can reverse the trimming here by using negative value inside the brackets
let shi= nam.concat(" "+lnam+" ")// the concat method is used to join 2 of the variables in js
console.log(shi.charAt(6)) // to print the location of the characters in the string
console.log(shi.indexOf('h'))// used to locate the number of the character
console.log(nam.slice(1,6))
let nam="shiva"
console.log(nam.includes("l")) //it is used to check whether the character is inside thte string or not.


console.log(shi.length) // to print the length of the string
console.log(nam.toUpperCase())// t oprint the value in upper case
console.log(nam.toLowerCase())// to print the valus in lower case
console.log(nam + lnam) 
console.log(`hello my name is ${nam} and last name is ${lnam}`)//template literals

||||||||||||||||\\\\\\|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//arrays

const myarr=[0,1,2,3,4,5]
myarr.push(6)
myarr.push(7)// the push method in the array is used to add any data in the array
console.log(myarr) //output = [
//     0, 1, 2, 3,
//     4, 5, 6, 7
//   ]
myarr.pop()// it removes the last value inside the array
console.log(myarr)

myarr.unshift(9) // it add the value at first
console.log(myarr)

myarr.shift()// it removes the first value
console.log(myarr)

console.log(myarr.includes(9))// include is used to ask questions in the array or string 

console.log(myarr.indexOf(2)) //it is used to give the index of number 2 


const fucknum=[0,1,2,3,4,5,6]
console.log(typeof fucknum,fucknum)
const newfucknum= fucknum.join() // if we have to convert array into string we use array.join()
console.log(typeof newfucknum, newfucknum)


//join method is used to convert the arrays into strings

// slice method 

// the slice method doesn't change the orignal value in the array and gives the result 
// whereas the splice method literally changes the value inside the array and also incldes the last integer wile printing while slice doesn't inncludes

// there are three methods in array which are listed below like 

// IsArray= this method simply checks the data whether it is n array or not 

// Array.from(.......) this method convert any data type into array

// Array.of(...,..,..) this method is also used to convert many datas at once into array

//concat is used to join two different arrays

// push method is used to insert an array into another array 

// if we have to spread the array we use .flat(infinity) method will give all the values inside an array of array of array at once





|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// // function 
// // function is used to perform same work multiple times in the code which makes it easir for the user to write the code 
// // function sayMyName(){

// //     console.log("S");
// //     console.log("h");
// //     console.log("i");
// //     console.log("v");
// //     console.log("a");
// // }
// // sayMyName()

// function addFourNumbers (a,b,c,d)// these variables inside the box is known as parameters
 
// {  console.log(a+b+c+d)

// }
// addFourNumbers(1,2,3,4)// this variables inside the box is known as arguments



// function addTwonumber(a,b){
//     return a+b
// }
// const result = addTwonumber(4,5)
// console.log(result)

// function UserMessage(user){
//     return `${user} has just logged in`
// }
// console.log(UserMessage("shiva")) // this is the new method here we donot have to store any data in the variable we can directly print the data


function userLoggedIn(user){
    // (!) this sign indicates not equals to sign which always returns false value 
    // undefined  the value of undefined is always false 
    // ("") empty btn the quotes states false value 
    // so we have the logic that if something is true then enter in the if condition else return 
    
        if(user=== undefined){
            console.log("Please enter the your name")
            return // as soon as the return keyword is executed it doesnot run any further lines of codes down to it let me explain
    
        }
        return user
    }
    console.log(userLoggedIn())

    |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||






 //singleton


// Object.create=====>contructor method  




 //object literals
 //lets see the structure of the object
//  we can create and define any object through constructor method
// which is like this

let mysym = Symbol("key")

 let user={
    fullName:"chat gpt",
    age:19,
    gender:"male",
    [mysym]:"key",
    isTopG:true,
    email:"lasochusmnuj@valu.com",
    futureBillionears:["shiva","Rajan"],
 }
//  console.log(typeof user[mysym],user[mysym])
//  console.log(user)
 Object.freeze(user)
//  console.log(user.email)// ye haich paila method
//  console.log(user["age"])//apan ko bracket k andar quotes lagane ka ,kya samja bidu// ye appan ka dusra method objects se data niklne waste

user.greeting=function (){
    console.log("hello world!!")
}
// console.log(user.greeting())// this is how we add function inside the objects as a variable and access it

user.hello= function (){
    console.log("hello mother fuckers", this.fullName)
    console.log(`hy suck my dick ${this.fullName}`)
}
// console.log(user.hello())// this is how we sync function with the objects keys and values.

//so this was all about the functions and objects in part 1


// part 2 

// creating and joining two objects
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
// now to have to combine thi stwo of the objects how can we combine that let see //
const returnedObject=Object.assign(obj1,obj2) //the value of obj2 shifts into the obj1 because onj1 is known as the target here and ob2 is known as the source and it is already defined that source shifts towards the target.and that is why returnedObject is equal to obj1 here
console.log(returnedObject)
console.log(returnedObject===obj1) //both are equal


// lets seeif we have to print all the objects value at one place then how can we do that
// use of (...obj1,...obj2) this is spread operator syntax which prints all value at ssame place

// let see a example
const obj7={...obj1, ...obj2} //it printed all the value in obj7
console.log(obj7)


const arry1=[
    {
        id:1,
        user:"gandu",
        
    },
    {
        id:2,
        user:"landu",

    },
    {
        id:3,
        user:"jhandu",

    },
    {
        id:4,
        user:"pandu",

    },
    {
        id:5,
        user:"mandu",

    }
]

console.log(arry1[1].user)// this method is used to access data inside the array in objects

// lets build an object using the constructor method and gain its objects like keys and values
 const muij= new Object()
 muij.user="pappu"
 muij.id=36
 muij.class="randi khana"
 console.log(muij)
 console.log(Object.keys(muij))//[ 'user', 'id', 'class' ] this is the output

 console.log(Object.values(muij))// 'pappu', 36, 'randi khana' ] this is the output

 console.log(Object.entries(muij))//
//  [ [ 'user', 'pappu' ], [ 'id', 36 ], [ 'class', 'randi khana' ] ] this is the output

 console.log(muij.hasOwnProperty('user')) //to check if any property is inside the object or not




// +++++++++++++++++++++++++++++++++++++++++++++++++++++


const randi={
    usrName:"vivek",
    id:5,
    collge:"thapi_halis"
}
// console.log(randi.collge)

// lets see how can we destructure this 
const{collge:clz}=randi  // syntax of destructure

console.log(clz)


// +++++++++++++++++++++++++++++++++++++++++++++++++++

// json data fromate  
{
    "user":"nikhil",
    "id":"fucker",
    "class":"five",
    "school":"thapi-halis"
}
//  this can also be the type of json file formate 
[
    {}
    {}
    {}
    {}
]




|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

// joining to different objects using Object.assign 

// const obj1={1:"a",2:"b"}
// const obj2={3:"x",4:"y"}
// // const obj3=Object.assign({},obj1,obj2)//it is used to join two objects
// const obj3= obj1.concat(obj2)
// console.log(obj3)


// joining two diiferent arrays using concat /

// let arr1=["25","45","35","15"]
// let arr2=["26","46","36","16"]
// let arr3=arr1.concat(arr2)
// console.log(arr3)

|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


const student={
    id:5,
    lado:"rohan das",
    price:225
}

// function students(anyobject){
//     console.log(`${anyobject.lado} price is ${anyobject.price}`)
// }
const randi=(muji)=>((`${muji.lado} has a price of ${muji.price}`))
// // console.log(randi(student))
//this is the arrow function
// students(student)

// //this is how we pass the objects inside any funnctions

// const ourArray = [11,22,33,44,55]
// function takearray(anyArray){
//     return anyArray[2]
// }
// // console.log(takearray(ourArray))
// // 
// // this method is a method to input or enter or mainly pass arrays values inside any functions

// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 


// // Scopes

// const topper={
//     names:"akriti",
//     boobssize:32,
//     ass:36,

// }
// const condomwali=
// {
//     names:"tina",
//     boobssize:32,
//     ass:36,

// }
// const valu=
// {
//     names:"pramisha",
//     boobssize:32,
//     ass:36,

// }
// const chiks={
//     names:"ishani",
//     boobssize:32,
//     ass:36,

// }
// function randi(anychiks){
//     console.log(`${anychiks.names} has ass of ${anychiks.ass} and boobsize size of ${anychiks.boobssize}`)
// }

// // randi(condomwali)
// // randi(chiks)
// // randi(valu)

// const randikti=["tina","akriti","ishani","pramisha"]
// function randiharu ( chikau){
//     return chikau[2]
// }
// console.log(randiharu(randikti)) //this method is used to input strings or array inside the function




// // nested function 
// function mobile (){
//     const model="samsung"
//     function price (){
//         const rupess=150000
//         console.log(`The price of ${model} is Rupees ${rupess}`)
//     }
//     price()

   
// }

// mobile()
//nexted function






// lets see printing the present ocntext using this 

// const pussies={
//     user:"saurav",
//     id:5

// }
// pussies.wet=function(){
//     console.log(` ${this.user} is a pussie`)}

//     pussies.user="vivek"
// console.log(pussies.wet())  
//this i show we insert a function inside a object pussey and change its variable using this statement . thi smethod is used to show the present context of data which is going to used widely in react


// this method shows empmty value or empty brackets when run inside the terminal and shows window object when run inside the browser because in browser console if there is nothing also then also there exists the window object but in the terminal there if the working space is empty then we will not get any value of the this method. 


// because this method doesn't work inside the function





