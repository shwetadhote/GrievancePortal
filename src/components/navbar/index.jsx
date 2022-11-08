import React, { useState } from "react";
import styles from "./styles.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarText,
  NavLink,
  Container,
  List,
  ListInlineItem,
  CardLink,
  Card,
  Button,
  // Dropdown
} from "reactstrap";
import logo from "../../assets/Images/logo.png";

const PaginationNavbar = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar>
        <Container>
          <NavbarBrand href="#home" className="mx-5">
            <img alt="" src={logo} width="70" height="90" />{" "}
            <NavbarText className="mx-3 text-danger fw-bold">
              Public Grievance Portal
            </NavbarText>
          </NavbarBrand>
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
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.navlinks} href="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.navlinks} href="/contact">
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={styles.navlinks} href="/faq">
                    FaQ's
                  </NavLink>
                </NavItem>
              </Nav>
              <List type="inline">
                <ListInlineItem>
                  <Button color="warning" outline className="rounded-pill px-4">Register</Button>
                </ListInlineItem>
                <ListInlineItem className="mt-2">
                  <Button
                    outline
                    color="warning"
                    className="rounded-pill px-4"
                  >
                    Login
                  </Button>
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
