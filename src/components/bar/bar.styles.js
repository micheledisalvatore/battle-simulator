import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Score = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Main = styled.div`
  flex-grow: 1;
  height: calc(100% - 6px);
  background-color: #e0e0e0;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
  width: 25px;
  display: flex;
  align-items: flex-end;
  padding: 3px;
`

export const Content = styled.div`
  display: block;
  width: 100%;
  background-color: green;
  border-radius: 3px;
  height: ${({ level }) => level}%;

  transition: height 1s ease-in-out;
`
