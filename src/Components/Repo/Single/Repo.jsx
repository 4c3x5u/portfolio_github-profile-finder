import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../Shared/Section/Section';
import ReposSingleBody from './Body/RepoBody';
import getRepo from '../../../API/repos/getRepo';

const Repo = () => {
  const { login, name } = useParams();
  return (
    <Section
      name="Repos"
      single={name}
      get={getRepo}
      href={`https://www.github.com/${login}/${name}`}
      view={(repo) => <ReposSingleBody repo={repo} />}
      hasFooter
    />
  );
};

export default Repo;
