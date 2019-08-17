import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


function App() {
  return (
    // <div className="App">
      //<header className="App-header">
      // <container>
     
      <Row className="App-header">
     
        <Col xs={4} >
          <Form>
            <Form.Group controlId="location_search">
              <Form.Label>Destination/Location</Form.Label>
              <Form.Control type="text" placeholder="Enter destination here" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Parks within distance:</Form.Label>
              <Form.Control type="text" placeholder="20 km" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            
          </Form>
          
        </Col>
        <Col xs={4}>
          <Image src = "https://contents.mediadecathlon.com/p1554362/k$89294766ed2b0dc7be2f77e5c608bc4c/rockrider-st100-mountain-bike-grey.jpg?&f=800x800/" style={{height: 400, width:400}} rounded/>
        </Col>
      </Row>
   
     
     //{/* </header> */}
    //{/* </div> */}
  );
}

export default App;
