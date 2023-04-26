import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NotesPic from "../../Assets/NotesPic.jpg"
import "../Login/Login.css"
import handwavepic from "../../Assets/handwavepic.png"

function Login() {
    return (
        <div className="loginScreen">
            <div className="">
                <Row className="loginMobile">
                    <Col md={5}  className="loginContainer">
                        <div className="loginWindow">
                            <div className="welcomeTxtAndPic">
                            <h5>Welcome Back, </h5>
                            <img className="handPic" src={handwavepic}/>
                            </div>
                        <p className="introText">Login to continue developing amazing ideas</p>
                        <p className="">Username</p>
                        <input/>
                        <p className="passTextSpace">Password</p>
                        <input/>
                        <Button>Login</Button>
                        <div className="newAndCreateText">
                        <p className="newText">New User? <span className="createText">Create Account</span></p>
                        </div>
                        </div>
                    </Col>
                    <Col md={7} className="imageCol">
                        <img className="loginImage" src={NotesPic}/>
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default Login;