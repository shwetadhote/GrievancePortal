import React, { useState } from "react";
import styles from "./styles.module.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,Col,
  NavItem,
  NavbarBrand,
  NavbarText,
  NavLink,
  Container,
  List,
  ListInlineItem,
  Card,Row,
  Button,
  // Dropdown
} from "reactstrap";
import logo from "../../assets/Images/logo.png";
import { FaHome } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { MdWifiCalling3 } from "react-icons/md";
import { BsFillQuestionDiamondFill } from "react-icons/bs";


const PaginationNavbar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar>
        <Container>
          <Row>
          <Col sm={6}> <NavbarBrand href="#home" className="mx-5">
            <img alt="" src={logo} width="100" height="80" />{" "}
            <NavbarText className="mx-3 text-danger fw-bold">
              Citizen Grievance Portal
            </NavbarText>
          </NavbarBrand></Col>
          <Col sm={6}>
            <Button className={`rounded-pill ${styles.complaintbtn}`}>
              <NavLink href="/complaint">Add Complaint</NavLink>
            </Button>
          </Col>
          </Row>
        </Container>
      </Navbar>
      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee width="100%" className="text-danger" direction="right">
        For any query or information call us at 1800 - **** - **** to our
        customer helpline number.{" "}
      </marquee>

      <Card>
        <Navbar {...args} expand="md" className={styles.nav}>
          <Container>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink className={styles.navlinks} href="/">
                   <FaHome size={23} className="mb-1 "/> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.navlinks} href="/about">
                   <BiInfoCircle size={23} className="mb-1 "/> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.navlinks} href="/contact">
                  <MdWifiCalling3 size={23} className="mb-1 mx-1 "/>Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.navlinks} href="/faq">
                  <BsFillQuestionDiamondFill size={20} className="mb-1 mx-1"/>FaQ's
                  </NavLink>
                </NavItem>
              </Nav>
              <List type="inline">
                <ListInlineItem>
                  <NavLink  href="/signup">
                  <Button color="warning" outline className="rounded-pill fw-bold px-4">
                    Register
                  </Button>
                  </NavLink>
                </ListInlineItem>
                <ListInlineItem className="mt-2">
                    <NavLink href="/login">
                  <Button outline color="warning" className="rounded-pill fw-bold px-4">
                      Login
                  </Button>
                    </NavLink>
                </ListInlineItem>
              </List>
            </Collapse>
          </Container>
        </Navbar>
      </Card>
    </>
  );
};

export default PaginationNavbar;
