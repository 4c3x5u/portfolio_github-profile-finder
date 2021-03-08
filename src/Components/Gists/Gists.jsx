import React from 'react';
import { useParams } from 'react-router-dom';
import gistsAPI from '../../API/gistsAPI';
import Section from '../Shared/Section';
import List from '../Shared/List/List';
import Item from '../Shared/Item/Item';

const Gists = () => (
  <Section
    hasFooter
    title="Gists"
    href={`https://gist.github.com/${useParams().login}`}
    api={gistsAPI}
    viewList={(gists) => (
      <List
        name="Gists"
        items={gists}
        viewItem={(gist) => <Item newTabOnClick section="Gists" item={gist} />}
      />
    )}
  />
);

export default Gists;
