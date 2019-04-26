class ConnectFour {
    constructor() {
        this.inProgress = true;
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
          this.board[i][columnNumber - 1] = '0'
          break 
        }
      }
    }
}

module.exports = ConnectFour;
