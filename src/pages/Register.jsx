import React from 'react'
import img from "../img/img.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const Register = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]
try {

  const res = await createUserWithEmailAndPassword(auth, email, password)
  
      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            // await setDoc(doc(db, "users", res.user.uid), {
            //   uid: res.user.uid,
            //   displayName,
            //   email,
            //   photoURL: downloadURL,
            // });

            //create empty user chats on firestore
          } catch (err) {
    console.log(err);
          }
        });
      });
} catch (error) {
  
}

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