import React from "react";

function Login() {
  return (
    <div className="flex " style={{ height: "100vh" }}>
      <div class="ring bg-black m-auto   ">
        <div class="login">
          <h2>Login</h2>
          <div class="inputBx">
            <input type="text" placeholder="Username" />
          </div>
          <div class="inputBx">
            <input type="password" placeholder="Password" />
          </div>
          <div class="inputBx">
            <input type="submit" value="Sign in" />
          </div>
          <div class="links">
            <a href="#">Contract Admintstrator</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
