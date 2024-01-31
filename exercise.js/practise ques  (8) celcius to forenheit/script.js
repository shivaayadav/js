//to convert celcius into fernite info f=c*1.8+32

function temp(){
    var cel=document.getElementById('data').value
    var fer= cel * 1.8 +32;
    document.getElementById('out').innerText=`${fer},fernheit`;

}