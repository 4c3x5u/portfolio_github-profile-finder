import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faQuestion } from '@fortawesome/free-solid-svg-icons';
import {
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap';
import InfoModal from '../Shared/InfoModal/InfoModal';
import NavCol from '../Shared/NavCol/NavCol';

const ProfileView = ({ user }) => {
  const [showingInfoModal, setShowingInfoModal] = useState(false);
  const handleShowInfoModal = () => setShowingInfoModal(true);
  const handleHideInfoModal = () => setShowingInfoModal(false);

  return (
    <Card className="ProfileView bg-light">
      {showingInfoModal && <InfoModal handleHide={handleHideInfoModal} />}
      <Row noGutters>
        <Col className="PictureCol" xs={4}>
          <Card.Img className="Picture" variant="left" src={user.avatar} />
        </Col>
        <Col className="InfoCol" xs={8}>
          <Card.Body className="Body">
            <Card.Text className="Text">
              <div className="Inner">
                <Card.Title className="Title">{user.name}</Card.Title>
                <p className="Bio">{user.bio}</p>
                <Row className="NavRow mb-2">
                  <NavCol name="Repos" amount={user.numberOfPublicRepos} url={`/${user.login}/repos`} />
                  <NavCol name="Gists" amount={user.numberOfPublicGists} url={`/${user.login}/gists`} />
                  <NavCol name="Followers" amount={user.numberOfFollowers} url={`/${user.login}/followers`} />
                  <NavCol name="Following" amount={user.numberOfFollowing} url={`/${user.login}/following`} />
                  <Col className="LocationCol mt-3 mb-0" xs={12}>
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
                    {user.location}
                  </Col>
                  <Col className="QuestionCol mt-3" xs={12}>
                    <Button className="ToggleModal" onClick={handleShowInfoModal} variant="dark">
                      <FontAwesomeIcon icon={faQuestion} />
                    </Button>
                  </Col>
                </Row>
              </div>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

ProfileView.propTypes = {
  user: PropTypes.objectOf({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    numberOfPublicRepos: PropTypes.number.isRequired,
    numberOfPublicGists: PropTypes.number.isRequried,
    numberOfFollowers: PropTypes.number.isRequired,
    numberOfFollowing: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProfileView;
