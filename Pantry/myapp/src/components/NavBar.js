import { Link, useNavigate } from "react-router-dom";
import jwtDecode from 'jwt-decode';

function Navbar() {
  const navigate = useNavigate();
  let token;
  let decoded;
  
  try {
  // Check if a token exists in local storage
  token = localStorage.getItem('token');
  decoded = jwtDecode(token);
  } catch (err) {
    console.log(err);
  }

    function handleLogout() {
      if (token) {
        localStorage.removeItem("token");
        navigate("/login");
        window.location.reload()
      } else {
        return;
      }
    }

  return (
    <>       
    {!token ? ( 
      <nav>
        <div>
          <Link to="/">Home</Link>
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
     ) : (
        <nav>
          <div>
            <Link>{decoded.email}</Link>
            <Link to="/">Home</Link>
            <Link to="/form">Create</Link>
            <Link onClick={handleLogout}>Log Out</Link>
          </div>
        </nav> 
      )}
  </>
  );
}

export default Navbar;
