import React, { useEffect, useState } from "react";
import Course from "./Course";

import base_url from "../api/bootapi"; 

import axios from "axios";
import { toast } from "react-toastify";

 const Allcourses=()=>{

    useEffect(()=>{
        document.title = "All Course";

    },[]);

    //function to call server
    const getAllCourcesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                console.log(response.data);
                toast.success("Courses has been loaded");
                setCourses(response.data);
            },
            (error)=>{
                console.log(error);
                toast.error("Some thing went wrong");
            }
        );
    };

    //calling loading course function
    useEffect(()=>{
        getAllCourcesFromServer();
    },[]);

    const [courses, setCourses]=useState([]);

    const uupdateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }
      
    return(
        <div>
            <h1>All Courses</h1>
            <p>List of coursers are as follows</p>
            {
                courses.length > 0 ? courses.map((item)=>(
                    <Course key={item.id} course={item}  update={uupdateCourses}/> 
                )) : "No courses"
            }
        </div>
    );
 }

 export default Allcourses;