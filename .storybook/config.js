/**
 * Config file for storybook
 */

import React from 'react'
import {
  addDecorator,
  configure,
} from '@storybook/react'
import {
  setOptions,
} from '@storybook/addon-options'

setOptions({
  name: 'Test',
  url: '',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
})

const req = require.context('../src/components/', true, /stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// Wrap ALL stories in decorator
addDecorator(story => (
  <div
    style={{
      backgroundColor: '#ffffff',
    }}
  >
    {story()}
  </div>
))

configure(loadStories, module)
