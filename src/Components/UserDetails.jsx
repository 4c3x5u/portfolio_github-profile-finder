import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Card,
} from 'react-bootstrap';

const UserDetails = ({ user }) => (
  <Card style={{ height: '20rem', width: '100%' }}>
    <Row style={{ height: '100%' }}>
      <Col xs={4}>
        <Card.Img
          variant="left"
          src="https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder-1024x512.png"
          style={{ width: '100%', height: '100%' }}
        />
      </Col>
      <Col xs={8}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
            <p>{user.bio}</p>
            <p>{user.location}</p>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
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
