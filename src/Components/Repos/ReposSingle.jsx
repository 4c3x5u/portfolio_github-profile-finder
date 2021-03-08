import React from 'react';
import PropTypes from 'prop-types';
import Single from '../Shared/Single/Single';

const ReposSingle = ({ repo }) => (
  <Single
    newTabOnClick
    sectionName="Repos"
    item={repo}
  />
);

ReposSingle.propTypes = {
  repo: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReposSingle;
