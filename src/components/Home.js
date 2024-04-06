import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Home = () => {
  useEffect(()=>{
    document.title = "Home";
},[]);

  return (
    <div>
      <header className="bg-light text-center py-5">
        <Container>
          <h1 className="display-4">Welcome to My Website</h1>
          <p className="lead">This is a simple homepage created with React and Reactstrap.</p>
          <Button color="primary">Start Learning</Button>
        </Container>
      </header>
      {/* <Container className="py-5">
        <Row>
          <Col>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget mauris eu ex vehicula venenatis.</p>
          </Col>
          <Col>
            <h2>Services</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget mauris eu ex vehicula venenatis.</p>
          </Col>
          <Col>
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget mauris eu ex vehicula venenatis.</p>
          </Col>
        </Row>
      </Container> */}
      {/* <footer className="bg-dark text-light text-center py-4">
        <Container>
          <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </Container>
      </footer> */}
    </div>
  );
};

export default Home;
