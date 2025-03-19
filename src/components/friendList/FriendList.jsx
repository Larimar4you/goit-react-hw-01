import FriendListItem from './FriendListItem/FriendListItem';
import styles from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <div className={styles.friendContainer}>
      <ul className={styles.friendsList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li className={styles.friendsListItem} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
