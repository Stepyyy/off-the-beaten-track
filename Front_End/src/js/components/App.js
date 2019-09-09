import React from 'react';
import '../../App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import map from '../../location.png';
import homeImg from '../../background.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import camping from '../../camping.jpeg';
import skatepark from '../../skatepark.jpeg';

import Results from './Results';
import Header from './Header';
import Footer from './Footer';


export default class App extends React.Component {

  constructor(props)
  { 
    super(props);
    this.state = {
      title: "Hello World Header",
      results: ''
    };
    this.helloworldfunction = this.helloworldfunction.bind(this);
    this.updateDisplay = this.updateDisplay.bind(this);
    this.locationInput = React.createRef();
    this.distanceInput = React.createRef();
  }

  updateDisplay(){
    fetch('https://whispering-brook-62062.herokuapp.com/unicorn?lat=-36.865471&long=174.789798&dist=20')
    .then(r => r.json())
    .then(data => this.setState({results:JSON.stringify(data)})
    )}

  helloworldfunction(e) {
    e.preventDefault();
    console.log(this.locationInput.current.value);
    console.log(this.distanceInput.current.value);
    this.locationInput.current.value = "";
    this.distanceInput.current.value = "";
  }

  render() {
    const propstitle = "HELLO";

    return (
      <div>
      <Header  title = {this.state.title}/>
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

            <Button variant="primary" type="button" onClick={e => {
              this.updateDisplay();
            }}>Submit</Button>
        </Form>
        <Results results = {this.state.results}/>{/*Display Search Results here */}
        </Col>

        <Col xs={4}>
          <Image src = {map} style={{height: 300, width:500}} rounded/>
        </Col>
      </Row>
      <Footer/>
      </div>

    );
  }
}


