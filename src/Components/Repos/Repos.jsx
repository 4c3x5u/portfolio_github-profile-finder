import React from 'react';
import { useParams } from 'react-router-dom';
import reposAPI from '../../API/reposAPI';
import Section from '../Shared/Section';
import List from '../Shared/List';
import Item from '../Shared/Item';

const Repos = () => (
  <Section
    name="Repos"
    href={`https://www.github.com/${useParams().login}?tab=repositories`}
    api={reposAPI}
    view={(repos) => (
      <List
        name="Repos"
        items={repos}
        view={(repo) => <Item newTabOnClick section="Repos" item={repo} />}
      />
    )}
    hasFooter
  />
);

export default Repos;
