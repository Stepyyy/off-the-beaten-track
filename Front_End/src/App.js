import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import map from './location.png';
import homeImg from './background.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import camping from './camping.jpeg';
import skatepark from './skatepark.jpeg';


class App extends React.Component {

  constructor(props)
  { 
    super(props);
    this.helloworldfunction = this.helloworldfunction.bind(this);
    this.locationInput = React.createRef();
    this.distanceInput = React.createRef();
  }

  helloworldfunction(e) {
    e.preventDefault();
    console.log(this.locationInput.current.value);
    console.log(this.distanceInput.current.value);
    this.locationInput.current.value = "";
    this.distanceInput.current.value = "";
  }

  render() {
    return (
      <Row className="App-header">
      <Col className="Carousel">
      <Carousel >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={homeImg} rounded
            alt=""
            />
          <Carousel.Caption>
            <h3>OFF THE BEATEN TRACK</h3>
            <p>Find your passion with us.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={camping} rounded
            alt=""
            />
          <Carousel.Caption>
            <h3>GLAMPING</h3>
            <p>Just for the extra spicy.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={skatepark} rounded
            alt=""
            />
          <Carousel.Caption>
            <h3>SKATE LIFE</h3>
            <p>For those vertically inclined.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
      
      <br></br>
      
      <Col xs={4} >
        <Form>
          <Form.Group controlId="location_search">
            <Form.Label>Destination/Location</Form.Label>
            <Form.Control type="text" placeholder="Enter destination here" ref={this.locationInput}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Parks within distance:</Form.Label>
            <Form.Control type="text" placeholder="20 km" ref={this.distanceInput}/>
          </Form.Group>

            <Button variant="primary" type="submit" onClick={e => {
              window.open(`https://immense-ocean-43467.herokuapp.com/unicorn?lat=-36.865471&long=174.789798&dist=${this.distanceInput.current.value}`, "_blank")
            }}>
              Submit
            </Button>
        </Form>

        <br></br>
        </Col>

        <Col xs={4}>
          <Image src = {map} style={{height: 300, width:500}} rounded/>
        </Col>
      </Row>

    );
  }
}

export default App;
