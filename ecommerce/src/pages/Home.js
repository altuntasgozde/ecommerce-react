import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardItem } from "../components/CardItem";
import { NavbarItem } from "../components/NavbarItem";

export const Home = (props) => {
    
  return (
    <div>
      <NavbarItem />
      <Container className="mt-5">
        <Row>
          {props.data.map((item) => (
            <Col md={4} key={item.id}>
              <div>
                <CardItem item={item} AddCart={props.AddCart} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
