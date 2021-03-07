import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const InfoModal = ({ title, body, showing }) => {
  const [show, setShow] = useState(showing);
  const hideModal = () => setShow(false);

  return (
    <Modal show={show} onHide={hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{body}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="dark" onClick={hideModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

InfoModal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  showing: PropTypes.bool.isRequired,
};

export default InfoModal;
