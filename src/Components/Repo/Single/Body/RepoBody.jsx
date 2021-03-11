import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './RepoBody.sass';

const RepoBody = ({ repo }) => {
  const { login, name } = useParams();
  return (
    <Card className="RepoBody">
      <Link className="ContentLink" to={`/${login}/repos/${name}/content`}>
        <Card.Body className="Body">
          <Card.Text className="Text">
            <Card.Title className="Title">
              {repo.name}
              {repo.forked ? ' (Forked)' : ' (Original)'}
            </Card.Title>
            {repo.description && <p className="Description">{repo.description}</p>}
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
};

RepoBody.propTypes = {
  repo: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    forked: PropTypes.bool.isRequired,
    url: PropTypes.func.isRequired,
  }).isRequired,
};

export default RepoBody;
