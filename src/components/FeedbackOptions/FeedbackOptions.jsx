import React from 'react';

const FeedbackOptions = ({increaseGood, increaseNeutral, increaseBad }) => (
  <div>
    <button type='button' onClick={increaseGood}>Good</button>
    <button type='button' onClick={increaseNeutral}>Neutral</button>
    <button type='button' onClick={increaseBad}>Bad</button>
  </div>

);
export default FeedbackOptions;

