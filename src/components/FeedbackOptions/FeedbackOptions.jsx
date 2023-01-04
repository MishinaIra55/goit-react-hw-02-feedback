import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ( {options, onLeaveFeedback} ) => {
  const buttonsNames = (Object.keys(options));
  return(
    <div>
      {buttonsNames.map(buttonName => {
        return(
          <button key={buttonName} type='button' onClick={()=> onLeaveFeedback(buttonName)}>{buttonName}</button>
        )
      })
      }
    </div>
  )
}



export default FeedbackOptions;

FeedbackOptions.protypes = {
  options:PropTypes.object,
  onLeaveFeedback:PropTypes.func,

}
