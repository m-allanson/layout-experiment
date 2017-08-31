import React from 'react'
import { storiesOf } from '@storybook/react'

import C from './'

const stories = storiesOf('C', module)

stories.add('Normal', () => {
  const story = <C />
  return story
})