import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendListItem.module.css';

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={styles.item}>
      <span
        className={isOnline ? styles.statusOnline : styles.statusOffline}
      ></span>
      <img className={styles.avatar} src={avatar} alt="" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}.isRequired;

export default FriendListItem;
