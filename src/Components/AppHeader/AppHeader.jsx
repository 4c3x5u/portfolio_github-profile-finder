import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  InputGroup,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import './AppHeader.sass';

const AppHeader = () => {
  const [searchParam, setSearchParam] = useState('');
  const history = useHistory();
  const formSubmit = (e) => {
    e.preventDefault();
    history.push(`/${searchParam}`);
  };
  useEffect(
    () => (
      searchParam === ''
        ? history.push('/')
        : history.push(`/${searchParam}`)
    ),
    [searchParam],
  );
  return (
    <Row className="AppHeader">
      <Col xs={9}>
        <Link className="TitleLink" to="/">
          <h2 className="Title text-dark">
            <FontAwesomeIcon icon={faGithubSquare} size="1x" className="mr-2" />
            <span className="mb-2">User Finder</span>
          </h2>
        </Link>
      </Col>
      <Col xs={3}>
        <Form className="Controls mb-3" onSubmit={formSubmit}>
          <InputGroup className="TextBox">
            <InputGroup.Prepend>
              <InputGroup.Text className="bg-dark text-light">
                @
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              placeholder="type username here..."
              onChange={(e) => setSearchParam(e.target.value)}
            />
          </InputGroup>
        </Form>
      </Col>
    </Row>
  );
};

export default AppHeader;
