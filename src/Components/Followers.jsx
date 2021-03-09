import React from 'react';
import { useParams } from 'react-router-dom';
import followersAPI from '../API/followersAPI';
import Section from './Shared/Section/Section';
import SectionList from './Shared/Section/List/SectionList';
import SectionItem from './Shared/Section/Item/SectionItem';

const Followers = () => (
  <Section
    hasFooter
    name="Followers"
    get={followersAPI.search}
    href={`https://www.github.com/${useParams().login}?tab=followers`}
    view={(followers) => (
      <SectionList
        items={followers}
        view={(follower) => <SectionItem item={follower} />}
      />
    )}
  />
);

export default Followers;
