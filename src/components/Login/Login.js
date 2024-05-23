// import React, { useState } from "react";
// import "./Login.css";
// import { toast } from "react-toastify";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth, db } from "../../library/firebase";
// import { doc, setDoc } from "firebase/firestore";
// import upload from "../../library/upload";

// function Login() {
//   const [avatar, setAvatar] = useState({ file: null, url: "" });
//   const [loading, setLoading] = useState(false);

//   const handleAvatar = (e) => {
//     if (e.target.files[0]) {
//       setAvatar({
//         file: e.target.files[0],
//         url: URL.createObjectURL(e.target.files[0]),
//       });
//     }
//   };

//   //userLogin
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const formData = new FormData(e.target);
//     const { password, email } = Object.fromEntries(formData);
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       toast.success("Login Success!");
//     } catch (err) {
//       console.log(err);
//       toast.error(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   //user registration
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const formData = new FormData(e.target);
//     const { username, password, email } = Object.fromEntries(formData);
//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);

//       const imgUrl = await upload(avatar.file);

//       await setDoc(doc(db, "users", res.user.uid), {
//         username,
//         email,
//         avatar: imgUrl,
//         id: res.user.uid,
//         blocked: [],
//       });
//       await setDoc(doc(db, "userchats", res.user.uid), {
//         chats: [],
//       });

//       toast.success("Account created! You can Login now!");
//     } catch (err) {
//       console.log(err);
//       toast.error(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-1">
//       <div className="main">
//         <input type="checkbox" id="chk" aria-hidden="true" />
//         <div className="signup">
//           <form onSubmit={handleRegister}>
//             <label for="chk" aria-hidden="true" className="signuplabel">
//               Signup
//             </label>
//             <div className="fileupload">
//               <label htmlFor="file">
//                 <img src={avatar.url || "img/avatar.png"} alt="" />
//                 <span>Upload an image</span>
//               </label>
//               <input
//                 type="file"
//                 id="file"
//                 style={{ display: "none" }}
//                 onChange={(e) => handleAvatar(e)}
//               />
//             </div>
//             <input
//               type="text"
//               placeholder="Username"
//               name="username"
//               required
//             />
//             <input type="email" placeholder="Email" name="email" required />
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               required
//             />
//             <button disabled={loading}>
//               {loading ? "Loading" : "Sign Up"}
//             </button>
//           </form>
//         </div>
//         <div className="login">
//           <div className="logindiv">
//             <form onSubmit={handleLogin}>
//               <label for="chk" aria-hidden="ture">
//                 Login
//               </label>
//               <input type="email" placeholder="Email" name="email" required />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 required
//               />
//               <button disabled={loading}>
//                 {loading ? "Loading" : "Sign In"}
//               </button>
//             </form>
//           </div>
//           <div className="loginimg">
//             <img
//               src="https://i.postimg.cc/90f4gmkX/Computer-login-cuate.png"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../library/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../library/upload";
import { useState } from "react";






function Login() {
  const [avatar,setAvatar]=useState({
    file:null,
    url:" "
  })

  const [loading,setLoading]=useState(false)


  const handleAvatar=e=>{
    if(e.target.files[0]){
      setAvatar({
        file:e.target.files[0],
        url: URL.createObjectURL(e.target.files[0])
      })
    }
   
  }

  

  const handleRegister=async(e)=>{
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target)
    const {username,email,password} = Object.fromEntries(formData)
    // console.log(username);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can Login now!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }

  }

    




  

  const handleLogin = async(e) =>{
    e.preventDefault()
    setLoading(true);
    const formData = new FormData(e.target);
    const { password, email } = Object.fromEntries(formData);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
    
  }

  

  return (
    <div className='login'>
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder='Email' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <button disabled={loading}>{loading ? "Loading" : "Sign In"}</button>
        </form>
      </div>
      <div className="seperator"></div>
      <div className="item">
      <h2>Create an Account</h2>
        <form onSubmit={handleRegister} >
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload Image</label>
          <input type="file" id='file' style={{display:'none'}} onChange={handleAvatar} />
        <input type="text" placeholder='UserName' name='username' />

          <input type="text" placeholder='Email' name='email' />
          <input type="password" placeholder='Password' name='password' />
          <button disabled={loading}>{loading ? "Loading" : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
}

export default Login

