import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  public handleOnChange(e: React.SyntheticEvent<EventTarget>) {
    const target = e.target as HTMLInputElement;
    this.setState({
      value: target.value
    });
  }

  public handleOnClick() {
    this.props.addTask(this.state.value);
  }

  render() {
    return (
      <div>
        <TextField value={this.state.value} onChange={this.handleOnChange} />
        <RaisedButton
          label="add"
          primary={true}
          onClick={this.handleOnClick}
          disabled={this.state.value === ''}
        />
      </div>
    );
  }
}
