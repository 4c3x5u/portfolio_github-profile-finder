import React from 'react';
import { useParams } from 'react-router-dom';
import reposAPI from '../../API/reposAPI';
import Section from '../Shared/Section';
import List from '../Shared/List/List';
import Item from '../Shared/Item/Item';

const Repos = () => (
  <Section
    title="Repos"
    href={`https://www.github.com/${useParams().login}?tab=repositories`}
    api={reposAPI}
    viewList={(repos) => (
      <List
        name="Repos"
        items={repos}
        viewItem={(repo) => <Item newTabOnClick section="Repos" item={repo} />}
      />
    )}
    hasFooter
  />
);

export default Repos;
