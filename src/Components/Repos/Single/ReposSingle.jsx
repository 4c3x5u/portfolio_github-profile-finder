import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../Shared/Section/Section';
import ReposSingleBody from './Body/ReposSingleBody';
import getReposSingle from '../../../API/repos/getReposSingle';

const ReposSingle = () => {
  const { login, name } = useParams();
  return (
    <Section
      name={`Repos / ${name}`}
      single={name}
      get={getReposSingle}
      href={`https://www.github.com/${login}/${name}`}
      view={(repo) => <ReposSingleBody repo={repo} />}
      hasFooter
    />
  );
};

export default ReposSingle;
