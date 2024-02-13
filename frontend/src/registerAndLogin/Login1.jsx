import React from 'react'
import '../stylesheets/Login1.css';

const Login1 = () => {
  return (
    <div className='body1'>
  <div className="container">  	
  <input type="checkbox" id="chk" aria-hidden="true" />
  <div className="signup">
    <form action='/api/register' method='post'>
      <label htmlFor="chk" aria-hidden="true">Sign up</label>
      <input type="text" name="txt" placeholder="User name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="pswd" placeholder="Password" required />
      <button>Sign up</button>
    </form>
  </div>
  <div className="login">
    <form action='/api/login' method='post'>
      <label htmlFor="chk" aria-hidden="true">Login</label>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="pswd" placeholder="Password" required />
      <button>Login</button>
    </form>
  </div>
</div>
</div>

  )
}

export default Login1