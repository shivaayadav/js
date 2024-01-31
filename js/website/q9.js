//game guessing the number


let gamenum = 25;
let usr = prompt("guess the game number")

while(usr != gamenum){
    usr = prompt("you entered wrong number, guess again")

}
console.log("congratulation you guessed the right number")