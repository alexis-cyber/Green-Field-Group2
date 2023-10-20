import Form from "./components/Form";
// import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";
import Form from "../src/components/Form";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    try {
      await axios
        .get("http://localhost:8000/products")
        .then((res) => setProducts(res.data));
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="App">
      <Form getAllProducts={getAllProducts} />
      {/* <ProductList products={products} getAllProducts={getAllProducts} /> */}
      
    </div>
  );
}

export default App;
