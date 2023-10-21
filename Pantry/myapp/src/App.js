import Form from "./components/Form";
<<<<<<< HEAD
import Login from "./components/LoginForm";
import Register from "./components/SignUpForm";
// import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import navbar
=======
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";

>>>>>>> 2ef8b4f90fcb3ab9f72dbb6a4e969c8805540b54

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
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
<<<<<<< HEAD
    <BrowserRouter>
    {/* <NavBar/> */}
    <Routes>
        <Route path="/form" element={<Form getAllProducts={getAllProducts} />}/>
        {/* <Route path="/" element={<ProductList products={products} getAllProducts={getAllProducts} />}/> */}
        {/* <Route path="/login" element={<Login Login={Login}/>}/>
        <Route path="/register" element={<Register Register={Register}/>}/> */}
    </Routes>
    </BrowserRouter>
=======
    <div className="App">
      <Form getAllProducts={getAllProducts} />
      <ProductList products={products} getAllProducts={getAllProducts} />
      
    </div>
>>>>>>> 2ef8b4f90fcb3ab9f72dbb6a4e969c8805540b54
  );
}

export default App;
