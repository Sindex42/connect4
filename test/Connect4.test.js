/* global describe, test, expect */
const Connect4 = require('../src/Connect4.js')

describe('Connect4', () => {
  test('starts with an empty board', () => {
    const connect4 = new Connect4()

    expect(connect4.board).toEqual([
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' ']
    ])
  })

  test('puts a player token into the last row', () => {
    const connect4 = new Connect4()

    connect4.selectColumn(1, 1)
    expect(connect4.board).toEqual([
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      ['X', ' ', ' ', ' ', ' ', ' ']
    ])
  })

  test('puts the next player token into a row above in the same column', () => {
    const connect4 = new Connect4()

    connect4.selectColumn(1, 1)
    connect4.selectColumn(1, 2)
    expect(connect4.board).toEqual([
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      ['O', ' ', ' ', ' ', ' ', ' '],
      ['X', ' ', ' ', ' ', ' ', ' ']
    ])
  })

  test('game is won if 4 of the same tokens are connected horizontally', () => {
    const connect4 = new Connect4()

    connect4.selectColumn(1, 1)
    connect4.selectColumn(2, 1)
    connect4.selectColumn(3, 1)
    connect4.selectColumn(4, 1)

    expect(connect4.board).toEqual([
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      ['X', 'X', 'X', 'X', ' ', ' ']
    ])
    expect(connect4.inProgress).toEqual(false)
  })

  test('horizontal win, one over', () => {
    const connect4 = new Connect4()

    connect4.selectColumn(2, 1)
    connect4.selectColumn(3, 1)
    connect4.selectColumn(4, 1)
    connect4.selectColumn(5, 1)

    expect(connect4.board).toEqual([
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', 'X', 'X', 'X', 'X', ' ']
    ])
    expect(connect4.inProgress).toEqual(false)
  })

  test('no horizontal win, gap in the row', () => {
    const connect4 = new Connect4()

    connect4.selectColumn(2, 1)
    connect4.selectColumn(4, 1)
    connect4.selectColumn(5, 1)
    connect4.selectColumn(6, 1)

    expect(connect4.board).toEqual([
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', ' ', ' ', ' '],
      [' ', 'X', ' ', 'X', 'X', 'X']
    ])
    expect(connect4.inProgress).toEqual(true)
  })
})
