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
  }

  selectColumn (columnNumber, player) {
    for (let i = this.boardHeight - 1; i >= 0; i--) {
      if (this.board[i][columnNumber - 1] === ' ') {
        this.board[i][columnNumber - 1] = player
        break
      }
    }
    this.checkHorizontalWin(columnNumber)
  }

  checkHorizontalWin (columnNumber) {
    for (let row = 0; row < this.boardHeight; row++) {
      let counter = 0
      for (let column = 0; column < this.boardLength; column++) {
        if (this.board[row][column] === 1) {
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
