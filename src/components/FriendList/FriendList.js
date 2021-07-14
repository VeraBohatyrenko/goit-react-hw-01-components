import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import s from './FriendList.module.css';
import sItem from './FriendListItem/FriendListItem.module.css';

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li
        key={id}
        className={isOnline ? sItem.item__success : sItem.item__error}
      >
        <FriendListItem
          id={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired,
  ),
};

export default FriendList;
