import { useState} from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

function App ()  {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const countFeedback = option => {
    // const {name} =e.target;
    switch (option) {
      case 'good':
        setGood(good+1);
      case 'neutral':
        setNeutral(neutral+1);
      case 'bas' : 
        setBad(bad+1);  
        break;
        default: return;
    }
  };

  const countTotalFeedback = () => {
    return good+neutral+bad;
  };

 const countPositiveFeedbackPercentage = () => {
     return Math.round((good /countTotalFeedback()) * 100) || 0;
  };

    // const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={countFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }


export default App;