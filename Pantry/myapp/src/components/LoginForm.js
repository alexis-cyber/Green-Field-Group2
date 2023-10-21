import { useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let token;
    let decoded;

    async function handleLogin(e) {
        e.preventDefault();
        let res = await axios.post("http://localhost:8000/login", { email, password });
        token = res.data;
        localStorage.setItem("token", token);
        decoded = jwt_decode(token);
    }

    return (
        <div>
            <form>
                <h2>Log in</h2>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input type="submit" onClick={(e) => handleLogin(e)}>Log in</input>
            </form>
        </div>
    );
}

export default Login;