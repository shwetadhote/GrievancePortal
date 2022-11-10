import React from "react";
import styles from "./styles.module.css";
import {
  Row,
  Col,
  List,
  CardLink,
  Card,
  CardTitle,
  ListGroupItem,
  CardText,
  Button,
  Input,
  CardBody,
  Form,
  FormGroup,
  Container,
  CardFooter,
} from "reactstrap";

const Footer = () => {
  return (
    <>
    <Card className={`my-2 ${styles.Card}`} body={true}>
        <Container className={styles.Card_text}>
          <Row>
            <Col sm="4" className="mt-3">
              <CardTitle tag="h5">Learn More</CardTitle>
              <List>
                <ListGroupItem>
                  <CardLink
                  hre="/"
                    className={styles.Card_link}
                  >
                    Home
                  </CardLink>
                </ListGroupItem>
                <ListGroupItem>
                  <CardLink
                  hre="/about"
                    className={styles.Card_link}
                  >
                    About
                  </CardLink>
                </ListGroupItem>
                <ListGroupItem>
                  <CardLink
                  hre="/contact"
                    className={styles.Card_link}
                  >
                    Contact Us
                  </CardLink>
                </ListGroupItem>
                <ListGroupItem>
                  <CardLink
                  hre="/faq"
                    className={styles.Card_link}
                  >
                    FAQ
                  </CardLink>
                </ListGroupItem>
              </List>
              <CardTitle tag="h5">Connect</CardTitle>
              <Row>
                <Col>
                  <Button
                    color="warning"
                    className="rounded-pill fw-bold px-4"
                  >
                    Login
                  </Button>
                  <Button
                    outline
                    color="warning"
                    className="rounded-pill fw-bold px-4 m-1"
                  >
                    Sign Up
                  </Button>
                </Col>
              </Row> <CardText></CardText>
            </Col>
            <Col sm="4" className="mt-3">
              <CardTitle tag="h5" className="mt-3">Contact Us</CardTitle>
              <CardText>
                <Row>
                  <Col>
                  Governments citizen grievance portal<br/>
                    Indore, Madhya Pradesh - 452010
                    <br />
                    <CardLink
                      href="tel:0731-9036"
                      target="__blank"
                      className={styles.phone_no}
                    >
                      0731-403688
                    </CardLink><br/>
                    <CardLink
                      href="tel:0731-9036"
                      target="__blank"
                      className={styles.phone_no}
                    >
                      0731-4037800
                    </CardLink>
                  </Col>
                </Row>
              </CardText>
              <Row>
                <Col>
                  <CardLink
                    href="mailto:continur.in"
                    target="__blank"
                    className={styles.Card_email}
                    color="warning"
                  >
                    contact@grievancepg.in
                  </CardLink>
                </Col>
              </Row>
            </Col>
            <Col sm="4" className="mt-3">
              <CardTitle tag="h5">Get in touch</CardTitle>
              <CardBody className="p-0 mt-4">
                <Form >
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          type="text"
                          className={styles.Card_input_field}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          type="text"
                          className={styles.Card_input_field}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="email"
                          name="email"
                          placeholder="Email"
                          type="email"
                          className={styles.Card_input_field}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input
                          id="password"
                          name="password"
                          placeholder="Password"
                          type="password"
                          className={styles.Card_input_field}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup row>
                    <Col sm={12}>
                      <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                        placeholder="Message"
                        className={styles.Card_input_field}
                      />
                    </Col>
                  </FormGroup>
                </Form>
                <Button color="warning" className="rounded-pill px-5 fw-bold">
                  Submit
                </Button>
              </CardBody>
            </Col>
          </Row>
        </Container>
        <CardFooter className={`mt-5 ${styles.Card_footer}`}></CardFooter>
        <Container>
          <CardText className={`my-3 ${styles.footer_text}`}>
            © 2022 grievanceportal.in all rights reserved
          </CardText>
        </Container>
      </Card>
    </>
  )
}

export default Footer;