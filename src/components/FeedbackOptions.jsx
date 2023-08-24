import React from 'react';
import { Button, ButtonsDiv } from './App.styled';
// import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsDiv>
      {options.map(option => (
        <Button key={option} type="button" onClick={onLeaveFeedback}>
          {option}
        </Button>
      ))}
    </ButtonsDiv>
  );
};

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       good: PropTypes.number.isRequired,
//       bad: PropTypes.number.isRequired,
//       neutral: PropTypes.number.isRequired,
//     }).isRequired
//   ),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
