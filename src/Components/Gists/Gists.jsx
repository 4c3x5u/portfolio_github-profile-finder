import React from 'react';
import { useParams } from 'react-router-dom';
import gistsAPI from '../../API/gistsAPI';
import Section from '../Shared/Section';
import List from '../Shared/List';
import Item from '../Shared/Item';

const Gists = () => (
  <Section
    hasFooter
    name="Gists"
    href={`https://gist.github.com/${useParams().login}`}
    api={gistsAPI}
    view={(gists) => (
      <List
        name="Gists"
        items={gists}
        view={(gist) => <Item newTabOnClick section="Gists" item={gist} />}
      />
    )}
  />
);

export default Gists;
