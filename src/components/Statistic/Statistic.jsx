import React, {Component} from 'react';

export default class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  render() {
    return (
      <div>
       <h1> Please leave feedback</h1>
        <button type='button'>Good</button>
        <button type='button'>Neutral</button>
        <button type='button'>Bad</button>
        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad:{this.state.bad}</span>
      </div>
    )
  }
}

