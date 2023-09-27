const Register = () => {
  return (
  <form action="action_page.php" method="post">
    <center>
      <h1>Register</h1>
    </center>

    <div class="container">
      <label for="uname">
        <b>Username</b>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
        />{" "}
      </label>
      <label for="email">
        <b>Email</b>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          required
        />{" "}
      </label>

      <label>
        <b>Password</b>

        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
      </label>
      <label>
        <b>Re-Password</b>

        <input
          type="password"
          placeholder="Enter Password"
          name="Re_password"
          required
        />
      </label>
      <label>
      
        <button type="submit">Register</button> 
      </label>
    </div>
  </form>);
};

export default Register;
