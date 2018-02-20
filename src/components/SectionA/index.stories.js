import React from 'react'
import { storiesOf } from '@storybook/react'

import SectionA from './'

const stories = storiesOf('SectionA', module)

stories.add('Normal', () => {
  const story = <SectionA />
  return story
})