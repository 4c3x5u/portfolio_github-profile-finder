import React from 'react';
import { useParams } from 'react-router-dom';
import getGistList from '../../API/gists/getGistList';
import Section from '../Shared/Section/Section';
import SectionList from '../Shared/Section/List/SectionList';
import SectionItem from '../Shared/Section/Item/SectionItem';

const GistList = () => (
  <Section
    name="Gists"
    href={`https://gist.github.com/${useParams().login}`}
    get={getGistList}
    view={(gists) => (
      <SectionList
        items={gists}
        view={(gist) => <SectionItem newTabOnClick item={gist} />}
      />
    )}
    hasHeader
  />
);

export default GistList;
