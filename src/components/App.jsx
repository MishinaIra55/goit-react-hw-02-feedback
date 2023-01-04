import Statistics from './Statistic/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

import React, { Component } from 'react';
import styles from './Statistic/Statistic.module.css';

export  class App extends Component {


  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
//метод который обновляет состояние
//   increaseGood = () => {
//     this.setState( prevState => {
//       return {
//         good: prevState.good + 1,
//       }
//     });
//   };
//   increaseNeutral = () => {
//     this.setState(prevState => {
//       return {
//         neutral: prevState.neutral + 1,
//       }
//     });
//   };
//   increaseBad = () => {
//     this.setState(prevState => {
//       return {
//         bad: prevState.bad + 1,
//       }
//     })
//   };
  onLeaveFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,

      }
    })
  }

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;

    return total;

  }
  countPositiveFeedbackPercentage = () => {
    if(this.state.good === 0) {
      return 0;
    }

    return Math.ceil(Number((this.state.good * 100) / this.countTotalFeedback()));
  }

  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const totalPositive = this.countPositiveFeedbackPercentage();



    return (
      <div>
        <h1 className={styles.title}> Please leave feedback</h1>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.onLeaveFeedback}/>
        <h2 className={styles.title}>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          totalPositive={totalPositive}
          />

      </div>
    )
  }
}
