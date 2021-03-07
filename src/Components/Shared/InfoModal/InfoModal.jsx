import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const InfoModal = ({ handleHide }) => (
  <Modal className="InfoModal" show onHide={handleHide}>
    <Modal.Header closeButton>
      <Modal.Title>
        Profile Controls
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p className="mb-0">
        Click on
        <em>{' Repos, Gists, Followers, Following, '}</em>
        or
        <em>{' the location '}</em>
        to toggle their corresponding sections.
      </p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="dark" onClick={handleHide}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

InfoModal.propTypes = {
  handleHide: PropTypes.func.isRequired,
};

export default InfoModal;
