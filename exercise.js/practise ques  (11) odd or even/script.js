//using function
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