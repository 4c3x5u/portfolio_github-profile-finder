import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import reposAPI from '../../API/reposAPI';
import Subheader from '../Shared/Subheader/Subheader';
import Loader from '../Shared/Loader/Loader';
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

  const reposHeader = () => (<Subheader title="Repos" />);

  const reposContent = () => {
    if (loading) { return <Loader />; }
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
