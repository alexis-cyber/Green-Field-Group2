import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    // let decoded;

    async function handleLogin(e) {
        try {
            e.preventDefault();
            let res = await axios.post("http://localhost:8000/login", { email, password });
            console.log(res.data);
            if (res.status === 200) {
                localStorage.setItem("token", res.data.token);
                navigate("/");
            }
        } catch (err) {
            alert("Log in failed, check your email or password.");
        }  
    }
        // decoded = jwt_decode(token);
        // console.log(decoded.email);

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>Log in</h2>
                <label>Email</label>
                <input type="text" name={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" value="Log in"/>
            </form>
        </div>
    );
}

export default Login;