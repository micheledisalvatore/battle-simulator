import styled, { css, keyframes } from 'styled-components'

const loser = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`

export const Svg = styled.svg`
  fill:${({ lost }) => lost ? 'blue' : 'red'};

  ${({ lost }) => lost && css`
    transform: translateX(100%);
    animation: ${loser} 3s
  `}
`