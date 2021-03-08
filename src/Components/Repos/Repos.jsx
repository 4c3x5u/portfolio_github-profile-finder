import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section';
import reposAPI from '../../API/reposAPI';
import ReposFound from './ReposFound';

const Repos = () => (
  <Section
    title="Repos"
    href={`https://www.github.com/${useParams().login}?tab=repositories`}
    api={reposAPI}
    renderFound={(repos) => <ReposFound repos={repos} />}
    hasFooter
  />
);

export default Repos;
