import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NotesPic from "../../Assets/NotesPic.jpg"
import "../Login/Login.css"

function Login() {
    return (
        <>
            <Container className="loginBG">
                <Row>
                    <Col md={4} className="loginWindow">
                        <h1>Welcome Back, </h1>
                        <p>Login to continue developing amazing ideas</p>
                        <p>Username</p>
                        <input/>
                        <p>Password</p>
                        <input/>
                        <Button>Login</Button>
                        <p>New User? <span>Create an Account</span></p>
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