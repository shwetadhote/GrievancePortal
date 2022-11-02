import React from 'react'
import {Carousel, Card} from 'react-bootstrap';
import Slider1 from "../../assets/Images/sliderone.jpg";
import Slider2 from "../../assets/Images/slidertwo.webp";
import styles from "./styles.module.css";
import Slider3 from "../../assets/Images/sliderthree.webp";

const Home = () => {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
      <Card body>
        <Card.Img variant="top" src={Slider1} className={`d-block img-fluid ${styles.cardImg}`}/>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card>
        <Card.Img variant="top" src={Slider2} />
        </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card>
        <Card.Img variant="top" src={Slider3} />
        </Card>
      </Carousel.Item>  
    </Carousel>
    </>
  )
}

export default Home