import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import PlusSign from '../../Assets/plus.svg';

const AddTasksButton = (): JSX.Element => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className='bg-transparent border border-0 border-transparent my-0' onClick={handleShow}>
        <img className='' style={{ height: '2.2rem' }} src={PlusSign} alt="add icon" />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-dark' closeButton>
          <Modal.Title className='text-light'>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark text-light'>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} className='col-12' controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" />
              </Form.Group>

              <Form.Group as={Col} className='col-12' controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control type="textarea"  placeholder="Description" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
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
          <Button onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTasksButton;