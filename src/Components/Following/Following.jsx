import React from 'react';
import { useParams } from 'react-router-dom';
import followingAPI from '../../API/followingAPI';
import Section from '../Shared/Section';
import List from '../Shared/List/List';
import Item from '../Shared/Item/Item';

const Following = () => (
  <Section
    hasFooter
    title="Following"
    href={`https://www.github.com/${useParams().login}?tab=following`}
    api={followingAPI}
    viewList={(following) => (
      <List
        name="Following"
        items={following}
        viewItem={(user) => <Item section="Following" item={user} />}
      />
    )}
  />
);

export default Following;
