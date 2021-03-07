import React from 'react';
import reposAPI from '../../API/reposAPI';
import Section from '../Shared/Section/Section';
import ReposFound from './ReposFound';
import ReposNotFound from './ReposNotFound';

const Repos = () => (
  <Section
    title="Repos"
    api={reposAPI}
    renderFound={(repos) => <ReposFound repos={repos} />}
    renderNotFound={() => <ReposNotFound />}
    hasFooter
  />
);

export default Repos;
