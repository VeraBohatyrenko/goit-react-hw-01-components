import React from 'react';
// import ReactDOM from 'react-dom';
import Profile from '../Profile/Profile';
import ProfileDate from '../Profile/ProfileDate.json';
import Statistics from '../Statistics/Statistics';
import statisticalDate from '../Statistics/statisticDate.json';

const App = () => (
  <div>
    <Profile user={ProfileDate} />;
    <Statistics title="Upload stats" stats={statisticalDate} />;
  </div>
);

export default App;
