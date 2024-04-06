import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Allcourses from './components/Allcources';

import { Button, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Course from './components/Course';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Options from './components/Options';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const btnHandle = () => {
    toast.success("Done");
  };

  return (
    <div>
      <Router>
        <ToastContainer />

        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Options />
            </Col>
            <Col md={8}>
              <Routes><Route path='/' Component={Home} exact /></Routes>
              <Routes><Route path='add-course' Component={AddCourse} exact /></Routes>
              <Routes><Route path='view-courses' Component={Allcourses} exact /></Routes>
              
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
