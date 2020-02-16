import React, { useReducer, useEffect } from 'react';

import Dice from './components/dice'
import Bar from './components/bar'
import Player from './components/player'
import Monster from './components/monster'

import { H1, GameField, PlayerSide, Dices, BattleField, Score, Attack, GameOver } from './App.styles'
import { initialState, battleReducer } from './store/battle-store';

const App = () => {
  const [state, dispatch] = useReducer(battleReducer, initialState)
  console.log('state', state)
  const handleAttach = () => {
    if (!state.attackInProgress) {
      dispatch({ type: 'startAttack' });
    }
  }

  useEffect(() => {
    if (state.attackInProgress) {
      window.setTimeout(() => {
        dispatch({ type: 'completeAttack' });
      }, 1000)
    }
  }, [state.attackInProgress])

  return (
    <>
      <header>
        <H1>Battle simulator</H1>
      </header>
      <GameField>
        <PlayerSide>
          <Player lost={state.player.score < 1} />
          <Bar level={state.player.score} last={state.player.lastAttack.score} />
          <Dices>
            <Dice final={state.player.lastAttack.dice1} isInProgress={state.attackInProgress} />
            <Dice final={state.player.lastAttack.dice2} isInProgress={state.attackInProgress} />
          </Dices>
        </PlayerSide>
        <BattleField>
          { state.status === 'in-progress' && (
            <>
              {state.player.lastAttack.winner && state.monster.lastAttack.score > 0 && <Score>You hit for {state.monster.lastAttack.score}!</Score>}
              {state.monster.lastAttack.winner && state.player.lastAttack.score > 0 && <Score>Monster hits for {state.player.lastAttack.score}!</Score>}
              {state.monster.lastAttack.score === state.player.lastAttack.score && <Score>Tie!</Score>}
            </>
          )}
          { state.status === 'over' && (
            <GameOver winner={state.player.score > 0}>{state.player.score > 0 ? 'You win' : 'Game over'}</GameOver>
          )}
          <Attack type="button" onClick={handleAttach}>Attack</Attack>
        </BattleField>
        <PlayerSide>
          <Dices>
            <Dice final={state.monster.lastAttack.dice1} isInProgress={state.attackInProgress} />
            <Dice final={state.monster.lastAttack.dice2} isInProgress={state.attackInProgress} />
          </Dices>
          <Bar level={state.monster.score} last={state.monster.lastAttack.score} />
          <Monster lost={state.monster.score < 1} />
        </PlayerSide>
      </GameField>
    </>
  );
}

export default App;
