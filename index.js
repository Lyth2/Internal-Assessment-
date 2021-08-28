//Internal Assessment - Card Game
//Lily Lyth
//10/08/2021
//Due - Monday 30 August

//Explanation of how the game works
console.log('Welcome to the card game! A card will be dealt and you will have to guess if the next card that is dealt will be higher or lower. If what you put is true you will get a point. First to 3 points wins!')

//sets it so that each player starts with 0 points
let point1 = 0;
let point2 = 0;

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let length = number.length

//loop, so it keeps going untill one of the players gets 3 points
do{

play();
function play(){

//asks for the players names, so now insted of calling them player 1 or player 2 it will call them the names they input.
p1N = prompt('player 1 what is your name?')
p2N = prompt('player 2 what is your name?')

//picks a random number 
let tableNumber1 = Math.floor(Math.random() * length + 1);
let tableNumber2 = Math.floor(Math.random() * length + 1);


console.log('The card that has been dealt is ' + tableNumber1)

//player 1 guesses if the next card will be higher or lower
let player1 = prompt(p1N + ' do you think the next card will be higher or lower?')

console.log('the next card is ' + tableNumber2)

//determains what happens if they input the right or wrong thing
if (tableNumber1 > tableNumber2 && player1 == 'higher'){
  console.log(p1N + ' you failed good job, you now have ' + point1 + ' points')
  
} else if (tableNumber1 < tableNumber2 && player1 == 'higher'){
  point1++
  console.log(p1N + ' you got it right, you now have ' + point1 + ' points')

} else if (tableNumber1 > tableNumber2 && player1 == 'lower'){
  point1++
  console.log(p1N + ' u got it right, you now have ' + point1 + ' points')
  
} else if (tableNumber1 < tableNumber2 && player1 == 'lower'){
  console.log(p1N + ' you got it wrong, you now have ' + point1 + ' points')
  
}

//reinitialize the random number so it is differnt for player 2
tableNumber1 = Math.floor(Math.random() * length + 1);
tableNumber2 = Math.floor(Math.random() * length + 1);

console.log('The next card that has been dealt is ' + tableNumber1)

//player 2 guesses if the next card will be higher or lower
let player2 = prompt(p2N + ' do you think the next card will be higher or lower?')

console.log('the next card is ' + tableNumber2)

//determains what happens with player 2 input
if (tableNumber1 > tableNumber2 && player2 == 'higher'){
  console.log(p2N + ' you failed good job, you now have ' + point2 + ' points')
 
} else if (tableNumber1 < tableNumber2 && player2 == 'higher'){
  point2++
  console.log(p2N + ' you got it right, you now have ' + point2 + ' points')

} else if (tableNumber1 > tableNumber2 && player2 == 'lower'){
  point2++
  console.log(p2N + ' you got it right, you now have ' + point2 + ' points')
  
} else if (tableNumber1 < tableNumber2 && player2 == 'lower'){
  console.log(p2N + ' you got it wrong, you now have ' + point2 + ' points')
  
}

}
//the loop stops when one of the players gets three points
}while (point1 < 3 && point2 < 3){
  

} 

//if they want to play again then the loop will play again if not then it will say game over
let playAgain = prompt(p1N + ' and ' + p2N + ' do you want to play again?')

if(playAgain == 'no'){
  console.log('okay, GAME OVER')
} else if (playAgain == 'yes'){
  play();
}


