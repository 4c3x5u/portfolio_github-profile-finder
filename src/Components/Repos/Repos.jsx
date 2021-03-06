import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import reposAPI from '../../API/reposAPI';
import SubpageHeader from '../Shared/SubpageHeader';
import Loading from '../Shared/Loading/Loading';
import ReposFound from './ReposFound';
import ReposNotFound from './ReposNotFound';

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
    if (loading) { return <Loading />; }
    if (reposFound) { return <ReposFound repos={repos} />; }
    return <ReposNotFound />;
  };

  return (
    <div className="Repos">
      {reposHeader()}
      {reposContent()}
    </div>
  );
};

export default Repos;
