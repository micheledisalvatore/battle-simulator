import styled from 'styled-components'

export const Main = styled.div`
  height: 100%;
  background-color: #e0e0e0;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
  width: 25px;
  display: flex;
  align-items: flex-end;
`

export const Content = styled.div`
  display: block;
  width: 100%;
  margin: 3px;
  background-color: #659cef;
  border-radius: 3px;
  height: ${({ level }) => level}%;

  transition: height 500ms ease-in-out;
`
