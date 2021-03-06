import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Repository from './Repository';

const PublicReposSuccess = ({ repos }) => (
  <ListGroup>
    {repos.map((repo) => (
      <Repository key={repo.name} repo={repo} />
    ))}
  </ListGroup>
);

PublicReposSuccess.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PublicReposSuccess;
