const playerX ={
    userName : "Player X",
    codeName : "X",
    playerArray : [],
}

const playerO ={
    userName : "Player O",
    codeName : "O",
    playerArray : [],
}

const board = document.querySelectorAll('.cell');
const winAnnouncement = document.querySelector('#game-info > :nth-child(2)');
let gamei = 0;
let currentPlayer = playerX;
const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', () => resetGame());


board.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.classList.contains('filled')) return;
        AddCodeToBoard(cell, currentPlayer.codeName);
        currentPlayer.playerArray.push(cell.id);
        if(gamei > 3) checkWinner();
        currentPlayer = currentPlayer === playerX ? playerO : playerX;
        gamei++;
        
    });
});


function checkWinner() {
    winArrays = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    const sortedArray = currentPlayer.playerArray.map(Number).sort();
    for (let i = 0; i < winArrays.length; i++) {
        let possibleWin = 0;

        for (let j = 0; j < winArrays[i].length; j++){
            if (sortedArray.includes(winArrays[i][j])){
                possibleWin++;
            }
        };
        console.log(`Kemungkinan menang ${possibleWin}`);
        console.log(`Sorted Array ${sortedArray}`);
        if (possibleWin === 3){
            winAnnouncement.innerHTML = `${currentPlayer.userName} menang!`;
            winAnnouncement.style.display = 'block';
            for(let i = 0; i < board.length; i++) {board[i].classList.add('filled')};
            return;
        }else if(document.querySelectorAll('.filled').length == 9){
            winAnnouncement.innerHTML = `Seri!`;
            winAnnouncement.style.display = 'block';
            return;
        }
    };
}

function AddCodeToBoard(selectedCell, playerSign) {
    selectedCell.innerHTML = playerSign;
    selectedCell.classList.add('filled');
    selectedCell.classList.add(playerSign);
    playerTurn = document.querySelector('#player-turn').innerHTML = currentPlayer.userName;
    return currentPlayer;
}

function resetGame() {
    confirm('Apakah anda yakin ingin mereset permainan?');
    if (!confirm) return;
    board.forEach((cell) => {
        cell.innerHTML = '';
        cell.classList.remove('filled');
        cell.classList.remove('X');
        cell.classList.remove('O');
    })
    currentPlayer = playerX;
    playerTurn = document.querySelector('#player-turn').innerHTML = currentPlayer.userName;
    winAnnouncement.innerHTML = '';
    winAnnouncement.style.display = 'none';
    gamei = 0;
    playerX.playerArray = [];
    playerO.playerArray = [];
    return currentPlayer;
}

