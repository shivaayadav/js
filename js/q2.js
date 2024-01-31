//printing multiplication table of 9
let num = 9;
let lim = 10;
function mult(num, lim) {
    for ( let i = 1; i <= 10; i++) {

        const res = num * i;
        console.log(`${num} * ${i} = ${res}`);

    }
}
mult(9,10);