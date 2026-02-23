import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';
import { TodoItem } from './index';
import { Table, Tbody } from '@chakra-ui/react'; // Chakra UIのTableを使うとより安全

const meta = {
  title: 'Components/TodoItem',
  component: TodoItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    id: '12345',
    task: '掃除',
    person: '山田太郎',
    deadline: '2026-02-20',
    deleteTodo: fn(),
  },
} satisfies Meta<typeof TodoItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      /* TodoItemが <tr> なので、
         それを正しく表示するために Chakra UI の Table 構造で包みます
      */
      <Table variant="simple">
        <Tbody>
          <Story />
        </Tbody>
      </Table>
    ),
  ],
};
