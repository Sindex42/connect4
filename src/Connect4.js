class ConnectFour {
    constructor() {
        this.inProgress = true;
        this.winState = false;
        this.board = [
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ']
        ];
    }

    selectColumn(columnNumber, player) {
      for (let i = 5; i >= 0; i--) {
        if (this.board[i][columnNumber - 1] === ' ') {
          this.board[i][columnNumber - 1] = player
          break
        }
      }
      this.checkHorizontalWin(columnNumber)
    }

    checkHorizontalWin(columnNumber) {
      for (let row = 5; row >= 0; row--) {
        let counter = 0
        for (let column = 0; column < 6; column++) {
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

module.exports = ConnectFour;
