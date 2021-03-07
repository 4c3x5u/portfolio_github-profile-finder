import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import reposAPI from '../../API/reposAPI';
import Subheader from '../Shared/Subheader/Subheader';
import Searching from '../Shared/Searching/Searching';
import ReposFound from './ReposFound';
import ReposNotFound from './ReposNotFound';

const Repos = () => {
  const { login } = useParams();
  const [searching, setSearching] = useState(true);
  const [found, setFound] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(
    () => reposAPI.search(login, setSearching, setFound, setRepos),
    [],
  );

  const reposHeader = () => (<Subheader title="Repos" />);

  const reposContent = () => {
    if (searching) { return <Searching />; }
    if (found) { return <ReposFound repos={repos} />; }
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
