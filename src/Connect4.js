class ConnectFour {
  constructor () {
    this.inProgress = true
    this.winState = false
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

  selectColumn (columnNumber, player) {
    for (let i = this.boardHeight - 1; i >= 0; i--) {
      if (this.board[i][columnNumber - 1] === ' ') {
        this.board[i][columnNumber - 1] = this.tokens[player]
        break
      }
    }
    this.checkHorizontalWin(columnNumber, player)
  }

  checkHorizontalWin (columnNumber, player) {
    for (let row = 0; row < this.boardHeight; row++) {
      let counter = 0
      for (let column = 0; column < this.boardLength; column++) {
        if (this.board[row][column] === this.tokens[player]) {
          counter += 1
          if (counter === 4) {
            this.winState = true
          }
        } else {
          counter = 0
        }
      }
    }
  }
}

module.exports = ConnectFour
