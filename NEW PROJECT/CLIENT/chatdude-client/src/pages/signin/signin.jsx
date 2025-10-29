import { useState } from "react";
import "./signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signin()  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    //validate data

    
    // setError("");

    axios.post("http://localhost:7979/api/users/signin",{email,password})
    .then((resp)=>{
      if(resp.data.ok){
        //navigate to HomePage
        console.log("hhhhhh",resp.data);
       localStorage.setItem("token",resp.data.result)
        navigate("/home");
      }else{
        toast("User does not exist", {
          style:{
              color:"white",
              backgroundColor:"green",
              fontWeight:"bold",
              fontStyle:"cursive"
          }
      });

        // alert("invalid")
        //show error notificaton
      }

      // alert("Successful");
      // console.log(data);
    })
  

    .catch((error)=>{
      console.log(error);
      toast("user does not exist")
      alert("error");
    });
    


    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    // alert("Signin successful (mockup)");
// navigate("/home")
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Login</h2>
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="input-field"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <br />
          <button type="submit" className="signin-button">Signin</button>
        </form>
        <br />
        <button style={{padding:"10px",margin:"10px"}} onClick={()=>{navigate("/signup")}}>Create new user</button>
      </div>
    </div>
  );
};


// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// const Signin = () => {
//     const navigate = useNavigate();
//     const [state, setState] = useState({
//         email: '',
//         password: '',
//     });
   
//     function CheckCredentials(event) {

       
//         event.preventDefault();
//         axios.post('http://localhost:7979/api/users/signin', state)
//             .then((res) => {
//               console.log(res)
//                 if (res.data.ok) {
//                     alert('User valid');
//                     localStorage.setItem("token-key", res.data.result);
//                     navigate('/home');
//                 } else {
//                     alert("User invalid");
//                 }
//             })
//             .catch(() => {
//                 console.log('Error');
//             });
//     }

//     return (
//         <div style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//             background: "linear-gradient(135deg, #e3f2fd, #90caf9)",
//             fontFamily: "Segoe UI, sans-serif"
//         }}>
//             <div style={{
//                 backgroundColor: "#fff",
//                 padding: "30px",
//                 borderRadius: "12px",
//                 boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//                 width: "100%",
//                 maxWidth: "400px",
//                 textAlign: "center"
//             }}>
//                 <h2 style={{ color: "#1976d2", marginBottom: "20px" }}>Welcome Back</h2>
//                 <form onSubmit={CheckCredentials}>
//                     <div style={{ marginBottom: "20px", textAlign: "left" }}>
//                         <label htmlFor="email" style={{ fontWeight: "600", color: "#444", fontSize: "14px" }}>Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             placeholder="Enter your email"
//                             style={{
//                                 width: "100%",
//                                 padding: "10px",
//                                 marginTop: "5px",
//                                 borderRadius: "6px",
//                                 border: "1px solid #ccc",
//                                 outline: "none",
//                                 fontSize: "14px"
//                             }}
//                             onChange={(e) => setState({ ...state, email: e.target.value })}
//                             required
//                         />
//                     </div>
//                     <div style={{ marginBottom: "20px", textAlign: "left" }}>
//                         <label htmlFor="password" style={{ fontWeight: "600", color: "#444", fontSize: "14px" }}>Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             placeholder="Enter your password"
//                             style={{
//                                 width: "100%",
//                                 padding: "10px",
//                                 marginTop: "5px",
//                                 borderRadius: "6px",
//                                 border: "1px solid #ccc",
//                                 outline: "none",
//                                 fontSize: "14px"
//                             }}
//                             onChange={(e) => setState({ ...state, password: e.target.value })}
//                             required
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         style={{
//                             backgroundColor: "#1976d2",
//                             color: "#fff",
//                             padding: "12px",
//                             width: "100%",
//                             border: "none",
//                             borderRadius: "6px",
//                             fontSize: "15px",
//                             fontWeight: "600",
//                             cursor: "pointer",
//                             transition: "background-color 0.3s ease"
//                         }}
//                         onMouseOver={(e) => e.target.style.backgroundColor = "#1565c0"}
//                         onMouseOut={(e) => e.target.style.backgroundColor = "#1976d2"}
//                     >
//                         Login
//                     </button>
//                 </form>
//                 <div style={{ marginTop: "15px" }}>
//                     <Link to="" style={{ fontSize: "13px", color: "#1976d2", textDecoration: "none" }}>
//                         Forgot Password?
//                     </Link>
//                 </div>
//                 <div style={{ marginTop: "10px" }}>
//                     <span style={{ fontSize: "13px", color: "#555" }}>
//                         Don't have an account?
//                     </span>
//                     <Link to="/signup" style={{ fontSize: "13px", color: "#1976d2", textDecoration: "none", marginLeft: "5px" }}>
//                         Sign Up
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signin;