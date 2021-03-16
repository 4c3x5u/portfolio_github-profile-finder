import React, { useState } from 'react';
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
  const [searchParam, setSearchParam] = useState('4c3x5u');
  const history = useHistory();
  const formSubmit = (e) => {
    e.preventDefault();
    history.push(`/${searchParam}`);
  };
  return (
    <Row className="AppHeader">
      <Col xs={8}>
        <Link className="TitleLink" to="/">
          <h2 className="Title text-dark">
            <FontAwesomeIcon icon={faGithubSquare} size="1x" className="mr-2" />
            <span className="mb-2">User Finder</span>
          </h2>
        </Link>
      </Col>
      <Col xs={4}>
        <Form className="Controls mb-3" onSubmit={formSubmit}>
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
