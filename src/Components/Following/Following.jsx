import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section';
import followingAPI from '../../API/followingAPI';
import FollowingList from './FollowingList';

const Following = () => (
  <Section
    title="Following"
    href={`https://www.github.com/${useParams().login}?tab=following`}
    api={followingAPI}
    renderFound={(following) => <FollowingList following={following} />}
    hasFooter
  />
);

export default Following;
