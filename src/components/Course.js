import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, Button, Container, CardTitle } from 'reactstrap';
import axios from "axios";
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
const Course = ({ course, update }) => {

  const deleteCourse = (id) => {
    
    axios.delete(`${base_url}/courses/${id}`).then(
      (response)=>{
        toast.success("Course deleted");
        update(id);
        
      },
      (error)=>{
        toast.error("Something went wrong");
      }
    )
  }

  return (
    <div>
      <Card className='text-center'>
        <CardBody>
          <CardTitle tag="h5">{course.title}</CardTitle>
          <CardText>{course.description}</CardText>
          <Container className='text-center'>
            <Button color='danger' onClick={() => {
              deleteCourse(course.id);
            }}>Delete</Button>
            {' '}
            <Button color='warning ml-3' type='reset' >Update</Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;


