import React, {Component} from 'react';

export default class Statistic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  increaseGood = () => {
    this.setState({
        good: 3,
      }
      );
  };
  increaseNeutral = () => {
    this.setState({
      neutral: 2,
      }
    );
  };
  increaseBad = () => {
    this.setState({
      bad: 2,
      }
    );
  };
  render() {
    return (
      <div>
       <h1> Please leave feedback</h1>
        <button type='button' onClick={this.increaseGood}>Good</button>
        <button type='button' onClick={this.increaseNeutral}>Neutral</button>
        <button type='button' onClick={this.increaseBad}>Bad</button>
        <h2>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad:{this.state.bad}</span>
      </div>
    )
  }
}

