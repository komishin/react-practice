import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Table, Tbody } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { TodoItem } from '.'

const mockUseAuthStore = jest.fn()

jest.mock('../../stores/use-auth-store', () => ({
  useAuthStore: () => mockUseAuthStore(),
}))

describe('TodoItemのコンポーネントのテスト', () => {
  beforeEach(() => {
    mockUseAuthStore.mockReturnValue({ userName: '田中太郎' })
  })
  test('コンポーネントがレンダリングされること', () => {
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2026-02-20"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>
    )

    expect(screen.getByText('123')).toBeInTheDocument()
    expect(screen.getByText('掃除')).toBeInTheDocument()
    expect(screen.getByText('山田太郎')).toBeInTheDocument()
    expect(screen.getByText('2026-02-20')).toBeInTheDocument()

    expect(screen.getByRole('button', { name: '削除' })).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/todo/123')
  })
  test('userNameとpersonが一致しない場合、colorがredにならいこと', () => {
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2026-02-20"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>
    )
    expect(screen.getByRole('row')).not.toHaveStyle('color: rgb(255, 0, 0)')
  })
  test('userNameとpersonが一致した場合、colorがredになること', () => {
    mockUseAuthStore.mockReturnValue({ userName: '山田太郎' })
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2026-02-20"
              deleteTodo={() => {}}
            />
          </Tbody>
        </Table>
      </BrowserRouter>
    )
    expect(screen.getByRole('row')).toHaveStyle('color: rgb(255, 0, 0)')
  })
  test('削除ボタンがクリックされたときに、deleteTodoが呼ばれること', () => {
    const mockDeleteTodo = jest.fn()
    render(
      <BrowserRouter>
        <Table>
          <Tbody>
            <TodoItem
              id="123"
              task="掃除"
              person="山田太郎"
              deadline="2026-02-20"
              deleteTodo={mockDeleteTodo}
            />
          </Tbody>
        </Table>
      </BrowserRouter>
    )
    fireEvent.click(screen.getByRole('button', { name: '削除' }))
    expect(mockDeleteTodo).toHaveBeenCalledWith('123')
  })
})
