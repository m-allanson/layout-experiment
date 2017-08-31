import React from 'react'
import { storiesOf } from '@storybook/react'

import B from './'

const stories = storiesOf('B', module)

stories.add('Normal', () => {
  const story = <B />
  return story
})