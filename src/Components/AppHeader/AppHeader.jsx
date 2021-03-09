import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  InputGroup,
} from 'react-bootstrap';
import './AppHeader.sass';

const AppHeader = () => {
  const [searchParam, setSearchParam] = useState('4c3x5u');
  return (
    <Row className="AppHeader">
      <Col xs={8}>
        <h2 className="Title text-dark">
          GitHub Profile Finder
        </h2>
      </Col>
      <Col xs={4}>
        <Form className="Controls mb-3" onSubmit={(e) => e.preventDefault()}>
          <Row noGutters>
            <Col xs={9}>
              <InputGroup className="TextBox">
                <InputGroup.Prepend>
                  <InputGroup.Text className="bg-dark text-light">
                    @
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  placeholder="4c3x5u"
                  onChange={(e) => setSearchParam(e.target.value || '4c3x5u')}
                />
              </InputGroup>
            </Col>
            <Col className="pl-2">
              <Link className="SearchButton btn btn-dark sm" to={`/${searchParam}`}>
                Search
              </Link>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default AppHeader;
