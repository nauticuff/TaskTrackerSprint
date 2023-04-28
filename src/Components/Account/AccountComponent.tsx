import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import './AccountComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccountComponent = () => {

    let navigate = useNavigate();
    const [showEdit, setShowEdit] = useState<boolean>(false);
    const [showDelete, setShowDelete] = useState<boolean>(false);
    const [accountType, setAccountType] = useState<string>('Admin');
    const [name, setName] = useState<string>('J.G. Wentworth');
    const [email, setEmail] = useState<string>('jgw@moneystacks.com');

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleSaveChanges = () => {

    }

    const handleDeleteAccount = () => {

    }

    const handleLogout = () => {

    }

    const handleBackToTasks = () => {
        navigate('/Dashboard');
    }

    return (
        <>
            <div className="bgDark">
                <Container className="pb-5">
                    <Row className="mt-5">
                        <Col className="col-6">
                            <p className="fs-5 text-light m-0">Account</p>
                        </Col>
                        <Col className="col-6 d-flex justify-content-end p-0">
                            <Button onClick={handleBackToTasks} className="btn-link bg-transparent text-decoration-none account-btn m-0 pb-4">
                                <p className="text-light m-0">Back to Tasks</p>
                            </Button>
                        </Col>
                    </Row>
                    <Row className='justify-content-center justify-content-md-start mx-2 m-sm-0'>
                        <Col className='col-12 col-md-8 col-lg-6 col-xl-4 bg-secondary rounded-4 px-5 pt-5 pb-3'>
                            <p className='fs-5 text-light '>{accountType}</p>
                            <p className='text-dark mt-4'>{name}</p>
                            <p>{email}</p>
                            <Row>
                                <Col className='col-4 d-flex justify-content-center'>
                                    <Button type='button' className='btn btn-black' onClick={handleShowEdit}>
                                        <p className='m-0 text-truncate'>Edit Account</p>
                                    </Button>
                                    <Modal show={showEdit} onHide={handleCloseEdit}>
                                        <Modal.Header className='bg-dark text-light' closeButton>
                                            <Modal.Title>Edit Account</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className='bg-dark text-light'>
                                            <Form>
                                                <Form.Group className="mb-3" controlId="firstName">
                                                    <Form.Label>First Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter first name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="lastName">
                                                    <Form.Label>Last Name</Form.Label>
                                                    <Form.Control type="text" placeholder="Enter last  name" />
                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="changePassword">
                                                    <Form.Label>Change Password</Form.Label>
                                                    <Form.Control type="password" placeholder="name@example.com" />
                                                </Form.Group>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer className='bg-dark text-light'>
                                            <Button variant="secondary" onClick={handleCloseEdit}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={() => {
                                                handleCloseEdit();
                                                handleSaveChanges();
                                            }}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Col>
                                <Col className='col-4 p-0 d-flex justify-content-center'>
                                    <Button className='btn btn-black text-light' type='button' onClick={handleLogout} >
                                       <p className='text-truncate m-0'>Logout</p> 
                                    </Button>
                                </Col>
                                <Col className='col-4 p-0 d-flex justify-content-center'>
                                    <Button type='button' className='btn btn-black' onClick={handleShowDelete}>
                                        <p className='m-0 text-truncate'>Delete Account</p>
                                    </Button>
                                    <Modal show={showDelete} onHide={handleCloseDelete}>
                                        <Modal.Header className='bg-dark text-light' closeButton>
                                            <Modal.Title>Delete Account</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body className='bg-dark text-danger'>Are you sure you want to delete your account?</Modal.Body>
                                        <Modal.Footer className='bg-dark text-light'>
                                            <Button variant="secondary" onClick={handleCloseDelete}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={() => {
                                                handleCloseDelete();
                                                handleDeleteAccount();
                                            }}>
                                                Delete
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default AccountComponent;