import React from 'react';
import PropTypes from 'prop-types';
import ReposSingle from './ReposSingle';
import List from '../Shared/List/List';

const ReposFound = ({ repos }) => (
  <List
    name="Repos"
    items={repos}
    viewSingle={(repo) => <ReposSingle repo={repo} />}
  />
);

ReposFound.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposFound;
