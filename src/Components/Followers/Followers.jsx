import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../Shared/Section';
import followersAPI from '../../API/followersAPI';
import FollowersList from './FollowersList';

const Followers = () => (
  <Section
    title="Followers"
    api={followersAPI}
    href={`https://www.github.com/${useParams().login}?tab=followers`}
    renderFound={(followers) => <FollowersList followers={followers} />}
    hasFooter
  />
);

export default Followers;
