import React from 'react';

import Dice from './components/dice'
import Bar from './components/bar'
import Player from './components/player'
import Monster from './components/monster'

import { H1, GameField, PlayerSide, Dices, BattleField, Score, Attack } from './App.styles'

function App() {
  return (
    <>
      <header>
        <H1>Battle simulator</H1>
      </header>
      <GameField>
        <PlayerSide>
          <Player />
          <Bar level={57} />
          <Dices>
            <Dice final={3} />
            <Dice final={4} />
          </Dices>
        </PlayerSide>
        <BattleField>
          <Score>You hit for 6!</Score>
          <Attack type="button">Attack</Attack>
        </BattleField>
        <PlayerSide>
          <Dices>
            <Dice final={3} />
            <Dice final={4} />
          </Dices>
          <Bar level={57} />
          <Monster />
        </PlayerSide>
      </GameField>
    </>
  );
}

export default App;
