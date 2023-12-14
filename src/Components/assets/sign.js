import {Link} from 'react-router-dom'
function Registration(){
    return(
    <div class="body-content">
      <div class="module">
        <fieldset class="form" action="form.php" method="post" enctype="multipart/form-data" autocomplete="off">
        <h1>Sign Up</h1>
          <div class="alert alert-error"></div>
          <input type="text" placeholder="User Name" name="username" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="text" placeholder="Mobile no" name="Mobile no" required />
          <input type="password" placeholder="Password" name="password" autocomplete="new-password" required />
          <input type="password" placeholder="Confirm Password" name="confirmpassword" autocomplete="new-password" required />
          <Link to='/home'><input type="submit" value="Register" name="register" class="btn btn-block btn-primary" /></Link>
        </fieldset>
      </div>
    </div>
    )
    }
    export default Registration;