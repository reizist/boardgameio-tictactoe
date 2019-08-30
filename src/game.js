import { Game } from 'boardgame.io/core';

function IsVictory(cells) {
  let lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let line of lines) {
    if (cells[line[0]] !== null && cells[line[0]] === cells[line[1]] && cells[line[1]] === cells[line[2]]) {
      return true;
    }
  }
}

function IsDraw(cells) {
  return cells.filter(c => c === null).length  == 0;
}

export const TicTacToe = Game({
  setup: () => ({ cells: Array(9).fill(null)}),

  moves: {
    clickCell(G, ctx, id) {
      if (G.cells[id] == null) {
        G.cells[id] = ctx.currentPlayer;
      }
    },
  },

  flow: {
    movesPerTurn: 1,
    endGameIf: (G, ctx) => {
      if (IsVictory(G.cells)) {
        return { winner: ctx.currentPlayer };
      }

      if (IsDraw(G.cells)) {
        return { draw: true };
      }
    },
  },
});
