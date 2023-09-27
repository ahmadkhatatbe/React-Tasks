const Login = () => {
  return (
    
    <form action="action_page.php" method="post">
      <center>
      <h1>Login</h1>
    </center>

      <div class="container">
        <label for="uname">
          <b>Username</b>
       
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
        /> </label>

        <label >
          <b>Password</b>
        
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
</label>

        <button type="submit">Login</button>
        
         
 <label>Remember me
        <input type="checkbox" checked="checked" name="remember"  />
      </label>
        
      </div>

      <div class="container">
        <button type="button" class="cancelbtn">
          Cancel
        </button>
        <span class="psw">
          Forgot <a href="#">password?</a>
        </span>
      </div>
    </form>
  );
};

export default Login;
