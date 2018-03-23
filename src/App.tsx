import * as React from 'react';
import { TodoList } from './components/TodoList';
import { TodoInput } from './components/TodoInput';

interface AppState {
  todos: { id: number; content: string }[];
}

class App extends React.Component<{}, AppState> {
  constructor() {
    super({});

    this.state = {
      todos: [{ id: 1, content: 'test1' }, { id: 1, content: 'test2' }]
    };
  }
  render() {
    return (
      <div>
        <TodoInput />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
