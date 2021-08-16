//Internal Assessment - Card Game
//Lily Lyth
//10/08/2021
//Due - Monday 30 August

//Explanation of how the game works
console.log('Welcome to the card game! A card will be dealt and you will have to guess if the next card that is dealt will be higher or lower. If what you put is true you will get a point. First to 3 points wins!')

let point1 = 0;
let point2 = 0;

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

let length = number.length


do{

play();
function play(){

//picks a random number 
let tableNumber1 = Math.floor(Math.random() * length + 1);
let tableNumber2 = Math.floor(Math.random() * length + 1);


console.log('The card that has been dealt is ' + tableNumber1)


let player1 = prompt('Player 1 do you think the next card will be higher or lower?')

console.log('the next card is ' + tableNumber2)

//determains what happens if they input the right or wrong thing
if (tableNumber1 > tableNumber2 && player1 == 'higher'){
  console.log('u fail good job, you get 0 points')
  console.log('player 1 you now have ' + point1 + ' points')
} else if (tableNumber1 < tableNumber2 && player1 == 'higher'){
  console.log('u got it right')
  point1++
  console.log('Player 1 you now have ' + point1 + ' points' )
} else if (tableNumber1 > tableNumber2 && player1 == 'lower'){
  console.log('u got it right')
  point1++
  console.log('player 1 you now have ' + point1 + ' points')
} else if (tableNumber1 < tableNumber2 && player1 == 'lower'){
  console.log('lol u got it wrong, you get 0 points')
  console.log('player 1 you now have ' + point1 + ' points')
}

//reinitialize the random number so it is differnt for player 2
tableNumber1 = Math.floor(Math.random() * length + 1);
tableNumber2 = Math.floor(Math.random() * length + 1);

console.log('The next card that has been dealt is ' + tableNumber1)

let player2 = prompt('Player 2 do you think the next card will be higher or lower?')

console.log('the next card is ' + tableNumber2)

//determains what happens with player 2 input
if (tableNumber1 > tableNumber2 && player2 == 'higher'){
  console.log('u fail good job, you get 0 points')
  console.log('player 2 you now have ' + point2 + ' points')
} else if (tableNumber1 < tableNumber2 && player2 == 'higher'){
  console.log('u got it right')
  point2++
  console.log('Player 2 you now have ' + point2 + ' points' )
} else if (tableNumber1 > tableNumber2 && player2 == 'lower'){
  console.log('u got it right')
  point2++
  console.log('player 2 you now have ' + point2 + ' points')
} else if (tableNumber1 < tableNumber2 && player2 == 'lower'){
  console.log('lol u got it wrong, you get 0 points')
  console.log('player 2 you now have ' + point2 + ' points')
}

}
//the loop stops when....
}while (point1 < 3 && point2 < 3){
  console.log('player 2 you win')
} 

//if they want to play again then the loop will play again if not then it will say game over
let playAgain = prompt('Do you want to play again?')

if(playAgain == 'no'){
  console.log('okay, GAME OVER')
} else if (playAgain == 'yes'){
  play();
}


