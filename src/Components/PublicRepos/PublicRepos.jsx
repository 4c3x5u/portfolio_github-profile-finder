import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import Repository from './Repository';

const PublicRepos = ({ repos }) => (
  <ListGroup>
    {repos.map((repo) => (
      <Repository key={repo.name} repo={repo} />
    ))}
  </ListGroup>
);

PublicRepos.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PublicRepos;
