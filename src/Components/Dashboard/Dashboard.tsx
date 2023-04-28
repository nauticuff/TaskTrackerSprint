import { Link, useNavigate } from "react-router-dom";
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import ThreeDots from '../../Assets/three-dots.svg';
import AddTasksButton from "../AddTasksButton/AddTasksButtonComponent";
import { useEffect, useState } from "react";
import { SaveTask, removeFromLocalStorage, getLocalStorage } from "../LocalStorage";
import { v4 as uuidv4 } from 'uuid';

interface TaskType {
    id: number;
    title: string;
    description: string;
    status: string;
}

const DashboardComponent = (): JSX.Element => {

    const [tasks, setTasks] = useState<TaskType[]>([]);

    const [firstTodo, setFirstTodo] = useState(true);
    const [firstInprogress, setFirstInprogress] = useState(true);
    const [firstDone, setFirstDone] = useState(true);

    const [title, setTitle] = useState("Name of task");
    const [description, setDescription] = useState("Task Description");
    const [status, setStatus] = useState("");
    const [todoIsVisible, setTodoIsVisible] = useState(false);
    const [inprogressIsVisible, setInprogressIsVisible] = useState(false);
    const [doneIsVisible, setDoneIsVisible] = useState(false);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);


    let navigate = useNavigate();

    const handleAccount = () => {
        navigate('/Account');
    }

    useEffect(() => {
        
        const tasksFromStorage = localStorage.getItem('Tasks');
        if (tasksFromStorage) {
            setTasks(JSON.parse(tasksFromStorage));
        }
    
        if (!tasks.some(task => task.status === "To Do")) {
            setFirstTodo(false);
        }
        if (!tasks.some((task) => task.status === "In Progress")) {
            setFirstInprogress(false);
        }
        if (!tasks.some((task) => task.status === "Done")) {
            setFirstDone(false);
        }
  
        // console.log('First todo: ' + firstTodo)
        // console.log('In Prog: ' + firstInprogress)
        // console.log('Done: ' + firstDone)
    
    }, []);

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
                            <AddTasksButton handleShow={handleShow} show={show} setShow={setShow} title={title} setTitle={setTitle} description={description} setDescription={setDescription} status={status} setStatus={setStatus} tasks={tasks} setTasks={setTasks} firstTodo={firstTodo} setFirstTodo={setFirstTodo} firstInprogress={firstInprogress} setFirstInprogress={setFirstInprogress} firstDone={firstDone} setFirstDone={setFirstDone} />
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col className="col-4 px-4">
                            <Container>
                                <Row className="mb-1">
                                    <Col className="col-6">
                                        <p className="text-danger">To-Do</p>
                                    </Col>
                                    <Col className="col-6 d-flex justify-content-end text-light">
                                        <p>3</p>
                                    </Col>
                                </Row>
                                <Row onMouseEnter={() => setTodoIsVisible(true)} onMouseLeave={() => setTodoIsVisible(false)}>
                                    <Col className="col-12 bg-secondary rounded-4 col-height">
                                        {firstTodo
                                            ?
                                            <Row className="justify-content-center pt-4">
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
                                            :
                                            tasks
                                                .filter((task) => task.status == "To Do")
                                                .map((task) => (
                                                    <Row key={task.id} className="justify-content-center pt-4">
                                                        <Col className="col-10 rounded mb-3 bg-light pt-0 px-3">
                                                            <Row>
                                                                <Col className="col-10 d-flex">
                                                                    <p className="fw-bold align-self-center m-0">{task.title}</p>
                                                                </Col>
                                                                <Col className="col-2 d-flex justify-content-end">
                                                                    <Button className="align-self-start bg-transparent border border-0 p-0 m-0">
                                                                        <img className="" src={ThreeDots} alt="three dots" height={'24px'} width={'24px'} />
                                                                    </Button>
                                                                </Col>
                                                            </Row>
                                                            <p>{task.description}</p>
                                                            <p className="text-end">Name of Assignee</p>
                                                        </Col>
                                                    </Row>
                                                ))
                                        }

                                        {/* <Row className="justify-content-center pt-4">
                                            <Col className="col-10 rounded mb-3 bg-light pt-0 px-3">
                                                <Row>
                                                    <Col className="col-10 d-flex">
                                                        <p className="fw-bold align-self-center m-0">{firstTodo ? "Name of task" : ""}</p>
                                                    </Col>
                                                    <Col className="col-2 d-flex justify-content-end">
                                                        <Button className="align-self-start bg-transparent border border-0 p-0 m-0">
                                                            <img className="" src={ThreeDots} alt="three dots" height={'24px'} width={'24px'} />
                                                        </Button>
                                                    </Col>
                                                </Row>
                                                <p>{firstTodo ? "Task Description" : ""}</p>
                                                <p className="text-end">Name of Assignee</p>
                                            </Col>
                                        </Row> */}

                                        <Row className="justify-content-center pt-4">
                                            <Col className="col-10 rounded mb-3 pt-0 px-3">
                                                <Button onClick={() => handleShow()} className={todoIsVisible ? "" : "d-none"}>+ Create Task</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col className="col-4 px-4">
                            <Container>
                                <Row className="mb-1">
                                    <Col className="col-6">
                                        <p className="text-warning">In-Progress</p>
                                    </Col>
                                    <Col className="col-6 d-flex justify-content-end text-light">
                                        <p>3</p>
                                    </Col>
                                </Row>
                                <Row onMouseEnter={() => setInprogressIsVisible(true)} onMouseLeave={() => setInprogressIsVisible(false)}>
                                    <Col className="col-12 bg-secondary rounded-4 col-height">
                                        {firstInprogress
                                            ?
                                            <Row className="justify-content-center pt-4">
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
                                            :
                                            tasks
                                                .filter((task) => task.status == "In Progress")
                                                .map((task) => (
                                                    <Row key={task.id} className="justify-content-center pt-4">
                                                        <Col className="col-10 rounded mb-3 bg-light pt-0 px-3">
                                                            <Row>
                                                                <Col className="col-10 d-flex">
                                                                    <p className="fw-bold align-self-center m-0">{task.title}</p>
                                                                </Col>
                                                                <Col className="col-2 d-flex justify-content-end">
                                                                    <Button className="align-self-start bg-transparent border border-0 p-0 m-0">
                                                                        <img className="" src={ThreeDots} alt="three dots" height={'24px'} width={'24px'} />
                                                                    </Button>
                                                                </Col>
                                                            </Row>
                                                            <p>{task.description}</p>
                                                            <p className="text-end">Name of Assignee</p>
                                                        </Col>
                                                    </Row>
                                                ))
                                        }
                                        <Row className="justify-content-center pt-4">
                                            <Col className="col-10 rounded mb-3 pt-0 px-3">
                                                <Button onClick={() => handleShow()} className={inprogressIsVisible ? "" : "d-none"}>+ Create Task</Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col className="col-4 px-4">
                            <Container>
                                <Row className="mb-1">
                                    <Col className="col-6">
                                        <p className="text-success">Done</p>
                                    </Col>
                                    <Col className="col-6 d-flex justify-content-end text-light">
                                        <p>3</p>
                                    </Col>
                                </Row>
                                <Row onMouseEnter={() => setDoneIsVisible(true)} onMouseLeave={() => setDoneIsVisible(false)}>
                                    <Col className="col-12 bg-secondary rounded-4 col-height">
                                        {firstDone
                                            ?
                                            <Row className="justify-content-center pt-4">
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
                                            :
                                            tasks
                                                .filter((task) => task.status == "Done")
                                                .map((task) => (
                                                    <Row key={task.id} className="justify-content-center pt-4">
                                                        <Col className="col-10 rounded mb-3 bg-light pt-0 px-3">
                                                            <Row>
                                                                <Col className="col-10 d-flex">
                                                                    <p className="fw-bold align-self-center m-0">{task.title}</p>
                                                                </Col>
                                                                <Col className="col-2 d-flex justify-content-end">
                                                                    <Button className="align-self-start bg-transparent border border-0 p-0 m-0">
                                                                        <img className="" src={ThreeDots} alt="three dots" height={'24px'} width={'24px'} />
                                                                    </Button>
                                                                </Col>
                                                            </Row>
                                                            <p>{task.description}</p>
                                                            <p className="text-end">Name of Assignee</p>
                                                        </Col>
                                                    </Row>
                                                ))
                                        }
                                        <Row className="justify-content-center pt-4">
                                            <Col className="col-10 rounded mb-3 pt-0 px-3">
                                                <Button onClick={() => handleShow()} className={doneIsVisible ? "" : "d-none"}>+ Create Task</Button>
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