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

import Input from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    type: { control: 'text' },
    required: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Primary: Story = {
  args: {
    name: 'name',
    label: 'Label',
  },
}
