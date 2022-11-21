import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";


export const CardItem = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.item.attributes.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.item.attributes.price}
          </Card.Subtitle>
          <Card.Text>{props.item.attributes.features}</Card.Text>
          <Button onClick={() => props.AddCart(props.item.id)} variant="dark">Add Cart</Button>

        </Card.Body>
      </Card>
    </div>
  );
};
