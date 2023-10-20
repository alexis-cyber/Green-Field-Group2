import { useState } from "react";
import axios from "axios";

function Form({ getAllProducts }) {
    const [product, setProduct] = useState({
        name: "",
        expirationDate: Date,
        category: "",
    });

    function handleInputChange(e) {
        const value = e.target.value;
        setProduct({
            ...product, [e.target.name]: value,
        });
    }

    const addNewProduct = (e) => {
        e.preventDefault();
        axios
        .post("")
        .then(() => { 
            getAllProducts();
        })
        .catch((err) => console.log(err));
    }

    return (
        <div>
            <div className="formContainer">
                <form>
                    <label>Product Name</label><br/>
                    <input type="text" name="name" onChange={handleInputChange} value={product.name}/>
                    <label>Expiration Date</label><br/>
                    <input type="date" name="expirationDate" onChange={handleInputChange} value={product.expirationDate}/>
                    <label>Product Category</label><br/>
                    <input type="text" name="category" onChange={handleInputChange} value={product.category}/>
                    <button type="submit" onClick={(e) => {addNewProduct(e)}}>Add</button>
                </form>
            </div>
        </div>
    );
}

export default Form;