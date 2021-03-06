/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  searchUser,
  handleUserFound,
  handleUserNotFound,
} from '../../API/UserAPI';
import UserInfoSuccess from './UserInfoSuccess';
// import UserInfoFailure from './UserInfoFailure';

const UserInfo = ({
  setRepos,
  setReposFound,
  setFollowingUsers,
  setFollowingUsersFound,
}) => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [userFound, setUserFound] = useState({});

  useEffect(() => {
    console.log('EFFECT EXECUTING');
    searchUser(
      id,
      handleUserFound(setUser, setUserFound),
      handleUserNotFound(setUser, setUserFound),
    );
  }, []);

  const view = () => (
    userFound ? (
      <UserInfoSuccess
        user={user}
        setRepos={setRepos}
        setReposFound={setReposFound}
        setFollowingUsers={setFollowingUsers}
        setFollowingUsersFound={setFollowingUsersFound}
      />
    ) : (
      <h1>BABAN</h1>
    )
  );

  return view();
};

UserInfo.propTypes = {
  user: PropTypes.objectOf({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    numberOfFollowing: PropTypes.number.isRequired,
  }).isRequired,
  setRepos: PropTypes.func.isRequired,
  setReposFound: PropTypes.func.isRequired,
  setFollowingUsers: PropTypes.func.isRequired,
  setFollowingUsersFound: PropTypes.func.isRequired,
};

export default UserInfo;
