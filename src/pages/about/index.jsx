import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";
import styles from "./styles.module.css";

const About = () => {
  return (
    <>
      <Card className={styles.contactusHead} body>
        <CardTitle className="text-body mb-0" tag="h3">
          About Us
        </CardTitle>
        <Breadcrumb>
          <BreadcrumbItem href="#" tag="a" className="text-danger">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a" active>
            About Us
          </BreadcrumbItem>
        </Breadcrumb>
      </Card>
      <Container>
        <Card className={`fw-bold text-center ${styles.cardBody}`} body>
          <CardText className="text-secondary">
            Director of Public Grievances, The Department of Administrative
            Reforms and Public Grievances. is the nodal agency to formulate
            policy guidelines for citizen-centric governance in the country.
            Redress of citizen's grievances, being one of the most important
            initiatives of the department, DAR&PG formulates public grievance
            redress mechanisms for effective and timely redress / settlement of
            citizen's grievances.
          </CardText>
          <CardText className="text-secondary">
            The DAR&PG has been making endeavors to bring excellence in public
            service delivery and to redress grievances of citizens in a
            meaningful manner by effectively coordinating with different
            Ministries and Departments of the Government and trying to eliminate
            the causes of grievances.
          </CardText>
          <CardText className="text-secondary">
            Any query/comments/discrepancies may be communicated to Department
            of Administrative Reforms & Public Grievances as per the following
            Contact Address:</CardText>
            <CardText className="text-secondary">
Director (PG)<br/>
The Department of Administrative Reforms and Citizen Grievances.,<br/> -----
Scheme no. 78, Vijaynagr 452010
</CardText>
        </Card>
      </Container>
    </>
  );
};

export default About;
