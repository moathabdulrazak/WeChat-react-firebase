import React from 'react'
import img from "../img/img.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  return (
    <div className="formContainer" >
      <div className="formWrapper">
        <span className="logo" >WeChat</span>
        <span className="title" >Register</span>
        <form onSubmit={handleSubmit}>
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