import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';

function Navbar() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      // Check if a token exists in local storage
      const token = localStorage.getItem('token');
      
      if (token) {
        // Decode the token to get user information
        const decoded = jwtDecode(token);
        setUser(decoded);
      } else {
        setUser(null);
      }
    }, []);
  
  return (
    <nav>
      {/* <ul>
        <li><a href="/login">Home</a></li>
        <li><a href="/create">Create</a></li>
        <li><a href="/products">My Pantry</a></li>
        <li><a href="/form">Create</a></li>
        <li><a href="/">My Pantry</a></li>
        {user ? (
          <li>{user.username}</li> // Display user information if logged in
        ) : (
          <li><a href="/register">Login</a></li> // Display login link if not logged in
        )}
      </ul> */}
      <Link to="/">Home</Link>
      <Link to="/form">Create</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}
export default Navbar;


