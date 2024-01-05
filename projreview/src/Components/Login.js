import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = formData;

    try {
      // Fetch user data from JSON file (replace with your actual API endpoint)
      const response = await axios.get('/path-to-your-api/users.json');

      const isValidUser = response.data.users.some(
        (user) => user.email === email && user.password === password
      );

      if (isValidUser) {
        alert('Login successful');
        window.location.href = '/home';
      } else {
        alert('Invalid credentials');
        // Handle invalid credentials (show an error message, etc.)
      }
    } catch (error) {
      console.error('Error fetching user data', error);
      // Handle error scenarios (show an error message, etc.)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container ">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <fieldset className="border p-3 rounded">
          <form onSubmit={handleSubmit}>
            <div className="box">
              <h1 className="text-center">Login</h1>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Username/Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Username/Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                <Link to='/home' className="btn btn-primary">
                Login
                </Link>
              </button>

              <p className="mt-3 text-center">
                Not a member?{' '}
                <span>
                  <Link to="/register" className="btn btn-primary">
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default Login;
