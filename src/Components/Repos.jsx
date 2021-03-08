import React from 'react';
import { useParams } from 'react-router-dom';
import reposAPI from '../API/reposAPI';
import Section from './Shared/Section/Section';
import SectionList from './Shared/Section/List/SectionList';
import SectionItem from './Shared/Section/Item/SectionItem';

const Repos = () => (
  <Section
    name="Repos"
    href={`https://www.github.com/${useParams().login}?tab=repositories`}
    api={reposAPI}
    view={(repos) => (
      <SectionList
        items={repos}
        view={(repo) => <SectionItem newTabOnClick item={repo} />}
      />
    )}
    hasFooter
  />
);

export default Repos;
