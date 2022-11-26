import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { NavbarItem } from "../components/NavbarItem";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import axios from "axios";

export const NewProduct = (props) => {
  const [product, setProduct] = useState({
    title: "",
    features: "",
    price: "",
  });

  // const [newProduct, setNewProduct] = useState([]);

  // Input value
  const GetValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    product[name] = value;
    setProduct(product);
  };

  const AddProduct = (e) => {
    console.log(product);

      axios.post('http://localhost:1337/api/products', {
        'data': {
          title: product.title,
          features: product.features,
          price: product.price,
        },
      }).then(res => console.log(res));
  
    e.preventDefault();
  };

  return (
    <div>
      <NavbarItem />
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <Form onSubmit={AddProduct}>
              <Form.Group className="mb-3">
                <Form.Label>Product name</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={GetValue}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Features</Form.Label>
                <Form.Control
                  type="text"
                  name="features"
                  placeholder="Features"
                  onChange={GetValue}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  placeholder="Price"
                  onChange={GetValue}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
