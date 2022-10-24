import { Meta, StoryObj } from '@storybook/react';
import { Headding, HeaddingProps } from './Headding';


export default {
    title: 'Components/Headding',
    component: Headding,
    args: {
        children: 'Lorem ipsum.',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeaddingProps>

export const Default: StoryObj<HeaddingProps> = {}

export const Small: StoryObj<HeaddingProps> = {
    args: {
        size: 'sm',
    }
}

export const Large: StoryObj<HeaddingProps> = {
    args: {
        size: 'lg',
    }
}

export const CustomComponent: StoryObj<HeaddingProps> = {
    args: {
        asChild: true,
        children: (
            <h1>Headding with H1</h1>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        },
    }
}