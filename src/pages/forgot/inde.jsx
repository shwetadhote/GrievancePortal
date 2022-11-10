import React from "react";
import {
  Button,
  Col,
  Input,
  Label,
  Row,
  Card,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
  FormText,
  CardLink,
} from "reactstrap";
import styles from "./styles.module.css";
// import { forgotPasswordDataApi } from "../../../hooks/mutation";
// import Toastify from "../../../components/Toastify";
// import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required"),
});

const ForgotPassword = () => {
  // const { mutateAsync: formMutation } = forgotPasswordDataApi();

  const initialValues = {
    email: "",
  };
  // const onFinish = async (
  //   values: {
  //     email: string;
  //   },
  //   { resetForm }: string | Object | any
  // ) => {
  //   try {
  //     const { data } = await formMutation({
  //       email: values.email,
  //     });
  //     resetForm();
  //     toast.success(data.message);
  //   } catch (error: any) {
  //     toast.error(error.response.data.message);
  //   }
  // };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
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
                  Forgot Password
                </CardTitle>
                <Breadcrumb>
                  <BreadcrumbItem href="#" tag="a" className="text-danger">
                    Home
                  </BreadcrumbItem>
                  <BreadcrumbItem href="#" tag="a" active>
                    Forgot Password
                  </BreadcrumbItem>
                </Breadcrumb>
              </Card>
                <Row className={styles.row}>
                  <Col sm={5} lg={5} md={5} xl={5}>
                    <Card body className={`my-5 text-center ${styles.card}`}>
                      <Label tag="h5" className={styles.fpsswrd}>Forgot Your Password</Label>
                      <Label className={`${styles.fpsswrd}`}>
                        Enter your email below and we will send you instructions
                        on how to reset your password
                      </Label>
                      <Form className="mt-5">
                        <Row>
                          <Col md={12} className="my-2">
                              <Input
                                tag={Field}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className={`${
                                  errors.email && touched.email
                                    ? "input-error"
                                    : null
                                } ${styles.form_input}`}
                              />
                              <ErrorMessage
                                name="email"
                                component="span"
                                className="error text-warning"
                              />
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12}>
                            <FormText className="fw-bold">
                              Remember your password?{" "}
                              <CardLink className={styles.login_link}>
                                Login
                              </CardLink>
                            </FormText>
                             
                          </Col>
                          
                        </Row>
                        <Button
                                color="secondary"
                                className={`px-5 mt-5 text-center rounded-pill `}
                                type="submit"
                              >
                                Forgot Password
                              </Button>
                      </Form>
                    </Card>
                  </Col>
                </Row>
            </>
          );
        }}
      </Formik>
      {/* <Toastify /> */}
    </>
  );
};

export default ForgotPassword;
