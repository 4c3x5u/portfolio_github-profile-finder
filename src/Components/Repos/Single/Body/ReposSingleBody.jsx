import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './ReposSingleBody.sass';

const RepoSingleBody = ({ repo }) => (
  <Card className="ReposSingleBody bg-light">
    <Card.Body className="Body">
      <Card.Text className="Text">
        <Card.Title className="Title">
          {repo.name}
          {repo.forked ? ' (Forked)' : ' (Original)'}
        </Card.Title>
        {repo.description && <p className="Description">{repo.description}</p>}
      </Card.Text>
    </Card.Body>
  </Card>
);

RepoSingleBody.propTypes = {
  repo: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    forked: PropTypes.bool.isRequired,
    url: PropTypes.func.isRequired,
  }).isRequired,
};

export default RepoSingleBody;
