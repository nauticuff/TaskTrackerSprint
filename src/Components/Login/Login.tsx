import React from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import NotesPic from "../../Assets/NotesPic.jpg"
import "../Login/Login.css"
import handwavepic from "../../Assets/handwavepic.png"
import NotePic from "../../Assets/notePic.png"
import { Link } from 'react-router-dom';
import CreateAccount from "../CreateAccountComponent/CreateAccount";
import DashboardComponent from "../Dashboard/Dashboard";

function Login() {

    return (
        <div className="loginScreen">
            <div className="">
                <Row className="loginMobile">
                    <Col md={5} className="loginContainer">
                        <div className="titleAndLogin">
                            <div className="titleAndLogo">
                                <img className="notePicImage" src={NotePic} />
                                <h1 className="titleText text-center">Task Tracker
                                </h1>
                            </div>
                            <div className="loginWindow">
                                <div className="welcomeTxtAndPic">
                                    <h5>Welcome Back, </h5>
                                    <img className="handPic" src={handwavepic} />
                                </div>
                                <p className="introText">Login to continue developing amazing ideas</p>
                                <Form className="enterLogin">
                                    <Form.Group>
                                        <label className="">Username</label>
                                        <input />
                                    </Form.Group>
                                    <Form.Group>
                                        <label className="passTextSpace">Password</label>
                                        <input type="password" />
                                    </Form.Group>
                                </Form>
                                <Button className="loginBtn">Login</Button>
                                <div className="newAndCreateText">
                                    <div className="createAccountText">
                                    <p className="newText">New User?</p>
                                    <Link to="/CreateAccount" className="createText">Create Account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="imageCol">
                        <p className="logoText">Get more done quickly,<br />launch products sooner.</p>
                        <img className="loginImage" src={NotesPic} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}


export default Login;