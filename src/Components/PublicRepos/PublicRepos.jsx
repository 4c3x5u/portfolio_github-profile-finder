import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getReposForUser, handleReposFound, handleReposNotFound } from '../../API/ReposAPI';
import PublicReposSuccess from './PublicReposSuccess';
// import PublicReposFailure from './PublicReposFailure';

const PublicRepos = () => {
  const { id } = useParams();
  const [repos, setRepos] = useState([]);
  const [reposFound, setReposFound] = useState(false);

  useEffect(() => (
    getReposForUser(
      id,
      handleReposFound(setRepos, setReposFound),
      handleReposNotFound(setRepos, setReposFound),
    )
  ), []);

  const view = () => (
    reposFound ? (
      <PublicReposSuccess repos={repos} />
    ) : (
      <h1>UserNotFound</h1>
    )
  );

  return view();
};

PublicRepos.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PublicRepos;
