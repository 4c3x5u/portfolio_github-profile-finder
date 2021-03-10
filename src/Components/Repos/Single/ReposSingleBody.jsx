import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const RepoSingleBody = ({ repo }) => (
  <a href={`https://www.github.com/${useParams().login}/${repo.name}`}>
    <Card className="RepoSingleBody bg-light">
      <Card.Body className="Body">
        <Card.Text className="Text">
          <Card.Title className="Title">{repo.name}</Card.Title>
          <p className="Description">{repo.description}</p>
          <p>
            Forked?:
            {` ${JSON.stringify(repo.forked)}`}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  </a>
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
