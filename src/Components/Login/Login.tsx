import React, {useState, useContext} from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import NotesPic from "../../Assets/NotesPic.jpg"
import "../Login/Login.css"
import handwavepic from "../../Assets/handwavepic.png"
import NotePic from "../../Assets/notePic.png"
import { Link } from 'react-router-dom';
import CreateAccount from "../CreateAccountComponent/CreateAccounts";
import DashboardComponent from "../Dashboard/Dashboard";
import { login } from "../../Services/DataService";
import { MyContext } from "../../MyContext";
import { useNavigate } from "react-router-dom";



function Login() {
    const { setUser } = useContext(MyContext);
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
 
   
        
    const navigate = useNavigate();
        
    const handleLogin = async (name: any) => {
        let userData = {
            Username,
            Password
        }
        setUser(Username);
        try {
            let token = await login(userData);
            if (token.token != null) {
                localStorage.setItem("Token", token.token);
                navigate('/DashBoard');
            }
        } catch (error) {
            console.error(error);
            
        }
    }

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
                                        <input onChange={({ target: { value } }) => setUsername(value)} type='text' value={Username} />
                                    </Form.Group>
                                    <Form.Group>
                                        <label className="passTextSpace">Password</label>
                                        <input type='password' onChange={({ target: { value } }) => setPassword(value)}  />
                                    </Form.Group>
                                </Form>
                                <Button className="loginBtn" onClick={() => handleLogin(Username)} variant=''>Login</Button>
                                <div className="newAndCreateText">
                                    <p className="newText">New User? <Link to="/CreateAccount" className="createText">Create Account</Link></p>
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