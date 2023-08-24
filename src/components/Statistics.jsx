import React from 'react';
// import PropTypes from 'prop-types';
import { Notification } from './Notification';
import { Header, Text } from './App.styled';
export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedbackPercentage,
}) => {
  if (totalFeedback >= 1) {
    return (
      <>
        <Header>Statistics</Header>
        <Text>Good: {good}</Text>
        <Text>Neutral: {neutral}</Text>
        <Text>Bad: {bad}</Text>
        <Text>Total Feedbacks: {totalFeedback} </Text>
        <Text>Positive percentage: {positiveFeedbackPercentage}%</Text>
      </>
    );
  } else {
    return <Notification message="There is no feedback" />;
  }
};

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   totalFeedback: PropTypes.number.isRequired,
//   countPositiveFeedbackPercentage: PropTypes.number.isRequired,
// };
