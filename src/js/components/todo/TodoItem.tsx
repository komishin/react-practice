import React, { memo, useContext } from 'react'

import { useAuth } from '../../hooks/use-auth'
import { Button, Td, Tr } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

type TodoItemProps = {
  id: string
  task: string
  person: string
  deadline: string
  deleteTodo: (id: string) => void
}

// const TodoItem: React.FC<TodoItemProps> = ({task, deadline}) => {
export const TodoItem = memo(
  ({ id, task, person, deadline, deleteTodo }: TodoItemProps) => {
    const { userName } = useAuth()

    return (
      <Tr color={userName === person ? 'red' : ''}>
        <Td>
          <Link to={`/todo/${id}`}>{id}</Link>
        </Td>
        <Td>{task}</Td>
        <Td>{person}</Td>
        <Td>{deadline}</Td>
        <Td>
          {/* filter=今の条件に合うものだけを残す（クリックして一致したidのもの以外残す） */}
          <Button onClick={() => deleteTodo(id)} colorScheme="red" size={'xs'}>
            削除
          </Button>
        </Td>
      </Tr>
    )
  }
)
