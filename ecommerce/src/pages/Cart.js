import React from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";
import { NavbarItem } from "../components/NavbarItem";

export const Cart = (props) => {
  return (
    <div>
      <NavbarItem />
      <Table striped bordered hover className="mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Features</th>
            <th>Product Price</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {props.cartArray.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.attributes.count}</td>
                <td>{item.attributes.title}</td>
                <td>{item.attributes.features}</td>
                <td>{item.attributes.price}</td>
                <td><Button onClick={() => props.DeleteProduct(item.id)}>Delete</Button></td>

              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
