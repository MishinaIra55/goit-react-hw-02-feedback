import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, totalPositive }) => (
  <div>
    <span>Good: {good}</span>
    <span>Neutral: {neutral}</span>
    <span>Bad: {bad}</span>
    <span>Total: {total}</span>
    <span>Positive feedback: {totalPositive}%</span>

  </div>

);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalPositive: PropTypes.number,
  total: PropTypes.number
};



