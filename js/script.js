//losowanie liczby od 1-3
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2){
computerMove = 'papier';
}
else (randomNumber == 3){
computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);

//wybieranie ruchu przez gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';
if(playerInput == '1'){
  playerMove = 'kamień';
}
else if (playerInput == '2'){
playerMove = 'papier';
}
else(playerInput == '3'){
  playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);