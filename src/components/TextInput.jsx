import React from 'react'
import Img from "../img/img.png"
const TextInput = () => {
  return (
    <div className="input" >
    <input type="text" placeholder="message" />
    <div className="send">
      <input type="file" style={{display:"none"}} id="file" />
      <label htmlFor="file">
        <img src={Img} alt="" />
      </label>
      <button>send</button>
    </div>
    </div>
  )
}

export default TextInput