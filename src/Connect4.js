class ConnectFour {
  constructor () {
    this.inProgress = true
    this.board = [
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ']
    ]
    this.boardLength = this.board[0].length
    this.boardHeight = this.board.length

    this.tokens = {
      1: 'X',
      2: 'O'
    }
  }

  declareWinner (player) {
    console.log(`Player ${player} wins!`)

    this.inProgress = false
  }

  selectColumn (columnNumber, player) {
    for (let i = this.boardHeight - 1; i >= 0; i--) {
      if (this.board[i][columnNumber - 1] === ' ') {
        this.board[i][columnNumber - 1] = this.tokens[player]
        break
      }
    }
    this.checkHorizontalWin(columnNumber, player)
    this.checkVerticalWin(columnNumber, player)
  }

  checkHorizontalWin (columnNumber, player) {
    let counter = 0
    for (let row = 0; row < this.boardHeight; row++) {
      for (let column = 0; column < this.boardLength; column++) {
        if (this.board[row][column] === this.tokens[player]) {
          counter += 1
          if (counter === 4) {
            this.declareWinner(player)
          }
        } else {
          counter = 0
        }
      }
    }
  }

  checkVerticalWin (columnNumber, player) {
    let counter = 0
    for (let column = 0; column < this.boardLength; column++) {
      for (let row = 0; row < this.boardHeight; row++) {
        if (this.board[row][column] === this.tokens[player]) {
          counter += 1
          if (counter === 4) {
            this.declareWinner(player)
          }
        } else {
          counter = 0
        }
      }
    }
  }
}

module.exports = ConnectFour
