import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Card,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const UserDetails = ({ user }) => (
  <Card className="bg-light align-middle" style={{ border: '3px solid #343a40' }}>
    <Row noGutters style={{ height: '100%' }}>
      <Col xs={4} style={{ height: '100%' }}>
        <Card.Img
          variant="left"
          src={user.avatar}
          style={{ width: '100%', height: '100%' }}
        />
      </Col>
      <Col xs={8} style={{ paddingRight: '5rem', paddingLeft: '5rem' }}>
        <Card.Body style={{ height: '100%', width: '100%' }}>
          <Card.Text style={{ height: '100%', width: '100%' }}>
            <div style={{ height: '100%', width: '100%', display: 'flex' }}>
              <div style={{ display: 'block', margin: 'auto' }}>
                <Card.Title style={{ textAlign: 'center' }}>
                  <h2>{user.name}</h2>
                </Card.Title>
                <p style={{ fontSize: '14pt', textAlign: 'center' }}>{user.bio}</p>
                <Row className="mb-2" style={{ margin: 'auto' }}>
                  <Col xs={6} style={{ textAlign: 'center' }}>
                    <h6>
                      Public Repos:
                      {' '}
                      {user.numberOfPublicRepos}
                    </h6>
                  </Col>
                  <Col xs={6} style={{ textAlign: 'center' }}>
                    <h6>
                      Public Gists:
                      {' '}
                      {user.numberOfPublicGists}
                    </h6>
                  </Col>
                  <Col xs={6} style={{ textAlign: 'center' }}>
                    <h6>
                      Followers:
                      {' '}
                      {user.numberOfFollowers}
                    </h6>
                  </Col>
                  <Col xs={6} style={{ textAlign: 'center' }}>
                    <h6>
                      Following:
                      {' '}
                      {user.numberOfFollowing}
                    </h6>
                  </Col>
                </Row>
                <h5 style={{ width: '100%', textAlign: 'center' }}>
                  <FontAwesomeIcon icon={faMapMarkedAlt} size="md" className="mr-2" />
                  {user.location}
                </h5>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);

UserDetails.propTypes = {
  user: PropTypes.objectOf({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserDetails;
