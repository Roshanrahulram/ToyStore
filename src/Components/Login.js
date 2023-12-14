import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './assets/login.css';

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Form submitted');
  };

  return (
    <div className="container">
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
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Username/Email"
                  name="email"
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
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
              <Link to='./home'>Login</Link>
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
