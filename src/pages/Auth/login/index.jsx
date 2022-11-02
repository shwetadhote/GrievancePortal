import React from "react";
import { Form, Button, Card, Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <>
      <Row className="justify-content-center">
        <Col sm={4} lg={4} md={4} xl={4}>
          <Card body className={`my-5 ${styles.card}`}>
            <h4>User Login</h4>
            <Form className="mt-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-secondary fw-bold">
                  Email Id/Mobile No
                </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-secondary fw-bold">
                  Password
                </Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button variant="primary" type="submit" className="text-center">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Login;
