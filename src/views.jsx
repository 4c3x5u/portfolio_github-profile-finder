import React from 'react';
import {
  Row, Col, Form, Button, Card,
} from 'react-bootstrap';

import {
  searchUser, handleUserFound, handleUserNotFound,
} from './utils';

export const viewSearchFormGroup = (setSearchParam, setUserFound, setUserDetails, searchParam) => (
  <Form.Group>
    <Row>
      <Col xs={10}>
        <Form.Control
          type="text"
          placeholder="Enter username..."
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </Col>
      <Col size={2}>
        <Button
          variant="primary"
          size="sm"
          onKeyPress={(e) => e.preventDefault()}
          onClick={() => (
            searchUser(
              searchParam,
              handleUserFound(setUserFound, setUserDetails),
              handleUserNotFound(setUserFound, setUserDetails),
            )
          )}
          style={{ height: '100%', width: '100%' }}
        >
          Search
        </Button>
      </Col>
    </Row>
  </Form.Group>
);

export const viewUserDetails = (userDetails) => (
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
          <Card.Title>{userDetails.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the cards content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Col>
    </Row>
  </Card>
);
