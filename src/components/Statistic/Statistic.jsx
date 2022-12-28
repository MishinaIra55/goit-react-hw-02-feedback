import React, {Component} from 'react';

export default class Statistic extends Component {
  render() {
    return (
      <div>
       <h1> Please leave feedback</h1>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
        <h2>Statistics</h2>
        <span>Good</span>
        <span>Neutral</span>
        <span>Bad</span>
      </div>
    )
  }
}

