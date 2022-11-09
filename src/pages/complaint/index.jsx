import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaRegEnvelope } from 'react-icons/fa'
import { ImMap2 } from "react-icons/im";
import styles from "./styles.module.css";
import {
  Label,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardTitle,
  Col,
  Container,
  FormGroup,
  Input,
  Row,
  Form,
} from "reactstrap";
import Divider from "../../components/divider";

const Complaint = () => {
  return (
    <>
      <Card className={styles.contactusHead} body>
        <CardTitle className="text-body mb-0" tag="h3">
          Add Complaint
        </CardTitle>
        <Breadcrumb>
          <BreadcrumbItem href="#" tag="a" className="text-danger">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a" active>
            Complaint
          </BreadcrumbItem>
        </Breadcrumb>
      </Card>
      <Container>
        <Container className="px-4 mt-5 fw-bold">
          <CardTitle tag="h4" className={styles.messageHeading}>
            Add Your Complaints here
          </CardTitle>
          <Divider />
          <Form>
          <Row>
                <Col md={12} className="my-2">
                    <Label className="text-secondary" htmlFor="complaintType">
                     Complaint Type
                    </Label>
                    <Input
                      type="complaintType"
                      name="complaintType"
                      id="complaintType"
                      placeholder="Enter Your Complaints"
                      className={`${styles.form_input}`}
                    />
                </Col>
              </Row>
          <Row>
                <Col md={6} className="my-2">
                    <Label htmlFor="area" className="text-secondary">
                      Area
                    </Label>
                    <Input
                      type="text"
                      name="area"
                      id="area"
                      placeholder="Enter Your Area"
                      className={`${styles.form_input}`}
                    />
                </Col>
                <Col md={6} className="my-2">
                    <Label htmlFor="city" className="text-secondary">
                      City
                    </Label>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Enter Your City"
                      className={`${styles.form_input}`}
                    />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="my-2">
                <Label htmlFor="images" className="text-secondary">
                Upload Images
                    </Label>
                    <Input
                      type="file"
                      name="images"
                      id="images"
                      placeholder="Upload Images"
                      className={`${styles.form_input}`}
                    />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="my-2">
                <Label htmlFor="panCard image" className="text-secondary">
                     Pancard Image
                    </Label>
                    <Input
                      type="file"
                      name="panCard image"
                      id="panCard image"
                      placeholder="Pancard Image"
                      className={`${styles.form_input}`}
                    />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="my-2">
                <Label htmlFor="description" className="text-secondary">
                     Description
                    </Label>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      placeholder="Add short description of your problem"
                      className={`${styles.form_input}`}
                    />
                </Col>
              </Row>
              <Row>
                <Col md={12} className="my-2">
                <Label htmlFor="status" className="text-secondary">
                     Status
                    </Label>
                    <Input
                      type="text"
                      name="status"
                      id="status"
                      placeholder="Status"
                      className={`${styles.form_input}`}
                    />
                </Col>
              </Row>
            <Button
              type="submit"
              className={`rounded-pill px-5 my-5 ${styles.submitbtn}`}
            >
              Submit 
            </Button>
          </Form>
        </Container>
      </Container>
      </>
  )
}

export default Complaint