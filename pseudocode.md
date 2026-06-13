**plan**

- Does your program have a user interface? What will it look like? My Rock-Paper-Scissors will be in browser console program, so I don't need interface. The only user interaction will be allowing users to pick one of the choices given, such as Rock-Paper-Scissors.
- What inputs will your program have? Will the user enter data or will you get input from somewhere else? The input of my program were Only choosing rock-paper-scissors, and the user will enter or pick their input via prompt.
- What’s the desired output? The desired output is the user picking in three given input which are the Rock-paper-scissors, and after picking an input, the computer will randomly pick its input and match it in to user input. Depends on the luck of the user, the game will determine who is gonna win. It will take five rounds to know who will win the game.
- Given your inputs, what are the steps necessary to return the desired output? Initially, I need to create function call getComputerChoice and GetHumanChoice. Subsequently, I require to declare two variables for Humanscores and computerscores. Thereafter, it necessitate to create PlayGame function to invoke the PlayRound function.

**Algorithm**

Create function getComputerChoice and getHumanChoice.
For the getHumanChoice, it will be case-insensitive.
The user will chose one of the valid choice via prompt (Rock-Paper-Scissors).
Declare two variables for Humanscores and computerscore with the default value of 0 to store there scores.
Create another function called playRound. Each round, the computer and humanchoice will be matched, and determine who won each round and announce who are winner of each round. Depend who is the winner of the round, increment human or computerscores.
Create playGame function, so that the game will play in 5 rounds, And declares a winner at the end of the game.
