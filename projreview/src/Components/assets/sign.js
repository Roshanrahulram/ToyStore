import { Link } from 'react-router-dom';
import axios from 'axios';

function Registration() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get form data
    const formData = {
      username: event.target.username.value,
      email: event.target.email.value,
      mobileNo: event.target.mobileNo.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmpassword.value,
    };

    try {
      // Send registration data to the server (replace with your actual API endpoint)
      const response = await axios.post('/path-to-your-api/register', formData);

      if (response.status === 200) {
        console.log('Registration successful');
        // Redirect or show success message
      } else {
        console.log('Registration failed');
        // Handle registration failure (show an error message, etc.)
      }
    } catch (error) {
      console.error('Error during registration', error);
      // Handle error scenarios (show an error message, etc.)
    }
  };

  return (
    <div className="body-content">
      <div className="module">
        <form className="form" onSubmit={handleSubmit} encType="multipart/form-data" autoComplete="off">
          <fieldset className="border p-4 rounded">
            <h1>Sign Up</h1>
            <div className="alert alert-error"></div>
            <input type="text" placeholder="User Name" name="username" required />
            <input type="email" placeholder="Email" name="email" required />
            <input type="text" placeholder="Mobile no" name="mobileNo" required />
            <input type="password" placeholder="Password" name="password" autoComplete="new-password" required />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmpassword"
              autoComplete="new-password"
              required
            />
            <button type="submit" className="btn btn-block btn-primary">
              <Link to="/" className="btn btn-primary">
                Register
              </Link>
            </button>
            {/* Using Link to navigate to the home page */}
            <Link to="/">Already have an account? Login</Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Registration;
