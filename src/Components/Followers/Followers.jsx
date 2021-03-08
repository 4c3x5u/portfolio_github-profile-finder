import React from 'react';
import { useParams } from 'react-router-dom';
import followersAPI from '../../API/followersAPI';
import Section from '../Shared/Section';
import List from '../Shared/List';
import Item from '../Shared/Item';

const Followers = () => (
  <Section
    hasFooter
    name="Followers"
    api={followersAPI}
    href={`https://www.github.com/${useParams().login}?tab=followers`}
    view={(followers) => (
      <List
        name="Followers"
        items={followers}
        view={(follower) => <Item section="Followers" item={follower} />}
      />
    )}
  />
);

export default Followers;
