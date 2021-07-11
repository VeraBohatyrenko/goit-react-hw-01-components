import React from 'react';
// import ReactDOM from 'react-dom';
import Profile from '../Profile/Profile';
import ProfileDate from '../Profile/ProfileDate.json';
import Statistics from '../Statistics/Statistics';
import statisticalDate from '../Statistics/statisticDate.json';
import FriendList from '../FriendList/FriendList';
import FriendListDate from '../FriendList/FriendListDate.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import TransactionHistoryDate from '../TransactionHistory/TransactionHistoryDate.json';

const App = () => (
  <div>
    <Profile user={ProfileDate} />
    <Statistics title="Upload stats" stats={statisticalDate} />
    <FriendList friends={FriendListDate} />
    <TransactionHistory items={TransactionHistoryDate} />
  </div>
);

export default App;
