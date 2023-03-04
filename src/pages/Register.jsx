import React from 'react'
import img from "../img/img.png"
const Register = () => {
  return (
    <div className="formContainer" >
      <div className="formWrapper">
        <span className="logo" >Ichat</span>
        <span className="title" >Register</span>
        <form>
<input type="text" placeholder="User Name" />
<input type="email"  placeholder="email"/>
<input type="password" placeholder="password" />
<input style={{display:"none"}} type="file" id="file" />
<label htmlFor="file">
  <img src={img} alt="" />
  <span> Add an avatar</span>
</label>
<button>Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register