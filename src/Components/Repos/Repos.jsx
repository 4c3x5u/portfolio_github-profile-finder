import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section';
import reposAPI from '../../API/reposAPI';
import ReposList from './ReposList';

const Repos = () => (
  <Section
    title="Repos"
    href={`https://www.github.com/${useParams().login}?tab=repositories`}
    api={reposAPI}
    renderFound={(repos) => <ReposList repos={repos} />}
    hasFooter
  />
);

export default Repos;
