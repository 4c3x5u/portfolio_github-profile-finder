import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../Shared/Section/Section';
import RepoBody from './Body/RepoBody';
import RepoContent from './Content/RepoContent';
import getRepo from '../../../API/repos/getRepo';

const Repo = () => {
  const { login, name } = useParams();
  return (
    <>
      <Section
        name="Repos"
        single={name}
        get={getRepo}
        href={`https://www.github.com/${login}/${name}`}
        view={(repo) => <RepoBody repo={repo} />}
      />
      <RepoContent />
    </>
  );
};

export default Repo;
