import styled, { css, keyframes } from 'styled-components'

const loser = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(200%);
  }
`

export const Svg = styled.svg`
  fill:${({ lost }) => lost ? 'blue' : 'red'};
  height: 100px;
  width: 100px;

  ${({ lost }) => lost && css`
    transform: translateX(200%);
    animation: ${loser} 3s;
    opacity: 0;
    transition: opacity 0s 2.5s;
  `}
`