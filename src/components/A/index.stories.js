import React from 'react'
import { storiesOf } from '@storybook/react'

import A from './'

const stories = storiesOf('A', module)

stories.add('Normal', () => {
  const story = <A />
  return story
})