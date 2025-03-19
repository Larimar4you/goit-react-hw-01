import FriendListItem from './FriendListItem/FriendListItem';
import styles from './FriendList.module.css'; // <--- тут мы импортируем как объект

function FriendList({ friends }) {
  return (
    <div className={styles.friendContainer}>
      <ul className={styles.friendsList}>
        {friends.map(friend => (
          <li className={styles.friendsListItem} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
