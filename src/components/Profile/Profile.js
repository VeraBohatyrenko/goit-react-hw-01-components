import React from 'react';
import PropTypes from 'prop-types';
import s from '../Profile/Profile.module.css';

const Profile = ({
  user: {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => (
  <div className={s.title}>
    <img className={s.avatar} src={avatar} alt={name} />
    <h2>{name}</h2>
    <p>@{tag}</p>
    <p>{location}</p>

    <ul className={s.list}>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
  }),
};

export default Profile;
