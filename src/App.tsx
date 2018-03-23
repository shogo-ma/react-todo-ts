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

    this.addTask = this.addTask.bind(this);
  }

  public addTask(content: string) {
    const todos = this.state.todos.slice();
    todos.push({ id: todos.length + 1, content: 'aiueo' });

    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <TodoInput addTask={this.addTask} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
