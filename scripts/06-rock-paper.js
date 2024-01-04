let scoreBoard = JSON.parse(localStorage.getItem('scoreBoard'));
if (!scoreBoard) {
    scoreBoard = {
        win: 0,
        lose: 0,
        tie: 0
    }
}
updateScoreboardElm();
function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMoves = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMoves = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMoves = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMoves = 'scissors';
    }
    return computerMoves;
}
function playGame(playerMove) {
    const computerMoves = pickComputerMove();
    let result = '';
    if (playerMove === 'scissors') {
        if (computerMoves === 'rock') {
            result = 'You lose.'
        }
        else if (computerMoves === 'paper') {
            result = 'You Win.'
        }
        else if (computerMoves === 'scissors') {
            result = 'You Tie.'
        }
    } else if (playerMove === 'paper') {
        if (computerMoves === 'rock') {
            result = 'You Win.'
        }
        else if (computerMoves === 'paper') {
            result = 'You Tie.'
        }
        else if (computerMoves === 'scissors') {
            result = 'You lose.'
        }
    }
    else if (playerMove === 'rock') {
        if (computerMoves === 'rock') {
            result = 'You Tie.'
        }
        else if (computerMoves === 'paper') {
            result = 'You lose.'
        }
        else if (computerMoves === 'scissors') {
            result = 'You Win.'
        }
    }

    if (result === 'You Win.') {
        scoreBoard.win += 1;
    }
    else if (result === 'You lose.') {
        scoreBoard.lose += 1;
    }
    else if (result === 'You Tie.') {
        scoreBoard.tie += 1;
    }
    updateScoreboardElm();
    localStorage.setItem('scoreBoard', JSON.stringify(scoreBoard));
    document.querySelector('.js-result')
        .innerHTML = result;
    document.querySelector('.js-picks').innerHTML = 
    ` You  <img class="move-icon" src="image/${playerMove}-emoji.png">  <img class="move-icon" src="image/${computerMoves}-emoji.png"> Computer`         
}
function updateScoreboardElm() {
    document.querySelector('.js-score')
        .innerHTML = `Win: ${scoreBoard.win}, Lose: ${scoreBoard.lose}, 
Tie: ${scoreBoard.tie}`
// document.querySelector('.js-picks').remove();
}