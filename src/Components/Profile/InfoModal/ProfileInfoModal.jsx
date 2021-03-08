import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import './ProfileInfoModal.sass';

const ProfileInfoModal = ({ handleHide }) => (
  <Modal className="InfoModal" show onHide={handleHide}>
    <Modal.Header>
      <div className="ModalHeader">
        <Modal.Title>
          Profile Controls
        </Modal.Title>
      </div>
    </Modal.Header>

    <Modal.Body className="ModalBody">
      <p className="mb-0">
        Click on
        <em>{' Repos, Gists, Followers, Following, '}</em>
        or
        <em>{' the location '}</em>
        to toggle their corresponding sections.
      </p>
      <br />
      <p className="mb-0">
        You can also click on the section headers and the app footer to trigger their actions.
      </p>
      <br />
      <p className="mb-0">
        The profile section header navigates to the user&apos;s GitHub profile.
      </p>
      <br />
      <p className="mb-0">
        The other section headers navigate to either Repos, Gists, Followers, or the Following page
        for the user on GitHub depending on its title.
      </p>
      <br />
      <p className="mb-0">
        The footer navigates to this project&apos;s GitHub page.
      </p>
    </Modal.Body>

    <Modal.Footer>
      <div className="ModalFooter">
        <Button variant="dark" onClick={handleHide}>
          Close
        </Button>
      </div>
    </Modal.Footer>
  </Modal>
);

ProfileInfoModal.propTypes = {
  handleHide: PropTypes.func.isRequired,
};

export default ProfileInfoModal;
