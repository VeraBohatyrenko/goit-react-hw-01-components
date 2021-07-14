import React from 'react';
import PropTypes from 'prop-types';
import sItem from './FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => (
  <>
    <span className={sItem.span}>{isOnline}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className={sItem.name}>{name}</p>
  </>
);

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendListItem;
