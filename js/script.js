function getMoveName(argMoveId) {
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == '2') {
      return 'papier';
  } else if (argMoveId == '3') {
    return 'nożyce';
  }
}
function displayResult(argComputerMove, argPlayerMove){
  console.log('moves:', argComputerMove, argPlayerMove);
}
//losowanie liczby od 1-3
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName (randomNumber);
/*if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2){
  computerMove = 'papier';
} else (randomNumber == 3){
  computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove); */

//wybieranie ruchu przez gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName (randomNumber);
/*if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2'){
  playerMove = 'papier';
} else(playerInput == '3'){
  playerMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove); */

//Wynik dla komputer-kamień
if(argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
  printMessage ('Remis!');
} else if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
  printMessage('Wygrywasz!');
} else(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
  printMessage('Przegrywasz');
}

//Wyniki dla komputer-papier
if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
  printMessage ('Przegrywasz');
} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
  printMessage ('Remis');
} else(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
  printMessage ('Wygrywasz');
}

//Wyniki dla komputer-nożyce
if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
  printMessage ('Wygrywasz');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
  printMessage ('Przegrywasz');
} else(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
  printMessage ('Remis');
}

//wynik dla błędnego wprowadzenia cyfry przez gracza
if(argPlayerMove == 'nieznany ruch') {
  printMessage ('Błąd! Wprowadź cyfrę od 1 do 3!');
}
