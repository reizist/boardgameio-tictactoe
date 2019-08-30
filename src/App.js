import React from 'react';
import './App.css';

import { Client } from 'boardgame.io/react';
import { TicTacToe } from './game';
import { TicTacToeBoard } from './board';
import { AI } from 'boardgame.io/ai';

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
  multiplayer: { server: 'localhost:8000' },
  ai: AI({
    enumerate: (G, ctx) => {
      let moves = [];
      for (let i = 0; i < 9; i++) {
        if (G.cells[i] === null) {
          moves.push({ move: 'clickCell', args: [i]});
        }
      }
      return moves;
    },
  }),
});

const App = () => (
  <div>
    <TicTacToeClient playerID="0" />
  </div>
)

export default App;
