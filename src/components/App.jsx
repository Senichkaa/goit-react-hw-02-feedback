import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <h2>Please leave your feedback</h2>
        <button type="button">good</button>
        <button type="button">neutral</button>
        <button type="button">bad</button>
        <h2>Statistics</h2>
        <p>Good: </p>
        <p>Neutral: </p>
        <p>Bad: </p>
        <p>Total Feedbacks: </p>
        <p>Positive percentage: </p>
      </div>
    );
  }
}
