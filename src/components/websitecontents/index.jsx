import React from 'react'
import { Container,Row,Col,Button,Card,CardLink,CardImg } from 'reactstrap';
import styles from "./styles.module.css";
import register from "../../assets/Images/register.png";
import complaint from "../../assets/Images/complaint.png";
import contact from "../../assets/Images/contact.png";


const WebsiteContent = () => {
  return (
    <>
     <Container>
      <Card className="border-0 mb-5" body>
        <Row>
          <Col sm={4}>
            {" "}
            <Card body className={styles.registerCard}>
              <CardLink href="/login" className={styles.cardlinks}>
                <Row>
                  <Col>
                    <CardImg
                      alt="Register/Login"
                      src={register}
                      style={{
                        width: "12rem",
                        height: 180,
                      }}
                    />
                  </Col>
                </Row>
                <Button tag="h5" className={styles.cardbutton}>
                  Register/Login
                </Button>
              </CardLink>
            </Card>
          </Col>
          <Col sm={4}>
            {" "}
            <Card body className={styles.complaintCard}>
              <CardLink href="/complaint" className={styles.cardlinks}>
              <Row>
                  <Col>
                  <CardImg
                  alt="Add Complaint"
                  src={complaint}
                  style={{
                    width: "12rem",
                    height: 180,
                  }}
                />
                  </Col>
                </Row>
                <Button tag="h5" className={styles.cardbutton}>
                  Add Complaint
                </Button>
              </CardLink>
            </Card>
          </Col>
          <Col sm={4}>
            {" "}
            <Card body className={styles.contactCard}>
              <CardLink href="/contact" className={styles.cardlinks}>
              <Row>
                  <Col>
                  <CardImg
                  alt="Contact"
                  src={contact}
                  style={{
                    width: "12rem",
                    height: 180,
                  }}
                />
                  </Col>
                </Row>
                <Button tag="h5" className={styles.cardbutton}>
                  Contact Us
                </Button>
              </CardLink>
            </Card>
          </Col>
        </Row>
      </Card>
      </Container>
    </>
  )
}

export default WebsiteContent