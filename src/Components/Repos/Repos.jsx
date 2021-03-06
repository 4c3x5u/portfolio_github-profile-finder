import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import reposAPI from '../../API/reposAPI';
import ReposSuccess from './ReposSuccess';
import ReposFailure from './ReposFailure';
import SubpageHeader from '../Shared/SubpageHeader';

const Repos = () => {
  const { login } = useParams();
  const [repos, setRepos] = useState([]);
  const [reposFound, setReposFound] = useState(false);
  useEffect(() => reposAPI.get(login, setRepos, setReposFound), []);
  return (
    <div className="Repos">
      <SubpageHeader subpage="Repos" />
      {reposFound
        ? <ReposSuccess repos={repos} />
        : <ReposFailure />}
    </div>
  );
};

export default Repos;
