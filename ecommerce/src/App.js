import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import "./App.css";
import { NewProduct } from "./pages/NewProduct";

function App() {
  const [data, setData] = useState([]);
  const [cartArray, setCartArray] = useState([]);

  // Getting product data
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/products")
      .then((response) => setData(response.data.data));
  }, []);

  // Add cart
  const AddCart = (id) => {
    const product = data.filter((item) => item.id == id);

    if (cartArray.some((item) => item.id == id)) {
      product[0].attributes.count++;
    } else {
      setCartArray((oldArray) => [...oldArray, product[0]]);
      product[0].attributes.count++;
    }
  };

  // Delete from cart
  const DeleteProduct = (id) => {
    setCartArray(cartArray.filter(item => item.id !== id))
  }

  // // New product
  // const AddNewProduct = (statevalue) => {
  //   console.log(statevalue)
  // }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home AddCart={AddCart} data={data} />} />
        <Route path="/cart" element={<Cart cartArray={cartArray} DeleteProduct={DeleteProduct}/>} />
        <Route path="/newproduct" element={<NewProduct 
        // AddNewProduct={AddNewProduct} 
        />} />

      </Routes>
    </div>
  );
}

export default App;
