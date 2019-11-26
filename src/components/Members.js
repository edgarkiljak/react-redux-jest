import React from 'react';
import PropTypes from 'prop-types';

export default function Members({
  avatar,
  firstName,
  lastName,
  email,
  showEmail
}) {
  const membersFullName = `${firstName} ${lastName}`;
  const alt = `${membersFullName}-profile-picture`;
  return (
    <div className="member">
      <div className="member-avatar">
        <img src={avatar} alt={alt}></img>
      </div>
      <div className="member-full-name">{membersFullName}</div>
      <div className="member-email">{showEmail && email}</div>
    </div>
  );
}

Members.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string
};
