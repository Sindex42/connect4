const Connect4 = require('../src/Connect4.js');

describe('Connect4', () => {
    test('starts with an empty board', () => {
        const connect4 = new Connect4();

        expect(connect4.board).toEqual([
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' '],
            [' ', ' ', ' ', ' ', ' ', ' ']
        ]);
    });

    test('puts a player token into the last row', () => {
      const connect4 = new Connect4();

      connect4.selectColumn(1, 1);
      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          ['0', ' ', ' ', ' ', ' ', ' ']
      ]);
    });

    test('puts a player token into a column', () => {
      const connect4 = new Connect4();

      connect4.selectColumn(1, 1);
      connect4.selectColumn(1, 2);
      expect(connect4.board).toEqual([
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' '],
          ['0', ' ', ' ', ' ', ' ', ' '],
          ['0', ' ', ' ', ' ', ' ', ' ']
      ]);
    });
});
