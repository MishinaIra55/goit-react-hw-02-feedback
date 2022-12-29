import React, {Component} from 'react';


import styles from './Statistic.module.css';

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
       <h1 className={styles.title}> Please leave feedback</h1>
        <button type='button' className={styles.good} onClick={this.increaseGood}>Good</button>
        <button type='button' onClick={this.increaseNeutral}>Neutral</button>
        <button type='button' onClick={this.increaseBad}>Bad</button>
        <h2 className={styles.title}>Statistics</h2>
        <span>Good: {this.state.good}</span>
        <span>Neutral: {this.state.neutral}</span>
        <span>Bad:{this.state.bad}</span>
      </div>
    )
  }
}
