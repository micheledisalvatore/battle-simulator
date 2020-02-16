import { assoc, assocPath } from 'ramda'

const generateDiceValue = () => Math.round(Math.random() * 100) % 6 + 1

export const initialState = {
  player: {
    score: 100,
    lastAttack: {
      dice1: generateDiceValue(),
      dice2: generateDiceValue(),
      score: 0,
      winner: false,
    },
  },
  monster: {
    score: 100,
    lastAttack: {
      dice1: generateDiceValue(),
      dice2: generateDiceValue(),
      score: 0,
      winner: false,
    },
  },
  attackInProgress: false,
  status: 'end',
}

export const battleReducer = (state, action) => {
  let newState = state
  if(action.type === 'completeAttack') {
    const dice1 = generateDiceValue()
    const dice2 = generateDiceValue()
    const dice3 = generateDiceValue()
    const dice4 = generateDiceValue()
    const playerResult = dice1 + dice2
    const monsterResult = dice3 + dice4
    newState = assoc('attackInProgress', false, newState)
    newState = assoc('status', 'in-progress', newState)

    newState = assocPath(['player', 'lastAttack', 'dice1'], dice1, newState)
    newState = assocPath(['player', 'lastAttack', 'dice2'], dice2, newState)
    newState = assocPath(['player', 'lastAttack', 'score'], 0, newState)
    newState = assocPath(['player', 'lastAttack', 'winner'], false, newState)

    newState = assocPath(['monster', 'lastAttack', 'dice1'], dice3, newState)
    newState = assocPath(['monster', 'lastAttack', 'dice2'], dice4, newState)
    newState = assocPath(['monster', 'lastAttack', 'score'], 0, newState)
    newState = assocPath(['monster', 'lastAttack', 'winner'], false, newState)

    if (playerResult > monsterResult) {
      const attachScore = playerResult - monsterResult
      const newScore = newState.monster.score - attachScore
      newState = assocPath(['monster', 'score'], newScore, newState)
      newState = assocPath(['player', 'lastAttack', 'winner'], true, newState)
      newState = assocPath(['monster', 'lastAttack', 'score'], attachScore, newState)
    } else {
      const attachScore = monsterResult - playerResult
      const newScore = newState.player.score - attachScore
      newState = assocPath(['player', 'score'], newScore, newState)
      newState = assocPath(['monster', 'lastAttack', 'winner'], true, newState)
      newState = assocPath(['player', 'lastAttack', 'score'], attachScore, newState)
    }

    if (newState.player.score < 1 || newState.monster.score < 1) {
      newState = assoc('status', 'over', newState)
    }

    return newState;
  } else if (action.type === 'startAttack') {
    return assoc('attackInProgress', true, state)
  }
}