import * as React from 'react';

interface TodoItemProps {
  content: string;
}

export const TodoItem: React.StatelessComponent<TodoItemProps> = ({
  content
}) => {
  return <li>{content}</li>;
};
