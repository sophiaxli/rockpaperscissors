const SELECTIONS = ["rock", "paper", "scissors"];

      function computerPlay() {
          let computerSelect = SELECTIONS[Math.floor(Math.random() * SELECTIONS.length)];
          return computerSelect;
      }

        function playRound(playerSelection, computerSelection) {
          let playerScore = 0;
          let computerScore = 0;
          playerSelection = playerSelection.toLowerCase();
          if (playerSelection === computerSelection) {
            return `Tie! PLAYER SCORE: ` + playerScore + ` COMPUTER SCORE: ` + computerScore;
          }
          else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
            playerScore = ++playerScore;
            return `You win! PLAYER SCORE: ` + playerScore + ` COMPUTER SCORE: ` + computerScore;
          }
          else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
            computerScore = ++computerScore;
            return `You lose! PLAYER SCORE: ` + playerScore + ` COMPUTER SCORE: ` + computerScore;
          }
          else {
            return "Please select rock, paper, or scissors."
          }
      }


      const computerSelection = computerPlay();
      console.log(playRound('ROCk', computerSelection));
      