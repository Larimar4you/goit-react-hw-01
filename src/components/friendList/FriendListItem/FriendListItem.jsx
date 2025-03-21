import React from 'react';
import styles from './FriendListItem.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
      <div>
        <p className={styles.name}>{name}</p>
        <p
          className={`${styles.status} ${
            isOnline ? styles.online : styles.offline
          }`}
        >
          {isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
}

export default FriendListItem;
