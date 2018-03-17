
let arr = ['rocks', 'paper', 'scissors']

function playerSelection(){
  let item = prompt('Choose rocks, paper or scissors')
  while (arr.includes(item.toLowerCase()) === false){
    item = prompt('Choose a valid selection.  Rocks, paper, scissors.')
  }
  return item.toLowerCase() 
}

function computerPlay(){
  let numb = Math.floor(Math.random() * 3)
  let computerResult = arr[numb].toLowerCase()
  return computerResult
}

function playRound(playerHand, computerHand){
  console.log(`This round, we have PLAYER 1 playing ${playerHand} and the COMPUTER playing ${computerHand}.`)
  let winner
  if(
    (playerHand === 'rocks' && computerHand === 'scissors') || 
    (playerHand === 'scissors' && computerHand === 'paper') ||
    (playerHand === 'paper' && computerHand === 'rocks')
    ){
      winner = 'PLAYER 1'
      }else if(
      (playerHand === 'paper' && computerHand === 'scissors') ||
      (playerHand === 'rocks' && computerHand === 'paper') ||
      (playerHand === 'scissors' && computerHand === 'rocks')
      ){
      winner = 'COMPUTER'
      }else{
      return 'WE HAVE A DRAW!!!!'
      }
    // console.log(`Our winner is ....... ${winner}`)
    return winner
}

function game(){
  let winner
  let highestScore = 0
  let computerScore = 0
  let playerScore = 0
  let round
  
  while(highestScore < 3){
    round = playRound(playerSelection(),computerPlay())
    prompt(`${round}`)
    if(round === 'PLAYER 1'){
      playerScore += 1 
    }else if(round === 'COMPUTER'){
      computerScore += 1 
    }
    
    if(playerScore > computerScore){
      highestScore = playerScore
    }else{
      highestScore = computerScore
    }
    console.log(`The winner of this round is ${round}`)
  }
  
  if(highestScore === playerScore){
    winner = 'PLAYER 1'
  }else{
    winner = 'COMPUTER'
  }
  console.log(`Player 1 score is ${playerScore} and the Computer score is ${computerScore}`)
  console.log(`${winner} has the score of ${highestScore}!!!`)
}

game()

