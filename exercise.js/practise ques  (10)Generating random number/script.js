// to check wheteher the number is prime or not

var x=6;
if(x===1){
console.log(`${x} is not a prime number`)
}
else if(x<1){
    console.log(`${x} is not a prime number`)
}
else{
    for(var i=2;i<x;i++){
        if(x%i===0){
        console.log(`${x} is not a prime number`)
            break;
        }
        else{
            console.log(`${x} is a prime number`)
            break;
        }

    }
console.log(x)


}