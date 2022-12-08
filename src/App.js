import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// or less ideally
import { Button, Form, Row, Col, Table, Modal, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import data from './json/data.json'
var _ = require('lodash');

function App() {

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [sector, setSector] = useState([])

  function clickHandler(id) {

    console.log("_.filter(data, { 'id': id })");
    console.log(_.filter(data, { 'id': id }));

    setSector((_.filter(data, { 'id': id })));
  }


  return (
    <div className="App container mt-5">
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-md">
            Sector Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form >
            <Row className='mt-3'>
              <Col md={12}>Name<span className='text-danger'>*</span></Col>
              <Col md={12}>
                <Form.Control type="text" placeholder="Enter name" className='mt-3' />
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col md={12}>Category<span className='text-danger'>*</span></Col>
              <Col md={12}>
                <Form.Select className='mt-3' >
                  {data.map((option) => (
                    <option value={option.id} onChange={() => clickHandler(1)}>{option.name}</option>
                  ))}

                </Form.Select>
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col md={12}>Sector<span className='text-danger'>*</span></Col>
              <Col md={12}>
                <Form.Select className='mt-3'>
                {data[0].sectors.map((option) => (
                    <option value={option.id}>{option.name}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col md={12}>Sub Sectors<span className='text-danger'>*</span></Col>
              <Col md={12}>
                <Form.Select className='mt-3'>
                {data.map((option) => (
                    <option value={option.id}>{option.name}</option>
                  ))}
                </Form.Select>
              </Col>
            </Row>

            <Row className='mt-3'>
              <Col md={1}><Form.Check type="checkbox" /></Col>
              <Col md={11} className="text-left">Agree to terms</Col>
            </Row>
            <Row className='mt-3'>
              <Col md={12}></Col>
              <Col md={12} className="text-left">
                <Button variant="success" type="submit" className='w-100'>
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      <h3>Sectors List</h3>

      <Button onClick={() => setSmShow(true)} className="me-2 float-right" varient="success">
        Add New +
      </Button>

      <br></br>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Sector</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td onClick={() => setSmShow(true)}>Edit</td>
          </tr>

        </tbody>
      </Table>

      <Alert variant="danger">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Mongodb data cluster is still not working because of it i used json files to load data to the data fields, when mongo db is fixed i can migrate it to the mongodb data cluster.after the migration all data setters can be works properly.
        </p>
        <hr />
        <p className="mb-0">
          Thank You, Amzcord Technologies
        </p>
      </Alert>


    </div>
  );
}

export default App;
