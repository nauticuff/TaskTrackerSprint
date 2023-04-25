import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NotesPic from "../../Assets/NotesPic.jpg"

function Login() {
    return (
        <>
            <Container>
                <Row>
                    <Col md={4}>
                        <h1>Welcome Back, </h1>
                        <p>Login to continue developing amazing ideas</p>
                        <p>Username</p>
                        <input/>
                        <p>Password</p>
                        <input/>
                        <div><Button>Login</Button></div>
                    </Col>
                    <Col md={8}>
                        <img src={NotesPic}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}


export default Login;