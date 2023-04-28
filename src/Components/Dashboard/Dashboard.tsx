import { Link, useNavigate } from "react-router-dom";
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button } from "react-bootstrap";
import ThreeDots from '../../Assets/three-dots.svg';
import AddTasksButton from "../AddTasksButton/AddTasksButtonComponent";

const DashboardComponent = (): JSX.Element => {

    let navigate = useNavigate();

    const handleAccount = () => {
        navigate('/Account');
    }

    return (
        <>
            <div className="bgDark">
                <Container className="pb-5">
                    <Row className="mt-5">
                        <Col className="col-6">
                            <p className="fs-5 text-light m-0">Task Tracker</p>
                        </Col>
                        <Col className="col-6 d-flex justify-content-end p-0">
                            <Button onClick={handleAccount} className="btn-link bg-transparent text-decoration-none account-btn m-0 pb-4">
                                <p className="text-light m-0">Account</p>
                            </Button>
                        </Col>
                    </Row>
                    <Row className="justify-content-start">
                        <Col className="col-1">
                            <AddTasksButton />
                        </Col>
                    </Row>
                    <Row className="justify-content-center justify-content-lg-between">
                        <Col className="col-12 col-md-10 col-lg-4 px-4">
                            <Container>
                                <Row className="mb-1">
                                    <Col className="col-6">
                                        <p className="text-danger">To-Do</p>
                                    </Col>
                                    <Col className="col-6 d-flex justify-content-end text-light">
                                        <p>3</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-12 bg-secondary rounded-4 overflow-auto col-height">
                                        <Row className="justify-content-center pt-4 ">
                                            <Col className="col-10 rounded mb-3 bg-light pt-0 px-3">
                                                <Row>
                                                    <Col className="col-10 d-flex">
                                                        <p className="fw-bold align-self-center m-0">Name of task</p>
                                                    </Col>
                                                    <Col className="col-2 d-flex justify-content-end">
                                                        <Button className="align-self-start bg-transparent border border-0 p-0 m-0">
                                                            <img className="" src={ThreeDots} alt="three dots" height={'24px'} width={'24px'} />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                                <p>Task Description</p>
                                                <p className="text-end">Name of Assignee</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col className="col-12 col-md-10 col-lg-4 px-4">
                            <Container>
                                <Row className="mb-1">
                                    <Col className="col-6">
                                        <p className="text-warning">In-Progress</p>
                                    </Col>
                                    <Col className="col-6 d-flex justify-content-end text-light">
                                        <p>3</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-12 bg-secondary rounded-4 overflow-auto col-height">
                                        <Row className="justify-content-center">
                                            <Col className="col-10 rounded m-3 bg-light pt-3 px-3 mt-4">
                                                <p>Name of task</p>
                                                <p>Task Description</p>
                                                <p className="text-end">Name of Assignee</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col className="col-12 col-md-10 col-lg-4 px-4">
                            <Container>
                                <Row className="mb-1">
                                    <Col className="col-6">
                                        <p className="text-success">Done</p>
                                    </Col>
                                    <Col className="col-6 d-flex justify-content-end text-light">
                                        <p>3</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="col-12 bg-secondary rounded-4 overflow-auto col-height">
                                        <Row className="justify-content-center">
                                            <Col className="col-10 rounded m-3 bg-light pt-3 px-3 mt-4">
                                                <p>Name of task</p>
                                                <p>Task Description</p>
                                                <p className="text-end">Name of Assignee</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default DashboardComponent;