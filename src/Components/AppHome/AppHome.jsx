import React from 'react';
import { Card } from 'react-bootstrap';
import SectionHeader from '../Shared/Section/Header/SectionHeader';

const AppHome = () => (
  <>
    <SectionHeader title="Welcome!" hasRoundTop />
    <Card className="UserBody bg-light">
      <Card.Body className="Body">
        <Card.Text className="Text">
          <div className="Inner text-center">
            <p className="Bio h6 mb-3">
              Thank you for reviewing this demo application created by
              <a href="https://www.github.com/4c3x5u" target="_blank" rel="noreferrer">
                {' @4c3x5u'}
              </a>
              !
            </p>
            <p className="Bio h6 mb-1">
              To start, please click &quot;Search&quot; (top-right).
            </p>
            <p className="Bio h6 mb-0">
              Alternatively, you can click the app footer to
              navigate to this project&apos;s GitHub page.
            </p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  </>
);

export default AppHome;
