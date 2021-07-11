import React from 'react';
import PropTypes from 'prop-types';
import s from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id} className={isOnline ? s.item__success : s.item__error}>
    <span className={s.span}>{isOnline}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
