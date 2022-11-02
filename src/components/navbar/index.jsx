import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import styles from "./styles.module.css";
import logo from "../../assets/Images/logo.png";

const PaginationNavbar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className="mx-5">
            <img alt="" src={logo} width="80" height="100" />{" "}
            <Navbar.Text className="mx-3 fw-bold">
              Public Grievance Portal
            </Navbar.Text>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
      <marquee width="100%" direction="right">
        For any query or information call us at 1800 - **** - **** to our
        customer helpline number.{" "}
      </marquee>
      <Navbar expand="lg" className={styles.nav}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <nav>
                <ul className={`d-flex ${styles.navbar}`}>
                  <li className={styles.nav_li}>
                    <Link className={styles.nav_link} to="/">
                      Home
                    </Link>
                  </li>
                  <li className={styles.nav_li}>
                    <Link className={styles.nav_link} to="/about">
                      About
                    </Link>
                  </li>
                  <li className={styles.nav_li}>
                    <Link className={styles.nav_link} to="/contact">
                      Contact
                    </Link>
                  </li>
                  <li className={styles.nav_li}>
                    <Link className={styles.nav_link} to="/faq">
                      FaQ's
                    </Link>
                  </li>
                </ul>
              </nav>
            </Nav>
              <li className={styles.nav_li}>
                <Link className={styles.nav_link} to="/login">
                  Login{" "}
                </Link>
              </li>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default PaginationNavbar;
