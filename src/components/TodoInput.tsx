import * as React from 'react';

interface TodoInputState {
  value: string;
}

interface TodoInputProps {
  addTask: (content: string) => void;
}

export class TodoInput extends React.Component<TodoInputProps, TodoInputState> {
  constructor(props: TodoInputProps) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  public handleOnChange(inputValue: string) {
    this.setState({
      value: inputValue
    });
  }

  public handleOnClick() {
    this.props.addTask(this.state.value);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.handleOnChange(e.target.value)}
        />
        <button onClick={this.handleOnClick}>add</button>
      </div>
    );
  }
}
