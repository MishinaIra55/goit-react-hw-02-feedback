import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({increaseGood, increaseNeutral, increaseBad }) => (
  <div>
    <button type='button' onClick={increaseGood}>Good</button>
    <button type='button' onClick={increaseNeutral}>Neutral</button>
    <button type='button' onClick={increaseBad}>Bad</button>
  </div>

);
export default FeedbackOptions;

FeedbackOptions.protypes = {
  increaseGood:PropTypes.func,
  increaseNeutral:PropTypes.func,
  increaseBad:PropTypes.func,
}
