import { Link, useNavigate } from "react-router-dom";
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button } from "react-bootstrap";
import ThreeDots from '../../Assets/three-dots.svg';

const DashboardComponent = (): JSX.Element => {

    let navigate = useNavigate();

    const handleAccount = () => {
        navigate('/Account');
    }

    return (
        <>
            <div className="bgDark">
                <Container className="pb-5">
                    <Row className="my-5">
                        <Col className="col-6">
                            <p className="fs-5 text-light m-0">Task Tracker</p>
                        </Col>
                        <Col className="col-6 d-flex justify-content-end p-0">
                            <Button onClick={handleAccount} className="btn-link bg-transparent text-decoration-none account-btn m-0 pb-4">
                                <p className="text-light m-0">Account</p>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        {/* Modal to add tasks goes here */}
                    </Row>
                    <Row className="justify-content-between">
                        <Col className="col-4 px-4">
                            <Row className="mb-1">
                                <Col className="col-6">
                                    <p className="text-danger">To-Do</p>
                                </Col>
                                <Col className="col-6 d-flex justify-content-end text-light">
                                    <p>3</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-12 bg-secondary rounded-4 col-height overflow-scroll">
                                    <Row className="justify-content-center pt-4">
                                        <Col className="col-10 rounded mb-3 bg-light pt-3 px-3">
                                            <Row>
                                                <Col className="col-6 d-flex">
                                                   <p className="fw-bold align-self-center">Name of task</p> 
                                                </Col>
                                                <Col className="col-6 d-flex justify-content-end">
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
                        </Col>
                        <Col className="col-4 px-4">
                            <Row className="mb-1">
                                <Col className="col-6">
                                    <p className="text-warning">In-Progress</p>
                                </Col>
                                <Col className="col-6 d-flex justify-content-end text-light">
                                    <p>3</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-12 bg-secondary rounded-4 col-height">
                                    <Row className="justify-content-center">
                                        <Col className="col-10 rounded m-3 bg-light pt-3 px-3 mt-4">
                                            <p>Name of task</p>
                                            <p>Task Description</p>
                                            <p className="text-end">Name of Assignee</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="col-4 px-4">
                            <Row className="mb-1">
                                <Col className="col-6">
                                    <p className="text-success">Done</p>
                                </Col>
                                <Col className="col-6 d-flex justify-content-end text-light">
                                    <p>3</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-12 bg-secondary rounded-4 col-height">
                                    <Row className="justify-content-center">
                                        <Col className="col-10 rounded m-3 bg-light pt-3 px-3 mt-4">
                                            <p>Name of task</p>
                                            <p>Task Description</p>
                                            <p className="text-end">Name of Assignee</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default DashboardComponent;