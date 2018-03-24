import * as React from 'react';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: { id: number; content: string }[];
}

const listStyle = {
  margin: '0 auto'
};

export const TodoList: React.StatelessComponent<TodoListProps> = ({
  todos
}) => {
  return (
    <div>
      <ul style={listStyle}>
        {todos.map(todo => <TodoItem key={todo.id} content={todo.content} />)}
      </ul>
    </div>
  );
};
