import Carousel from "react-bootstrap/Carousel";
import sliderone from "../../assets/Images/sliderone.jpg";
import slidertwo from "../../assets/Images/slidertwo.jpg";
import sliderthree from "../../assets/Images/sliderthree.jpg";
import WebsiteContent from "../../components/websitecontents";
import {
  Card,
  Container,
  Button,
  CardText,
  CardLink,
  CardTitle,
} from "reactstrap";
import styles from "./styles.module.css";
import { MdWifiCalling3 } from "react-icons/md";

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderone} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slidertwo} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={sliderthree} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
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
            Contact Address:
          </CardText>
          <CardText className="text-secondary">
            Director (PG)
            <br />
            The Department of Administrative Reforms and Citizen Grievances.,
            <br /> ----- Scheme no. 78, Vijaynagr 452010
          </CardText>
        </Card>
      </Container>
      <Container>
        <Card className={`fw-bold text-center ${styles.cardBody}`} body>
          <CardTitle tag="h5">Do you have a Consumer Grievance ?</CardTitle>
          <CardText>
            <MdWifiCalling3 size={23} className="mb-1 mx-1 " /> You can call to
            register your grievance <CardLink>1800-11-4000 or 1915</CardLink>
          </CardText>
          <CardText>
            Register online Here <br />
            <Button color="warning" className="mt-2 px-4 rounded-pill">
              <CardLink className={`${styles.registerbtn}`} href="/signup">
                Sign Up
              </CardLink>
            </Button>
          </CardText>
        </Card>
      </Container>
      <WebsiteContent />
    </>
  );
};

export default Home;
