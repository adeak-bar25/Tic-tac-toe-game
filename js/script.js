const playerX ={
    username : "Player X",
    codename : "X",
    playerArray : [],
}

const playerO ={
    username : "Player O",
    codename : "O",
    playerArray : [],
}

const board = document.querySelectorAll('.cell');
let gamei = 0;
let currentPlayer = playerX;

board.forEach((cell) => {
    cell.addEventListener('click', () => {
        AddSign(cell, currentPlayer.codename);
        currentPlayer.playerArray.push(cell.id);
        if(gamei > 2){
            checkWinner();
        }
        console.log(sortedArray = currentPlayer.playerArray.sort());
        togglePlayer()
        console.log(gamei);
        gamei++;
        
    });
});

function checkWinner() {
    winArrays = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    // console.log('masuk tahap cari pemenang');
    sortedArray = currentPlayer.playerArray.sort();
    for (let i = 0; i < winArrays.length; i++) {
        if (sortedArray.join(",") === winArrays[i].join(",")){
            console.log(`${currentPlayer.username} menang!`);
        }
    }
}

function AddSign(selectedCell, playerSign) {
    selectedCell.innerHTML = playerSign;
}

function togglePlayer() {
    currentPlayer = currentPlayer === playerX ? playerO : playerX;
    return currentPlayer;
}