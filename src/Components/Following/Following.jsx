import React from 'react';
import { useParams } from 'react-router-dom';
import followingAPI from '../../API/followingAPI';
import Section from '../Shared/Section';
import List from '../Shared/List';
import Item from '../Shared/Item';

const Following = () => (
  <Section
    hasFooter
    name="Following"
    href={`https://www.github.com/${useParams().login}?tab=following`}
    api={followingAPI}
    view={(following) => (
      <List
        name="Following"
        items={following}
        view={(user) => <Item section="Following" item={user} />}
      />
    )}
  />
);

export default Following;
