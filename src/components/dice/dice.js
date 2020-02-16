import React from 'react'

import { Rolling, Fixed } from './dice.styles'

export const Dice = ({ final, isInProgress }) => isInProgress ? <Rolling /> : <Fixed final={final} />