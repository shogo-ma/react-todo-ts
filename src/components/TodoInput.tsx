import * as React from 'react';

interface TodoInputState {
  value: string;
}

export class TodoInput extends React.Component<{}, TodoInputState> {
  constructor() {
    super({});
    this.state = {
      value: ''
    };
  }

  public handleOnChange(inputValue: string) {
    this.setState({
      value: inputValue
    });
  }

  public handleOnClick() {
    // not implemented
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.handleOnChange(e.target.value)}
        />
        <button onClick={e => this.handleOnClick()}>add</button>
      </div>
    );
  }
}
