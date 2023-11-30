import React from 'react';
import Sidepage from './Sidepage';
import Mainpage from './Mainpage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (
    <div>
    
      <Container>
      <Row>
        <Col  sm={3}><Sidepage /></Col>
        <Col sm={9}><Mainpage /></Col>
      </Row>
     
    </Container>
     
    </div>
  );
};

export default App;