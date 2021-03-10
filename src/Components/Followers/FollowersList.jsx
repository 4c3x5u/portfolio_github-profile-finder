import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section/Section';
import SectionList from '../Shared/Section/List/SectionList';
import SectionItem from '../Shared/Section/Item/SectionItem';
import getFollowersList from '../../API/followers/getFollowersList';

const FollowersList = () => (
  <Section
    hasFooter
    name="Followers"
    get={getFollowersList}
    href={`https://www.github.com/${useParams().login}?tab=followers`}
    view={(followers) => (
      <SectionList
        items={followers}
        view={(follower) => <SectionItem item={follower} />}
      />
    )}
  />
);

export default FollowersList;