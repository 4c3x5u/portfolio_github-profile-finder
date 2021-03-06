import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Card } from 'react-bootstrap';

const UserSuccess = ({ user }) => (
  <Card
    className="UserSuccess bg-light"
    style={{ border: '3px solid #343a40', marginBottom: '1rem' }}
  >
    <Row noGutters style={{ height: '100%' }}>
      <Col xs={4} style={{ height: '100%' }}>
        <Card.Img variant="left" src={user.avatar} style={{ width: '100%', height: '100%' }} />
      </Col>
      <Col xs={8} style={{ paddingRight: '5rem', paddingLeft: '5rem' }}>
        <Card.Body style={{ height: '100%', width: '100%' }}>
          <Card.Text style={{ height: '100%', width: '100%', display: 'flex' }}>
            <div style={{ display: 'block', padding: 0, margin: 'auto' }}>
              <Card.Title style={{ textAlign: 'center' }}>
                <h2>{user.name}</h2>
              </Card.Title>
              <p style={{ fontSize: '14pt', textAlign: 'center' }}>{user.bio}</p>
              <Row className="mb-2" style={{ margin: 'auto' }}>
                <Col xs={6} style={{ textAlign: 'center' }}>
                  {user.numberOfPublicRepos > 0 ? (
                    <Link to={`/${user.login}/repos`}>
                      {`Repos: ${user.numberOfPublicRepos}`}
                    </Link>
                  ) : (
                    <h6>
                      {`Repos: ${user.numberOfPublicRepos}`}
                    </h6>
                  )}
                </Col>
                <Col xs={6} style={{ textAlign: 'center' }}>
                  {user.numberOfPublicGists > 0 ? (
                    <Link to={`/${user.login}/gists`}>
                      {`Gists: ${user.numberOfPublicGists}`}
                    </Link>
                  ) : (
                    <h6>
                      {`Gists: ${user.numberOfPublicGists}`}
                    </h6>
                  )}
                </Col>
                <Col xs={6} style={{ textAlign: 'center' }}>
                  {user.numberOfFollowers > 0 ? (
                    <Link to={`/${user.login}/followers`}>
                      {`Followers: ${user.numberOfFollowers}`}
                    </Link>
                  ) : (
                    <h6>
                      {`Followers: ${user.numberOfFollowers}`}
                    </h6>
                  )}
                </Col>
                <Col xs={6} style={{ textAlign: 'center' }}>
                  {user.numberOfFollowing > 0 ? (
                    <Link to={`/${user.login}/following`}>
                      {`Following: ${user.numberOfFollowing}`}
                    </Link>
                  ) : (
                    <h6>
                      {` Following: ${user.numberOfFollowing}`}
                    </h6>
                  )}
                </Col>
              </Row>
              <h5 style={{ width: '100%', textAlign: 'center' }}>
                <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
                {user.location}
              </h5>
            </div>
          </Card.Text>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);

UserSuccess.propTypes = {
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

export default UserSuccess;
