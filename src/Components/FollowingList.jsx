import React from 'react';
import { useParams } from 'react-router-dom';
import Section from './Shared/Section/Section';
import SectionItemList from './Shared/Section/ItemList/SectionItemList';
import SectionItem from './Shared/Section/ItemList/Item/SectionItem';
import { getFollowingList } from '../API/followingAPI';

const FollowingList = () => (
  <Section
    title="Following"
    get={getFollowingList(useParams().login)}
    view={(following) => (
      <SectionItemList
        items={following}
        view={(user) => <SectionItem item={user} />}
      />
    )}
  />
);

export default FollowingList;
