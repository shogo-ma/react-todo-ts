import * as React from 'react';
import { TodoList } from './components/TodoList';

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
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
