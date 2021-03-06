import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import reposAPI from '../../API/reposAPI';
import ReposSuccess from './ReposSuccess';
import ReposFailure from './ReposFailure';
import SubpageHeader from '../Shared/SubpageHeader';
import Spinner from '../Shared/Spinner/Spinner';

const Repos = () => {
  const { login } = useParams();
  const [loading, setLoading] = useState(true);
  const [reposFound, setReposFound] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(
    () => reposAPI.get(login, setLoading, setReposFound, setRepos),
    [],
  );

  const reposHeader = () => (<SubpageHeader subpage="Repos" />);

  const reposContent = () => {
    if (loading) { return <Spinner />; }
    if (reposFound) { return <ReposSuccess repos={repos} />; }
    return <ReposFailure />;
  };

  return (
    <div className="Repos">
      {reposHeader()}
      {reposContent()}
    </div>
  );
};

export default Repos;
