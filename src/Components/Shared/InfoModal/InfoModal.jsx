import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const InfoModal = ({ handleHide }) => (
  <Modal show onHide={handleHide}>
    <Modal.Header closeButton>
      <Modal.Title>
        {/* TODO: Write title */}
        Modal Title
      </Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>
        {/* TODO: Write body */}
        Modal Body
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
