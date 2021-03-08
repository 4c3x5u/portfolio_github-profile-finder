import React from 'react';
import { useParams } from 'react-router-dom';
import followersAPI from '../../API/followersAPI';
import Section from '../Shared/Section';
import List from '../Shared/List/List';
import Item from '../Shared/Item/Item';

const Followers = () => (
  <Section
    hasFooter
    title="Followers"
    api={followersAPI}
    href={`https://www.github.com/${useParams().login}?tab=followers`}
    viewList={(followers) => (
      <List
        name="Followers"
        items={followers}
        viewItem={(follower) => <Item section="Followers" item={follower} />}
      />
    )}
  />
);

export default Followers;
