import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import RepoContent from '../Content/RepoContent';
import './RepoBody.sass';

const RepoBody = ({ repo }) => (
  <>
    <Card className="RepoBody bg-light">
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
    <RepoContent />
  </>
);

RepoBody.propTypes = {
  repo: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    forked: PropTypes.bool.isRequired,
    url: PropTypes.func.isRequired,
  }).isRequired,
};

export default RepoBody;
