import Profile from './components/Profile/Profile';
import userData from './components/profile/userData.json';

import FriendList from './components/friendList/FriendList';
import friends from './components/friendList/friends.json';

import TransactionHistory from './components/transactionHistory/TransactionHistory';
import transactions from './components/transactionHistory/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        userName={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
