import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import reposAPI from '../../API/reposAPI';
import ReposSuccess from './ReposSuccess';
// import ReposFailure from './ReposFailure';

const Repos = () => {
  const { login } = useParams();
  const [repos, setRepos] = useState([]);
  const [reposFound, setReposFound] = useState(false);
  useEffect(() => reposAPI.get(login, setRepos, setReposFound), []);
  return (
    reposFound
      ? <ReposSuccess repos={repos} />
      : <h1>User not found.</h1> // TODO: Replace this with <PublicReposFailure />
  );
};

export default Repos;
