import React from "react";
import {
  Card,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container,
  UncontrolledAccordion,
  CardLink,
} from "reactstrap";
import styles from "./styles.module.css";

const FaQ = () => {
  return (
    <>
      <Card className={styles.faqsHead} body>
        <CardTitle className="text-body mb-0" tag="h3">
          Frequently asked questions
        </CardTitle>
        <Breadcrumb>
          <BreadcrumbItem href="#" tag="a">
            Home
          </BreadcrumbItem>
          <BreadcrumbItem href="#" tag="a" active>
            FaQ
          </BreadcrumbItem>
        </Breadcrumb>
      </Card>
      <Container>
        <Card body className={styles.cardBody}>
          <UncontrolledAccordion flush defaultOpen="1">
            <AccordionItem>
              <AccordionHeader targetId="1">
                <Badge color="primary" pill className="mx-3">
                  1
                </Badge>
                Does the website accept payment in any way?
              </AccordionHeader>
              <AccordionBody accordionId="1" className="text-secondary fw-bold">
                No, We dont accept any payment from users as of now, and if
                someone pretends to be us and asks for payment, we are not
                liable for it.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                {" "}
                <Badge color="primary" pill className="mx-3">
                  2
                </Badge>{" "}
                Do you sell anything on the website?
              </AccordionHeader>
              <AccordionBody accordionId="2" className="fw-bold text-secondary">
                No, We dont sell anything on the website, neither we ask you to
                pay for sponsorship of your post..
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                {" "}
                <Badge color="primary" pill className="mx-3">
                  3
                </Badge>{" "}
                How can I start earning?
              </AccordionHeader>
              <AccordionBody accordionId="3" className="text-secondary fw-bold">
                You can start earning from today itself, just show your skills
                and get paid. You can create an account, and start writing, our
                team will review your writing and will publish to the platform
                if all is well, and then based on the views on your post, you
                will get the amount in your account.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="6">
                {" "}
                <Badge color="primary" pill className="mx-3">
                  6
                </Badge>{" "}
                How can I activate/deactivate any withdrawal method?
              </AccordionHeader>
              <AccordionBody accordionId="6" className="text-secondary fw-bold">
                In the list of your withdrawal methods, you can
                deactivate/activate by clicking on the status of the method.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="9">
                {" "}
                <Badge color="primary" pill className="mx-3">
                  9
                </Badge>{" "}
                Where can I see the details about my earnings?
              </AccordionHeader>
              <AccordionBody accordionId="9" className="text-secondary fw-bold">
                You can see the details about your earnings from{" "}
                <CardLink
                  href="https://portal.writearn.in/earnings"
                  target="__blank"
                >
                  Earning Page
                </CardLink>
                , you can see the total amount you earn by a post and how much
                from one post is being withdrawn already.{" "}
              </AccordionBody>
            </AccordionItem>
          </UncontrolledAccordion>
        </Card>
      </Container>
    </>
  );
};

export default FaQ;
