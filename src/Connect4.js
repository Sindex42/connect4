class ConnectFour {
  constructor () {
    this.inProgress = true
    this.winner = 0
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
    this.counter = 0

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
  }

  isGameEnd (player) {
    if (
      this.checkHorizontalWin(player) ||
      this.checkVerticalWin(player) ||
      this.checkAscendingDiagonalWin(player) ||
      this.checkDescendingDiagonalWin(player)
    ) {
      this.winner = player
      this.inProgress = false
    }
  }

  checkHorizontalWin (player) {
    for (let row = 0; row < this.boardHeight; row++) {
      for (let column = 0; column < this.boardLength; column++) {
        this.updateStreak(row, column, player)
        if (this.counter === 4) { return true }
      }
    }
    return false
  }

  checkVerticalWin (player) {
    for (let column = 0; column < this.boardLength; column++) {
      for (let row = 0; row < this.boardHeight; row++) {
        this.updateStreak(row, column, player)
        if (this.counter === 4) { return true }
      }
    }
    return false
  }

  checkAscendingDiagonalWin (player) {
    for (let row = 3; row < this.boardHeight; row++) {
      for (let column = 0; column < this.boardLength - 3; column++) {
        for (let counter = 0; counter < 4; counter++) {
          this.updateStreak(row - counter, column + counter, player)
          if (this.counter === 4) { return true }
        }
      }
    }
    return false
  }

  checkDescendingDiagonalWin (player) {
    for (let row = 0; row < this.boardHeight - 3; row++) {
      for (let column = 0; column < this.boardLength - 3; column++) {
        for (let counter = 0; counter < 4; counter++) {
          this.updateStreak(row + counter, column + counter, player)
          if (this.counter === 4) { return true }
        }
      }
    }
    return false
  }

  updateStreak (row, column, player) {
    if (this.board[row][column] === this.tokens[player]) {
      this.counter += 1
    } else {
      this.counter = 0
    }
  }
}

module.exports = ConnectFour
