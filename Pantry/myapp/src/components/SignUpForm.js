import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();
        let res = await axios.post("http://localhost:8000/products/register", {email, password});
        alert(res.data.msg);
        navigate("/login");
    } 
    
    return (
    <div>
        <form onSubmit={handleRegister} value="SignUpForm">
            <h2>Sign Up</h2>
            <label>Email</label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>Password</label>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value="Sign Up"/>
        </form>
    </div>
    )
};

export default Register;