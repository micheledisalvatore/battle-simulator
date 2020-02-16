import styled, { keyframes } from 'styled-components'

export const H1 = styled.h1`
  text-align: center;
`

export const GameField = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
`

export const PlayerSide = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 0.5;
  align-items: center;
`

export const Dices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`

export const BattleField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 2;
  position: relative;
`

export const Score = styled.h2``

export const Attack = styled.button`
  padding: 0.5rem;
  background: white;
  border: 1px solid #ccc;
  font-size: 1rem;
`

const increaseFont = keyframes`
  0% {
    font-size: 1vw;
  }
  100% {
    font-size: 5vw;
  }
`

export const GameOver = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  background: white;
  transform: translate(-50%, -50%);
  font-size: 5vw;
  color: ${({ winner }) => winner ? 'green' : 'red'};
  animation: ${increaseFont} 2s cubic-bezier(0.68, -0.55, 0.27, 1.55);
`