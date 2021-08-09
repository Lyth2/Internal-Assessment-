//Internal Assessment - Card Game
//Lily Lyth
//10/08/2021
//Due - Monday 30 August

//Explanation of how the game works
console.log('Welcoe to the card game! A card will be delt and you will have to guess if the next card that is delt will be higher or lower. If what you put is true you will get a point. First to 3 points wins!')

let number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']

let length = number.length
let tableNumber = Math.floor(Math.random() * length + 0);
console.log('The card that has been delt is ' + tableNumber)


let player1 = prompt('Player 1 do you think the next card will be higher or lower?')

