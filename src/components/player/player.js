import React from 'react'
import { Pacman, Eye, Mouth } from './player.styles'

export const Player = ({ lost }) => (
  <Pacman lost={lost}>
    <Eye />
    <Mouth />
  </Pacman>
)