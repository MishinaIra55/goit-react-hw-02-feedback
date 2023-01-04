
import React, { Component } from 'react';

import Statistics from './Statistic/Statistic';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification';


export  class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (name) => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      }
    })
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    if(this.state.good === 0) {
      return 0;
    }

    return Math.ceil(Number((this.state.good * 100) / this.countTotalFeedback()));
  };




  render() {
    const { good, neutral, bad } = this.state;

    const total = this.countTotalFeedback();
    const totalPositive = this.countPositiveFeedbackPercentage();

    const renderNotification = this.countTotalFeedback();

    return (
      <div>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>


        <Section title='Statistics'>

          {renderNotification
            ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            totalPositive={totalPositive}
            />
            : <Notification message="There is no feedback"/>
          }

          {/*<Notification message="There is no feedback"/>*/}
        {/*<Statistics*/}
        {/*  good={good}*/}
        {/*  neutral={neutral}*/}
        {/*  bad={bad}*/}
        {/*  total={total}*/}
        {/*  totalPositive={totalPositive}*/}
        {/*  />*/}
          </Section>
      </div>
    )
  }
}
