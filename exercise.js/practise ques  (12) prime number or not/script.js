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