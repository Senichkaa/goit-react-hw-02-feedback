import React from 'react';
import { Sections, Header } from './App.styled';
// import PropTypes from 'prop-types';
export const Section = ({ title, children }) => {
  return (
    <Sections>
      <Header>{title}</Header>
      {children}
    </Sections>
  );
};

// Section.propTypes = {
//   title: PropTypes.string,
// };
