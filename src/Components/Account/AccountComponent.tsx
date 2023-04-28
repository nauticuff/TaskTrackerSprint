import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import './AccountComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AccountComponent = () => {

    let navigate = useNavigate();
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleSaveChanges = () => {

    }

    const handleDeleteAccount = () => {

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
                            <p className='fs-5 text-light '>Account Type</p>
                            <p className='text-dark mt-4'>Full Name</p>
                            <p>Email</p>
                            <Row>
                                <Col className='col-6 d-flex justify-content-end'>
                                    <Button type='button' className='btn btn-black' onClick={handleShowEdit}>
                                        <p className='m-0 text-truncate'>Edit Account</p>
                                    </Button>
                                    <Modal show={showEdit} onHide={handleCloseEdit}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                        <Modal.Footer>
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
                                <Col className='col-6 p-0'>
                                    <Button type='button' className='btn btn-black' onClick={handleShowDelete}>
                                        <p className='m-0 text-truncate'>Delete Account</p>
                                    </Button>
                                    <Modal show={showDelete} onHide={handleCloseDelete}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Modal heading</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                        <Modal.Footer>
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