import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/sidebar";
import Chatarea from "../../components/chatarea/Chatarea";
import "./home.css";
function Home(){
  return (
  <div className="home">
    <Header />
    <div className="bottomRow">
      <Sidebar />
      <Chatarea />
      
    </div>
  </div>
  );
}

export default Home;








// import {useEffect} from "react";
// import "./home.css"; // Import CSS file
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// const Home = () => {
//   const navigate=useNavigate()

//   useEffect(()=>{
//     var token = localStorage.getItem("token");


//     axios.get("url",{
//       headers:{
//         "Authorization":`Bearer  ${localStorage.getItem("token")}`
//       }
//     }).then(()=>{
//       //add the code in state and display the data in tamle format
//     }).catch(()=>{
//       //show the
//     })

//     alert(token);
//   },[])
//   return (
//     <div className="container">
//       <button onClick={()=>{
//         navigate("/signin")
//         localStorage.removeItem("token")
//       }} style={{padding:"7px 20px",color:"red",border:"3px solid red"}}>
//        Logout
//       </button>
//       <h1>Welcome to My Website</h1>
//       <p>This is a simple homepage built with React!</p>



//       <button className="btn">Get Started</button>
//     </div>
//   );
// };

// export default Home;

