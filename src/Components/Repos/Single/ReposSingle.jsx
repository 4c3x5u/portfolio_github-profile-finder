import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../Shared/Section/Section';
import ReposSingleBody from './ReposSingleBody';
import getReposSingle from '../../../API/repos/getReposSingle';

const ReposSingle = () => {
  const { login } = useParams();
  return (
    <Section
      name={`@${login}`}
      href={`https://www.github.com/${login}`}
      get={getReposSingle}
      view={(user) => <ReposSingleBody user={user} />}
      hasFooter={false}
    />
  );
};

export default ReposSingle;
