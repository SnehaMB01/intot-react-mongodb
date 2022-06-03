import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
export default function SignUp() {
  const[input,setInput]=useState(
    {   fname:"",
        email:"",
        password:"",
        cpassword:""
    })
    function handleChange(event)
      {
        const {name,value}=event.target;
        setInput(prevInput=>{
          return {
            ...prevInput,
            [name]:value
          }
        })
      }
    function handleClick(event)
    {
      event.preventDefault();
     const newNote={
      fname:input.fname,
      email:input.email,
      password:input.password,
      cpassword:input.cpassword
     }
     axios.post("http://localhost:3001/create",newNote);
    }
  return (
    
    <React.Fragment>

          <div class="signup-box"  style={{backgroundColor:"#c4d70f",height:"820px", clipPath: " polygon(0 0,100% 0,100% 75%,0 100%)"}} >
          <h1>Sign Up</h1>
          <h4><br />It's free and only takes a minute</h4>
          <form>
              <label><br /> Name</label><br />
              <input type="text"onChange={handleChange} autoComplete='off' value={input.fname} name='fname' placeholder=""style={{borderColor:"white"}}/><br />
              
              <label><br />Email</label><br />
              <input type="email"onChange={handleChange} autoComplete='off' value={input.email} name='email' placeholder="" style={{borderColor:"white"}}/><br />
              <label><br />Password</label><br />
              <input type="password"onChange={handleChange} placeholder="" value={input.password} name='password' style={{borderColor:"white"}}/><br />
              <label><br />Confirm Password</label><br />
              <input type="password"onChange={handleChange} name='cpassword' value={input.cpassword} style={{borderColor:"white"}}/><br /><br />
              <input type="button"onClick={handleClick} value="Submit" style={{borderColor:"white"}}/>
          </form>
          <p><br />
              By clicking the Sign Up button,you agree to our <br />
              <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
        
              Already have an account?<Link to= "/login" style={{textDecoration:"none",paddingLeft:"10px"}}>Login
                                            </Link>
          </p>
          </div>
          </React.Fragment>
  );
}
