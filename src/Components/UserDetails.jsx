import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Card,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const UserDetails = ({ user }) => (
  <Card style={{ height: '22rem', width: '100%', border: '3px solid #343a40' }}>
    <Row style={{ height: '100%' }}>
      <Col xs={4} style={{ height: '100%' }}>
        <Card.Img
          variant="left"
          src={user.avatar}
          style={{ width: '100%', height: '100%' }}
        />
      </Col>
      <Col xs={8}>
        <Card.Body>
          <Card.Title>
            <h2>{user.name}</h2>
          </Card.Title>
          <Card.Text>
            <p>{user.bio}</p>
            <p>
              <FontAwesomeIcon icon={faMapMarkedAlt} size="md" className="mr-2" />
              {user.location}
            </p>
          </Card.Text>
          <Button variant="dark">Go somewhere</Button>
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
