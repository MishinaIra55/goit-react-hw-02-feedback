import Statistics from './Statistic/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

import React, {Component} from 'react';
import styles from './Statistic/Statistic.module.css'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Feedback initialValue={0}/>
    </div>
  );
};






export  class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue
  }
//метод который обновляет состояние
  increaseGood = () => {
    this.setState( prevState => {
      return {
        good: prevState.good + 1,
      }
    });
  };
  increaseNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      }
    });
  };
  increaseBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      }
    })
  };
  render() {
    return (
      <div>
        <h1 className={styles.title}> Please leave feedback</h1>
        <FeedbackOptions
          increaseGood={this.increaseGood}
          increaseNeutral={this.increaseNeutral}
          increaseBad={this.increaseBad}/>
        <h2 className={styles.title}>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          />

      </div>
    )
  }
}
