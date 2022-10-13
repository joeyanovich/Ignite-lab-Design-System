import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Loren Ipsum.'
    }
} as Meta<TextProps>

export const Default: StoryObj = {}