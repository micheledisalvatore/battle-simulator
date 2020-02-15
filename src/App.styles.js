import styled from 'styled-components'

export const H1 = styled.h1`
  text-align: center;
`

export const GameField = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PlayerSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 0.5;
`

export const Dices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const BattleField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 2;
`

export const Score = styled.h2``

export const Attack = styled.button`
  padding: 0.5rem;
  background: white;
  border: 1px solid #ccc;
  font-size: 1rem;
`
