import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={s.friendList}>
    {friends.map(({ id, avatar, name, isOnline }) => (
      <FriendListItem id={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendList.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendList;
