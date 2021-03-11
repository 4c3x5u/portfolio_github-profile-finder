import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './ReposSingleBody.sass';

const RepoSingleBody = ({ repo }) => (
  <div className="ReposSingleBody">
    <a className="Link" href={`https://www.github.com/${useParams().login}/${repo.name}`}>
      <Card className="Card bg-light">
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
    </a>
  </div>
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
