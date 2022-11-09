import React from "react";
import styles from "./styles.module.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardTitle,
  Col,
  FormGroup,
  Row,
  Label,
  Button,
  CardLink,
  FormText,
} from "reactstrap";
import { MdLocationPin } from 'react-icons/md'
import { FaRegEnvelope , FaCity} from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { FiLock } from "react-icons/fi";
import { IoIosPerson } from "react-icons/io";
import { BsClipboardData } from "react-icons/bs";


import { BsFillTelephoneFill } from "react-icons/bs";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";


const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SignInSchema = Yup.object().shape({
  name: Yup.string().max(20, "name is too long").required("Please enter name"),
  email: Yup.string()
    .email("Please enter valid email.")
    .required("Please enter email"),
  password: Yup.string()
    .required("Please enter password.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(25, "Password is too long - should be 25 chars minimum."),
  street_address: Yup.string().when(["city", "zipcode", "country"], {
    is: (city, zipcode, country) =>
      city !== undefined || zipcode !== null || country !== undefined,
    then: Yup.string().required("Please enter address"),
  }),
  city: Yup.string().when(["address", "zipcode", "country"], {
    is: (address, zipcode, country) =>
      address !== undefined || zipcode !== null || country !== undefined,
    then: Yup.string().required("Please enter city").max(40),
  }),
  phone: Yup.string()
    .required("Please enter phone number.")
    .matches(phoneRegExp, "Please enter valid phone number.")
    .max(14),
    age: Yup.number()
    .positive('Age must be greater than zero')
    .max(3,"Please enter valid age")
    .required('Please enter age'),
    status: Yup.string()
    .required("Please enter status")
});

const SignUp = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    street_address: "",
    city:"",
    phone:"",
    age:"",
    status:""
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => {
        const { errors, touched } = formik;
        return (
          <>
            <Card className={styles.contactusHead} body>
              <CardTitle className="text-body mb-0" tag="h3">
                User Registration
              </CardTitle>
              <Breadcrumb>
                <BreadcrumbItem href="#" tag="a" className="text-danger">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem href="#" tag="a" active>
                  Register
                </BreadcrumbItem>
              </Breadcrumb>
            </Card>{" "}
            <Row className={styles.row}>
              <Col sm={5} lg={5} md={5} xl={5}>
                <Card body className={`my-5 ${styles.card}`}>
                  <h5 className={styles.userLogin}>
                    Enter your details 
                  </h5>
                  <Form>
                    <Row>
                      <Col md={6} className="my-2">
                        <Label htmlFor="name" className={styles.text}>
                          <BiUser size={23} />
                        </Label>
                        <Field
                          className={`${
                            errors.name && touched.name ? "input-error" : null
                          } ${styles.form_input}`}
                          type="text"
                          name="name"
                          id="name"
                          autoComplete="off"
                          placeholder="Name"
                        />
                        <ErrorMessage
                          name="name"
                          component="span"
                          className="error text-warning"
                        />
                      </Col>
                      <Col md={6} className="my-2">
                        <Label htmlFor="email" className={styles.text}>
                          <FaRegEnvelope size={20} />
                        </Label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          className={`mb-0 ${
                            errors.email && touched.email ? "input-error" : null
                          } ${styles.form_input}`}
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error text-warning"
                        />
                      </Col>
                      <Col md={12} className="my-2">
                        <Label htmlFor="password" className={styles.text}>
                          <FiLock size={20} />
                        </Label>
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          className={` ${
                            errors.password && touched.password
                              ? "input-error"
                              : null
                          } ${styles.form_input}`}
                        />
                        <ErrorMessage
                          name="password"
                          component="span"
                          className="error text-warning"
                        />
                      </Col>
                      <Col md={12} className="my-2">
                        <Label htmlFor="street_address" className={styles.text}>
                          <MdLocationPin size={20} />
                        </Label>
                        <Field
                          type="text"
                          name="street_address"
                          id="street_address"
                          placeholder="Address"
                          className={` ${
                            errors.street_address && touched.street_address
                              ? "input-error"
                              : null
                          } ${styles.form_input}`}
                        />
                        <ErrorMessage
                          name="street_address"
                          component="span"
                          className="error text-warning"
                        />
                      </Col>
                      <Col md={12} className="my-2">
                        <Label htmlFor="city" className={styles.text}>
                          <FaCity size={20} />
                        </Label>
                        <Field
                          type="text"
                          name="city"
                          id="city"
                          placeholder="City"
                          className={` ${
                            errors.city && touched.city
                              ? "input-error"
                              : null
                          } ${styles.form_input}`}
                        />
                        <ErrorMessage
                          name="city"
                          component="span"
                          className="error text-warning"
                        />
                      </Col>
                      <Col md={12} className="my-2">
                        <Label htmlFor="city" className={styles.text}>
                          <BsFillTelephoneFill size={20} />
                        </Label>
                        <Field
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="Mobile no."
                          className={` ${
                            errors.phone && touched.phone
                              ? "input-error"
                              : null
                          } ${styles.form_input}`}
                        />
                        <ErrorMessage
                          name="phone"
                          component="span"
                          className="error text-warning"
                        />
                      </Col>
                      <Col md={12} className="my-2">
                        <Label htmlFor="age" className={styles.text}>
                          <IoIosPerson size={20} />
                        </Label>
                        <Field
                          type="text"
                          name="age"
                          id="age"
                          placeholder="Age"
                          className={` ${
                            errors.age && touched.age
                              ? "input-error"
                              : null
                          } ${styles.form_input}`}
                        />
                        <ErrorMessage
                          name="age"
                          component="span"
                          className="error text-warning"
                        />
                      </Col>
                      <Col md={12} className="my-2">
                        <Label htmlFor="age" className={styles.text}>
                          <BsClipboardData size={20} />
                        </Label>
                        <Field
                          type="text"
                          name="status"
                          id="status"
                          placeholder="Status"
                          className={` ${
                            errors.status && touched.status
                              ? "input-error"
                              : null
                          } ${styles.form_input}`}
                        />
                        <ErrorMessage
                          name="status"
                          component="span"
                          className="error text-warning"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <FormText>
                          <CardLink color="link" className={styles.signup_link}>
                          Already a member? Login 
                          </CardLink>
                        </FormText>
                      </Col>
                    </Row>
                    <FormGroup className={styles.login_section}>
                      <Button
                        className={`mt-4 ${styles.login_btn}`}
                        type="submit"
                      >
                        Register
                      </Button>
                    </FormGroup>
                  </Form>
                </Card>
              </Col>
            </Row>
          </>
        );
      }}
    </Formik>
  );
};

export default SignUp;
