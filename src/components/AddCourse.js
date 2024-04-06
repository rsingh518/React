import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
const AddCourse = () => {
    useEffect(()=>{
        document.title = "Add Course";
    },[]);

    const[course, setCourses]=useState({});

    const handleForm=(e)=>{
        postDatatoServer(course);
        e.preventDefault();
    };

    //function to post data on server
    const postDatatoServer = (data) =>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("success")
                toast.success("Course added successfully")
            },(error)=>{
                console.log(error);
            }
        )

    };

    return (
        <Fragment>
            <h1 className="text-center">Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Courde Id</Label>
                    <Input type="text" placeholder="Enter here" 
                    name="userId" 
                    id="userId" 
                    onChange={(e)=>{
                        setCourses({...course, id:e.target.value});
                    }}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="title">Courde Title</Label>
                    <Input type="text" placeholder="Enter title" name="title" 
                    id="title"
                    onChange={(e)=>{
                        setCourses({...course, title:e.target.value});
                    }} />
                </FormGroup>

                <FormGroup>
                    <Label for="description">Courde Destription</Label>
                    <Input type="textarea" placeholder="Enter Destription" 
                    name="description" 
                    id="description" 
                    onChange={(e)=>{
                        setCourses({...course, description:e.target.value});
                    }}
                    style={{height:100}}
                    
                    />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Add Course</Button>
                    {' '}
                    <Button type="reset" color="warning">Clear</Button>
                    <hr/>
                </Container>
            </Form>
        </Fragment>
    );
}
export default AddCourse;