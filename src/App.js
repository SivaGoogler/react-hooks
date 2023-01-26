import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      theme: 'blue',
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count, theme } = this.state;
    return (
      <>
        <button onClick={this.incrementCounter}>Click</button>
        <span>{` count: ${count} theme: ${theme} `}</span>
        <button onClick={this.incrementCounter}>Click</button>
      </>
    );
  }
}
