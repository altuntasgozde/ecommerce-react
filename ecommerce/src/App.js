import { useEffect, useState } from "react";
import { NavbarItem } from "./NavbarItem";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products")
      .then((response) => setData(response.data.data));
  }, []);

  return (
    <div className="App">
      <NavbarItem />
      {data.map((item) => (
        <div key={item.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{item.attributes.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {item.attributes.price}
              </Card.Subtitle>
              <Card.Text>{item.attributes.features}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default App;
