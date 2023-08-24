import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 7,
    neutral: 5,
    bad: 10,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = event => {
    const option = event.target.value;
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const keys = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            onLeaveFeedback={this.countTotalFeedback()}
            positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
