import "./CreateAccount.css";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAcc } from "../../Services/DataService";


function CreateAccount() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    //const navigate = useNavigate();
  
    const handleSubmit = () => {
      let userData = {
          Id: 0,
          Username,
          Password
      }
      // createAccount(userData)
      // const GetLoggedInData = async () => {
      //     let result = await createAcc(userData)

  //         if (result) {
  //             navigate('/Login');
  //         } else {
  //             toggleShowA()
  //         }
    //   }
    //   GetLoggedInData()
    //navigate('/home') //will take back to home screen
      }
  
  // const handleSignInClick = () => {
  //   navigate('/SignInInfo');
  // };
  // const [showA, setShowA] = useState(false);

  // const toggleShowA = () => setShowA(!showA);



    return (
    <div className="body">
      <Container className="rectangle">
        <Row>
          <Col>
            <p className="header">Create Account</p>
            <p className="subText">Please enter your details to get started</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="typeText">Account Type</p>
            <Form.Group >
              <Form.Select className="dBar" placeholder="Select" >
                <option hidden>Select</option>
                <option>Admin</option>
                <option>User</option>
                
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="typeText">Email</p>
            <input className="inputBar" type='email'></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="typeText">Username</p>
            <input onChange={({ target: { value } }) => setUsername(value)} className="inputBar" type='text'></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="typeText">Password</p>
            <input onChange={({ target: { value } }) => setPassword(value)} className="inputBar" type='password'></input>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="typeText">Confirm Password</p>
            <input className="inputBar" type="password"></input>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <Button
              onClick={handleSubmit}
              className="signBtn"
              variant=""
            >
              Create Account
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="botText">
              Already have an account? <strong>Login.</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CreateAccount;
