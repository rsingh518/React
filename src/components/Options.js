import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Options = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Course</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>View Courser</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About</Link>
            <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact</Link>
            {/* <ListGroupItem tag="a" href="/"active>
                Home
            </ListGroupItem>
            <ListGroupItem tag="a" href="/add-course">
                Add Course
            </ListGroupItem>
            <ListGroupItem tag="a" href="/view-courses">
                View Courser
            </ListGroupItem>
            <ListGroupItem tag="a" href="#!">
                About
            </ListGroupItem>
            <ListGroupItem tag="a" href="#!">
                Contact
            </ListGroupItem> */}
        </ListGroup>
    );
}

export default Options;