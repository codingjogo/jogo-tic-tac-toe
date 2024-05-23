// playerAttack(p1, p2)

// gameBoard
let gameBoard = new Array(9);

// check if there's someone won the game
// check if gameBoard is full so winner or draw
// checkWinner();
function checkWinner(p1, p2) {
	// X X X
	// O O O
	// X X X
	const possibleWins = [
		// winner horizontal
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		// winner vertical
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		// winner diagonal
		[0, 4, 8],
		[2, 4, 6],
	];

    for(const [a, b, c] of possibleWins) {

        if (p1 === gameBoard[a] && p1 === gameBoard[b] && p1 === gameBoard[c]) {
            console.log("WINNER IS X")
            return ;
        } else if (p2 === gameBoard[a] && p2 === gameBoard[b] && p2 === gameBoard[c]) {
            console.log("WINNER IS O")
            return;
        } else {
            console.log('No winners yet')
        }
    }

    console.log('DRAW')
}


// Testing
// gameBoard = ["X", "X", "X", null, null, null, null, null, null];
// console.log("Should print: WINNER IS X");
// checkWinner('X', 'O');

// gameBoard = [null, null, null, "X", "X", "X", null, null, null];
// console.log("Should print: WINNER IS X");
// checkWinner('X', 'O');

// gameBoard = [null, null, null, null, null, null, "X", "X", "X"];
// console.log("Should print: WINNER IS X");
// checkWinner('X', 'O');

// gameBoard = ["X", null, null, "X", null, null, "X", null, null];
// console.log("Should print: WINNER IS X");
// checkWinner('X', 'O');

// gameBoard = [null, "X", null, null, "X", null, null, "X", null];
// console.log("Should print: WINNER IS X");
// checkWinner('X', 'O');

// gameBoard = [null, null, "X", null, null, "X", null, null, "X"];
// console.log("Should print: WINNER IS X");
// checkWinner('X', 'O');

// gameBoard = ["X", null, null, null, "X", null, null, null, "X"];
// console.log("Should print: WINNER IS X");
// checkWinner('X', 'O');

// gameBoard = [null, null, "X", null, "X", null, "X", null, null];
// console.log("Should print: WINNER IS X");
// checkWinner('X', 'O');

// gameBoard = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];
// console.log("Should print: No winners yet");
// checkWinner('X', 'O');