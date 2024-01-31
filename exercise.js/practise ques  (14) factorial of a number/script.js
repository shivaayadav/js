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