function playGame(playerInput){
  clearMessages ();
  function getMoveName(argMoveId) {
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == '2') {
        return 'papier';
    } else if (argMoveId == '3') {
      return 'nożyce';
    }
  }
  //losowanie liczby od 1-3
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  let argComputerMove = getMoveName (randomNumber);

  /*if(randomNumber == 1){
    computerMove = 'kamień';
  } else if (randomNumber == 2){
  @@ -26,7 +28,7 @@ */
  printMessage('Mój ruch to: ' + argComputerMove);

    console.log('Gracz wpisał: ' + playerInput);

  let argPlayerMove = getMoveName (playerInput);
  /*if(playerInput == '1'){
    playerMove = 'kamień';
  } else if (playerInput == '2'){
  @@ -37,33 +39,33 @@ let playerMove = getMoveName (randomNumber);
  printMessage('Twój ruch to: ' + argPlayerMove);*/
  function displayResult(argComputerMove, argPlayerMove){
      console.log('moves:', argComputerMove, argPlayerMove);

    //Wynik dla komputer-kamień
    if(argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      return('Remis!');
    } else if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      return('Wygrywasz!');
    } else(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      return('Przegrywasz');
    }

    //Wyniki dla komputer-papier
    if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      return('Przegrywasz');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      return('Remis');
    } else(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      return('Wygrywasz');
    }

    //Wyniki dla komputer-nożyce
    if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      return('Wygrywasz');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      return('Przegrywasz');
    } else(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      return('Remis');
    }

    //wynik dla błędnego wprowadzenia cyfry przez gracza
    if(argPlayerMove == 'nieznany ruch') {
      return('Błąd! Wprowadź cyfrę od 1 do 3!');
    }
  }
  	printMessage('wynik:' + displayResult(argComputerMove, argPlayerMove));
}

  document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
  });
  document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
  });
  document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
  });
