import React from 'react';
import PropTypes from 'prop-types';
import ReposSingle from './ReposSingle';
import List from '../Shared/List/List';

const ReposList = ({ repos }) => (
  <List
    name="Repos"
    items={repos}
    viewSingle={(repo) => <ReposSingle repo={repo} />}
  />
);

ReposList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposList;
