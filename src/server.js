const { Server, Firebase } = require('boardgame.io/server');
const TicTacToe = require('./game').TicTacToe;
const admin = require('firebase-admin');
const serviceAccount = require('../credentials/serviceAccountKey.json');
const server = Server({
  games: [TicTacToe],
  db: new Firebase({
    config: {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://tictactoe-1f098.firebaseio.com/',
    },
    engine: 'Firestore',
    adminClient: true,
  }),
});

server.run(8000);
