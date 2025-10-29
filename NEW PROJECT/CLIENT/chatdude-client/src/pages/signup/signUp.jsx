// import React, { useState } from 'react';
// // import Signin from '../signin/signin';
// import"./signUp.css";
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

// function SignUp() {
//     let nav = useNavigate();
//     const[error,setError]=useState(false);
//     const[user,setUser] = useState({
//      fname:"",
//      lname:"",
//      gender:"",
//      email:"",
//      password:"",
//      phone:"",
//     });

//     const getNewUser = ()=>{
//         // vaidate the data:validation : Regex
//       axios.post("http://localhost:7979/api/users/Signup",user).then((res)=>{
//         if(res.data.results){
//             toast("Account Created successfully",{
//                 style:{
//                     color:"white",
//                     backgroundColor:"green",
//                     fontWeight:"bold",
//                     fontStyle:"cursive"
//                 }
//             });
//             setTimeout(()=>{
//                 Navigate("/signin");
//             },2000);
//             //navigateuser to login page
//         // alert('working')
//         nav("/signin")
//         // console.log(res.data.results);
//         setUser({
//             fname:"",
//             lname:"",
//             gender:"",
//             email:"",
//             password:"",
//             phone:"",
//           });
//         }else{
//             alert('not working')
//         }
        

//       }).catch((error)=>{
//         console.log(error);
//         setError(true);
//       });
   
//     };
//     return(
//         <div className="main-signup-container">
//             <div className='signup-container'>
//             <h2 className='head'>Signup Page</h2>
//             <form>
//                 <div>
//                     <input type="text" onChange={(event) =>{
//                         setUser({...user,fname:event.target.value});
//                     }} value={user.fname} placeholder='first name' />
//                 </div>
//                 <div>
//                     <input type="text" onChange={(event) => {setUser({...user,lname:event.target.value});
//                 }} value={user.lname} placeholder='last name' />
//                 </div>
//                 <div style={{display:"flex"}} className="gender">
//                     <div>
//                         <input type="radio" checked={user.gender === "male"} onChange={(event) => {setUser({...user,gender:event.target.value});
//                     }} name='gender' value={"male"} />
//                         <label>male</label>
//                     </div>

//                     <div>
//                         <input type="radio" checked={user.gender === "female"} onChange={(event) => {setUser({...user,gender:event.target.value});
//                      }}   name='gender' value={"female"}/>
//                         <label>female</label>
//                     </div>

//                     <div>
//                         <input type="radio" checked={user.gender === "other"} onChange={(event) => {setUser({...user,gender:event.target.value});
//                     }}  name='gender' value={"other"} />
//                         <label>other</label>
//                     </div>
//                 </div>
//                 <div>
//                     <input type="email" onChange={(event) => {setUser({...user,email:event.target.value});
//                 }} value={user.email} placeholder='Gamil' />
//                 </div>

//                 <div>
//                     <input type='password' onChange={(event) => {
//                         setUser({...user,password:event.target.value});
//                     }} value={user.password} placeholder='password' />
//                 </div>
//                 <div>
//                     <input type="text" onChange={(event) =>{setUser({...user,phone:event.target.value});
//                 }} value={user.phone} placeholder='number' />
//                 </div>
//                 <div className="button">
//                     <input type="button" value="signup" onClick={getNewUser}/>
//                 </div>
//             </form>
//             <button style={{padding:"10px",margin:"10px"}} onClick={()=>{nav("/")}}>All Ready Account Created</button>
//         </div>
//         {
//             error ?(
//                  <div style={{textAlign:"center"}}>
//             <h2 style={{color:"red",fontSize:"28px"}}>Failed to create Account</h2>
//         </div> 
//             ) : null }


//         </div>
//     );
// }
// export default SignUp;



import React, { useState } from 'react';
import "./signUp.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SignUp() {
    const nav = useNavigate();
    const [error, setError] = useState(false);
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        gender: "",
        email: "",
        password: "",
        phone: "",
    });

    const getNewUser = () => {
        axios.post("http://localhost:7979/api/users/Signup", user)
            .then((res) => {
                if (res.data.success) { // Assuming success is the key for success response
                    toast("Account Created successfully", {
                        style: {
                            color: "white",
                            backgroundColor: "green",
                            fontWeight: "bold",
                        }
                    });
                    setTimeout(() => {
                        nav("/signin");
                    }, 2000);
                    setUser({
                        fname: "",
                        lname: "",
                        gender: "",
                        email: "",
                        password: "",
                        phone: "",
                    });
                } else {
                    toast.error('Failed to create account');
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error('An error occurred');
                setError(true);
            });
    };

    return (
        <div className="main-signup-container">
            <div className='signup-container'>
                <h2 className='head'>Signup Page</h2>
                <form>
                    <div>
                        <input
                            type="text"
                            onChange={(event) => { setUser({ ...user, fname: event.target.value }); }}
                            value={user.fname}
                            placeholder='First Name'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={(event) => { setUser({ ...user, lname: event.target.value }); }}
                            value={user.lname}
                            placeholder='Last Name'
                        />
                    </div>
                    <div style={{ display: "flex" }} className="gender">
                        <div>
                            <input
                                type="radio"
                                checked={user.gender === "male"}
                                onChange={(event) => { setUser({ ...user, gender: event.target.value }); }}
                                name='gender'
                                value={"male"}
                            />
                            <label>Male</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                checked={user.gender === "female"}
                                onChange={(event) => { setUser({ ...user, gender: event.target.value }); }}
                                name='gender'
                                value={"female"}
                            />
                            <label>Female</label>
                        </div>

                        <div>
                            <input
                                type="radio"
                                checked={user.gender === "other"}
                                onChange={(event) => { setUser({ ...user, gender: event.target.value }); }}
                                name='gender'
                                value={"other"}
                            />
                            <label>Other</label>
                        </div>
                    </div>
                    <div>
                        <input
                            type="email"
                            onChange={(event) => { setUser({ ...user, email: event.target.value }); }}
                            value={user.email}
                            placeholder='Email'
                        />
                    </div>
                    <div>
                        <input
                            type='password'
                            onChange={(event) => { setUser({ ...user, password: event.target.value }); }}
                            value={user.password}
                            placeholder='Password'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={(event) => { setUser({ ...user, phone: event.target.value }); }}
                            value={user.phone}
                            placeholder='Phone Number'
                        />
                    </div>
                    <div className="button">
                       
                        <input
                            type="button"
                            value="Signup"
                            onClick={getNewUser}
                          
                        />
                    </div>
                </form>
                <button style={{ padding: "10px", margin: "10px" }} onClick={() => { nav("/") }}>
                    Already Have an Account? Sign In
                </button>
            </div>
            {error && (
                <div style={{ textAlign: "center" }}>
                    <h2 style={{ color: "red", fontSize: "28px" }}>Failed to Create Account</h2>
                </div>
            )}
        </div>
    );
}

export default SignUp;