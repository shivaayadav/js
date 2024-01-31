//to print the table of any number


var num=prompt("please enter a number")
function table(num){

    for(let i=1;i<=10;i++){
        var res=num*i;
        console.log(`${num} x ${i} = ${res}`)
    }

}
table(num);