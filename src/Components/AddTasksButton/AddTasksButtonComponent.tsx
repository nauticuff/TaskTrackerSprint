import React, { SetStateAction, useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PlusSign from '../../Assets/plus.svg';
import { SaveTask, removeFromLocalStorage } from '../LocalStorage';
import { v4 as uuidv4 } from 'uuid';

interface TaskType {
  id: number;
  title: string;
  description: string;
  status: string;
}

interface AllTasksProps {
  handleShow: () => void;
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: React.Dispatch<SetStateAction<string>>;
  status: string;
  setStatus: React.Dispatch<SetStateAction<string>>;
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  firstTodo: boolean;
  setFirstTodo: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTasksButton = (props: AllTasksProps) => {

  // const [title, setTitle] = useState("Name of task");
  // const [description, setDescription] = useState("Task Description");
  // const [status, setStatus] = useState("");

  const handleClose = () => props.setShow(false);

  const handleAddButton = () => {
    if (props.title == "Name of task" || props.description == "Task Description" || props.status == "") {
      return
    } else {
      HandleTask(props.title, props.description, props.status);
      handleClose();
      props.setTitle("Name of task");
      props.setDescription("Task Description");
      props.setStatus("");
    }
  }

  const HandleTask = (title: string, description: string, status: string) => {
    const task = {
      id: uuidv4(),
      title,
      description,
      status
    }
    SaveTask(task);
    if (status == "To Do" && props.firstTodo == true) props.setFirstTodo(false);

    const tasksFromStorage = localStorage.getItem('Tasks');
    if (tasksFromStorage) {
      props.setTasks(JSON.parse(tasksFromStorage));
    }

    console.log(task);
  }

  const DeleteTask = (title: string, description: string, status: string) => {
    const task = {
      title,
      description,
      status
    }
    removeFromLocalStorage(task)
  }

  return (
    <div className='d-none'>
      <Button className='bg-transparent border border-0 border-transparent my-0' onClick={props.handleShow}>
        <img className='' style={{ height: '2.2rem' }} src={PlusSign} alt="add icon" />
      </Button>

      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header className='bg-dark' closeButton>
          <Modal.Title className='text-light'>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-light'>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} className='col-12' controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={(e) => props.setTitle(e.target.value)} type="text" placeholder="Enter title" />
              </Form.Group>

              <Form.Group as={Col} className='col-12' controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={(e) => props.setDescription(e.target.value)} type="textarea" placeholder="Description" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Status</Form.Label>
                <Form.Select onChange={(e) => props.setStatus(e.target.value)}>
                  <option>Select task column</option>
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                </Form.Select>
              </Form.Group>
            </Row>
            {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer className='bg-dark text-light'>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddButton}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddTasksButton;