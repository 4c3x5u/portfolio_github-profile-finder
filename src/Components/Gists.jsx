import React from 'react';
import { useParams } from 'react-router-dom';
import getGistsList from '../API/gists/getGistsList';
import Section from './Shared/Section/Section';
import SectionList from './Shared/Section/List/SectionList';
import SectionItem from './Shared/Section/Item/SectionItem';

const Gists = () => (
  <Section
    hasFooter
    name="Gists"
    href={`https://gist.github.com/${useParams().login}`}
    get={getGistsList}
    view={(gists) => (
      <SectionList
        items={gists}
        view={(gist) => <SectionItem newTabOnClick item={gist} />}
      />
    )}
  />
);

export default Gists;
