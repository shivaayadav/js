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