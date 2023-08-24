import { Component } from 'react';
import { Section } from './Section';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = event => {
    const option = event.target.innerText;
    // console.log(option);
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  render() {
    const keys = Object.keys(this.state);
    // console.log({ keys });
    return (
      <div>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section>
          <Statistics
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            totalFeedback={this.countTotalFeedback()}
            positiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage() || 0
            }
          />
        </Section>
      </div>
    );
  }
}
