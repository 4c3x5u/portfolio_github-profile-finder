import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Card } from 'react-bootstrap';
import InfoModal from '../../Shared/InfoModal/InfoModal';
import InfoModalToggler from '../../Shared/InfoModal/Toggler/InfoModalToggler';
import UserInfoModalBody from '../InfoModal/UserInfoModalBody';
import UserNavCol from '../NavCol/UserNavCol';
import './UserBody.sass';

const UserBody = ({ user }) => {
  const [showingInfoModal, setShowingInfoModal] = useState(false);
  useEffect(
    () => { document.getElementsByClassName('SearchBox')[0].value = user.login; },
    [user],
  );
  return (
    <Card className="UserBody bg-light">
      {
        showingInfoModal && (
          <InfoModal
            title="UserControls"
            viewBody={() => <UserInfoModalBody />}
            handleHide={() => setShowingInfoModal(false)}
          />
        )
      }
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
                  <UserNavCol name="Repos" amount={user.numberOfPublicRepos} url={`/${user.login}/repos`} />
                  <UserNavCol name="Gists" amount={user.numberOfPublicGists} url={`/${user.login}/gists`} />
                  <UserNavCol name="Followers" amount={user.numberOfFollowers} url={`/${user.login}/followers`} />
                  <UserNavCol name="Following" amount={user.numberOfFollowing} url={`/${user.login}/following`} />
                  <Col className="LocationCol mt-3 mb-0" xs={12}>
                    <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
                    {user.location}
                  </Col>
                  <Col className="QuestionCol mt-3" xs={12}>
                    <InfoModalToggler handleShowInfoModal={() => setShowingInfoModal(true)} />
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

UserBody.propTypes = {
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

export default UserBody;
