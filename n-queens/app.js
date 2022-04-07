function setupBoard(board_size) {
    const center = document.createElement('div');
    center.setAttribute('id', 'center')

    const board = document.createElement('table');
    board.setAttribute('id', 'board')

    for (let i = 0; i < board_size; i++) {
        const newRow = document.createElement('tr');

        for (let j = 0; j < board_size; j++) {
            const newSquare = document.createElement('td');

            if ((i + j) % 2 === 0) {
                newSquare.setAttribute('class', 'white-square square')
            }
            else {
                newSquare.setAttribute('class', 'black-square square')
            }

            newRow.append(newSquare)
        }

        board.append(newRow)
    }

    center.append(board)
    document.body.append(center)
}

function clearBoard() {
    let center = document.getElementById('center')
    center.parentNode.removeChild(center)
}

function getSquare(rank, file) {
    const rows = document.querySelectorAll('tr')
    const squares = rows[rank].querySelectorAll('td')
    return squares[file]
}

function addQueen(rank, file) {
    const square = getSquare(rank, file)

    let img = document.createElement('img')
    img.src = "queen.png"
    img.width = 40
    img.height = 40
    square.append(img)
}

function removeQueen(rank, file) {
    const square = getSquare(rank, file)

    let image = square.children[0]
    square.removeChild(image)
}

function underAttack(i, j, board, N) {
    // check column j
    for (let k = 0; k < N; k++) {
        if (board[k][j] === 1) {
            return true
        }
    }

    // check upper right diagonal
    let k = i - 1
    let l = j + 1

    while (k >= 0 && l >= 0) {
        if (board[k][l] === 1) {
            return true
        }

        k--
        l++
    }

    // check upper left diagonal
    k = i - 1
    l = j - 1

    while (k >= 0 && l >= 0) {
        if (board[k][l] === 1) {
            return true
        }

        k--
        l--
    }

    return false
}

function nQueens(row, n, N, board) {
    if (n === 0) {
        return true
    }

    for (let j = 0; j < N; j++) {

        if (!underAttack(row, j, board, N)) {
            board[row][j] = 1
            addQueen(row, j)

            if (nQueens(row+1, n-1, N, board)) {
                return true
            }

            removeQueen(row, j)
            board[row][j] = 0
        }
    }

    return false
}

function createBoard(n) {
    let board = []

    for (let i = 0; i < n; i++) {
        let row = []

        for (let j = 0; j < n; j++) {
            row.push(0)
        }

        board.push(row)
    }

    return board
}

function run(n) {
    clearBoard()
    setupBoard(n)

    let newBoard = createBoard(n)
    nQueens(0, n, n, newBoard)
    console.log(newBoard)
}

function userSize() {
    let size = document.getElementById('size').value

    run(size)
}
