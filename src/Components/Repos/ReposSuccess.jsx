import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import ReposSingle from './ReposSingle';

const ReposSuccess = ({ repos }) => (
  <ListGroup className="ReposSuccess">
    {repos.map((repo) => (
      <ReposSingle repo={repo} />
    ))}
  </ListGroup>
);

ReposSuccess.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.objectOf({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposSuccess;
