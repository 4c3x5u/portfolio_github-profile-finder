import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import InfoModal from '../../../Shared/InfoModal/InfoModal';
import InfoModalToggler from '../../../Shared/InfoModal/Toggler/InfoModalToggler';
import './RepoBody.sass';
import RepoInfoModalBody from './InfoModal/RepoInfoModalBody';

const RepoBody = ({ repo }) => {
  const [showingInfoModal, setShowingInfoModal] = useState(false);
  return (
    <>
      {
        showingInfoModal && (
          <InfoModal
            title="Repo Actions"
            viewBody={() => <RepoInfoModalBody />}
            handleHide={() => setShowingInfoModal(false)}
          />
        )
      }
      <Card className="RepoBody bg-light">
        <Card.Body className="Body">
          <Card.Text className="Text">
            <Card.Title className="Title">
              {repo.name}
              {repo.forked ? ' (Forked)' : ' (Original)'}
            </Card.Title>
            {repo.description && <p className="Description">{repo.description}</p>}
          </Card.Text>
          <InfoModalToggler isSmall handleShowInfoModal={() => setShowingInfoModal(true)} />
        </Card.Body>
      </Card>
    </>
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
