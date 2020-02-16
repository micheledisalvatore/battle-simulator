import React from 'react'

import { Rolling, Fixed } from './dice.styles'

export const Dice = ({ final, isInProgress }) => {
  console.log('isInProgress', isInProgress)
  return isInProgress ? <Rolling /> : <Fixed final={final} />
}