import styled, { keyframes } from 'styled-components'

// @import url('https://fonts.googleapis.com/css?family=Slabo+27px&display=swap');
// *, *:after, *:before {
//   box-sizing: border-box;
// }

// body {
//   background: #000;
//   color: #fff;
//   padding: 0;
//   margin: 0;
//   font-family: 'Slabo 27px', serif;
//   display: flex;
//   height: 100vh;
//   justify-content: center;
//   align-items: center;
// }

const eat = keyframes`
  0% {
    clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
  }
  25% {
    clip-path: polygon(100% 60%, 44% 48%, 100% 40%);
  }
  50% {
    clip-path: polygon(100% 50%, 44% 48%, 100% 50%);
  }
  75% {
   clip-path: polygon(100% 59%, 44% 48%, 100% 35%);
  }
  100% {
   clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
  }
`

export const Pacman = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #F2D648;
  position: relative;
  margin-top: 20px;
`

export const Eye = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 20px;
  right: 40px;
  background: #333333;
`

export const Mouth = styled.div`
  background: white;
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(100% 74%, 44% 48%, 100% 21%);
  animation-name: ${eat};
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
`
