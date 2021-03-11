import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section/Section';
import SectionList from '../Shared/Section/List/SectionList';
import SectionItem from '../Shared/Section/Item/SectionItem';
import getFollowerList from '../../API/followers/getFollowerList';

const FollowerList = () => (
  <Section
    hasFooter
    name="Followers"
    get={getFollowerList}
    href={`https://www.github.com/${useParams().login}?tab=followers`}
    view={(followers) => (
      <SectionList
        items={followers}
        view={(follower) => <SectionItem item={follower} />}
      />
    )}
  />
);

export default FollowerList;
