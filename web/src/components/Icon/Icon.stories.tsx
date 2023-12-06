// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  argTypes: {
    id: {
      options: [
        'calendar',
        'check',
        'chevron',
        'close',
        'eyeClosed',
        'eyeOpened',
        'logout',
        'minus',
        'plus',
        'question',
        'thumbsDown',
        'thumbsUp',
        'upload',
        'user',
      ],
    },
  },
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'black', value: '#000000' },
        { name: 'white', value: '#ffffff' },
      ],
    },
  },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Primary: Story = {
  args: {
    id: 'calendar',
    size: 24,
  },
}
