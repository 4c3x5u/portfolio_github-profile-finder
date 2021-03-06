import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import reposAPI from '../../API/reposAPI';
import ReposSuccess from './ReposSuccess';
import ReposFailure from './ReposFailure';

const Repos = () => {
  const { login } = useParams();
  const [repos, setRepos] = useState([]);
  const [reposFound, setReposFound] = useState(false);
  useEffect(() => reposAPI.get(login, setRepos, setReposFound), []);
  return (
    <div className="Repos">
      <div
        className="ReposHeader bg-dark text-center mb-2"
        style={{
          border: '2px solid #343a40',
          padding: '1.2rem 0 0.7rem 0',
          borderRadius: '2rem 2rem 0 0',
        }}
      >
        <h5 className="text-light">Repos</h5>
      </div>
      {reposFound
        ? <ReposSuccess repos={repos} />
        : <ReposFailure />}
    </div>
  );
};

export default Repos;
