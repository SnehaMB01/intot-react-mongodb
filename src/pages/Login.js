import React from 'react'
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <React.Fragment>

          <div class="signup-box"  style={{backgroundColor:"#c4d70f",height:"820px", clipPath: " polygon(0 0,100% 0,100% 75%,0 100%)"}} >
          <h1 style={{paddingTop:"80px"}}>Hello...</h1>
          <h4><br />Login</h4>
          <form>
             
              <label><br />Email</label><br />
              <input type="email" placeholder="" style={{borderColor:"white"}}/><br />
              <label><br />Password</label><br />
              <input type="password" placeholder="" style={{borderColor:"white"}}/><br /><br />
              <input type="button" value="Submit" style={{borderColor:"white"}}/>
          </form>
          <p><br />
              If you doesn't have an account then <Link to= "/signup">Sign Up
              </Link>    <br />
              <a href="/">Terms and Condition</a> and <a href="/">Policy Privacy</a>
          </p>
          </div>
          </React.Fragment>
  );
}
