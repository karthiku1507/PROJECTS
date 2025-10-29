import React from "react";
import { useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux'
import "./Header.css";
function Header(){
    const navigate=useNavigate();
    const userName = useSelector((state) => state.Reducer.data?.last_name || "");
    const userNames = useSelector((state) => state.Reducer.data?.image_url || "");
    return (
        <div className="header">
            <div className="brand">
            <i class="bi bi-send-check-fill">&nbsp;Chat Dude</i>
            </div>
            <div className="options">
                
                <img src={userNames} width={50} height={50}/>
                <h2>{userName}</h2>
                <i class="bi bi-power" onClick={()=>{ 
                    localStorage.removeItem("token")
                    navigate("/");
                }}></i>
            </div>
        </div>
        
    )
}


export default Header;