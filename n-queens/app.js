function setupBoard() {
    const center = document.createElement('center');
    const board = document.createElement('table');
    const board_size = 5;

    for (let i = 0; i < board_size; i++) {
        const newRow = document.createElement('tr');

        for (let j = 0; j < board_size; j++) {
            const newSquare = document.createElement('td');

            if ((i + j) % 2 === 0) {
                newSquare.setAttribute('class', 'white-square')
            }
            else {
                newSquare.setAttribute('class', 'black-square')
            }

            newRow.append(newSquare)
        }

        board.append(newRow)
    }

    center.append(board)
// TODO - figure out how to scale board
// center.setAttribute('id', 'chessContainer')
    document.body.append(center)
}

setupBoard()