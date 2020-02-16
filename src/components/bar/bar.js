import React from 'react'

import { Container, Main, Content, Score } from './bar.styles'

export const Bar = ({ last, level }) => (
  <Container>
    <Score>{last > 0 && `-${last}`}</Score>
    <Main><Content level={level > 0 ? level : 0} /></Main>
    <Score>{level > 0 ? level : 0}</Score>
  </Container>
)