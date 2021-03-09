import React from 'react';
import { useParams } from 'react-router-dom';
import followingAPI from '../API/followingAPI';
import Section from './Shared/Section/Section';
import SectionList from './Shared/Section/List/SectionList';
import SectionItem from './Shared/Section/Item/SectionItem';

const Following = () => (
  <Section
    hasFooter
    name="Following"
    href={`https://www.github.com/${useParams().login}?tab=following`}
    get={followingAPI.search}
    view={(following) => (
      <SectionList
        items={following}
        view={(user) => <SectionItem item={user} />}
      />
    )}
  />
);

export default Following;
