import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({
  user: {
    name,
    tag,
    location,
    avatar,
    stats: { followers, vievs, likes },
  },
}) => (
  <div>
    <img src={avatar} alt={name} />
    <h2>{name}</h2>
    <p>@{tag}</p>
    <p>{location}</p>

    <ul>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{vievs}</span>
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
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        followers: PropTypes.number.isRequired,
        vievs: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }),
};

export default Profile;
