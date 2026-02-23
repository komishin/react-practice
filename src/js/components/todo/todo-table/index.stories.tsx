import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { fn } from 'storybook/test'
import { TodoTable } from './index'

const meta = {
  title: 'Components/TodoTable',
  component: TodoTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    todoList: [
      {
        id: '12345',
        task: '掃除',
        person: '山田太郎',
        deadline: '2026-02-20',
      },
      {
        id: '4567',
        task: '洗濯',
        person: '田中太郎',
        deadline: '2026-02-23',
      },
      {
        id: '7890',
        task: '買い物',
        person: '浅野太郎',
        deadline: '2026-02-25',
      },
    ],
    deleteTodo: fn(),
  },
} satisfies Meta<typeof TodoTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
