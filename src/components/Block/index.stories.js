import React from 'react'
import { storiesOf } from '@storybook/react'

import Placeholder from './'

const stories = storiesOf('Placeholder', module)

stories.add('Small', () => {
  const story = <Placeholder />
  return story
})

stories.add('Fill', () => {
  const story = <Placeholder type="fill" />
  return story
})