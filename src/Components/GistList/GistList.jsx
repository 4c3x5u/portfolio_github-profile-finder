import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section/Section';
import SectionItemList from '../Shared/Section/ItemList/SectionItemList';
import SectionItem from '../Shared/Section/ItemList/Item/SectionItem';
import { getGistList } from '../../API/gistAPI';

const GistList = () => (
  <Section
    title="Gists"
    get={getGistList(useParams().login)}
    view={(gists) => (
      <SectionItemList
        items={gists}
        view={(gist) => <SectionItem item={gist} />}
      />
    )}
  />
);

export default GistList;
