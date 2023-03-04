import React from 'react'

const Register = () => {
  return (
    <div className="formContainer" >
      <div className="formWrapper">
        <span className="logo" >Ichat</span>
        <span className="title" >Register</span>
        <form>
<input type="text" placeholder="user-name" />
<input type="email"  placeholder="email"/>
<input type="password" placeholder="password" />
<input type="file" />
<button>Sign up</button>
        </form>
        <p>Do you have an account? Login</p>
        <span>weChat</span>
      </div>
    </div>
  )
}

export default Register