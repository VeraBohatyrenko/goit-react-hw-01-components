import React from 'react';
import PropTypes from 'prop-types';
import sItem from './FriendListItem.module.css';

const FriendListItem = ({ id, isOnline, avatar, name }) => (
  <li key={id} className={isOnline ? sItem.item__success : sItem.item__error}>
    <span className={sItem.span}>{isOnline}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className={sItem.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
