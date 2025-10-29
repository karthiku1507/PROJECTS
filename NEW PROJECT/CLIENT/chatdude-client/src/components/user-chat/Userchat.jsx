// import {useState} from "react";
// import "./Userchat.css";
// import { createChat } from "../../services/apiCalls/chats";
// import { useEffect } from "react";
// import fetchChatList from "../../services/fetch";
// import {useSelector} from 'react-redux'
// import store from "../../store/store";
// function Userchat({image,username,lastmessage,id,user}) {
//      const [startchat,setStartChat] = useState(false)
//      const chat = useSelector((state)=> state.chatReducer.result);
//  console.log(chat,'kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk')
//     useEffect(()=>{
//         fetchChatList()
//     },[])

//     const chatExists = chat?.some((chatItem) => chatItem.related_id === id)

//         async function startChat (e) {
//                 e.stopPropagation();
//              try{
//             var res = await createChat({id});
//             if(res.data?.ok) {
//                 setStartChat(true)
                             
//             } else {
//                 throw Error("Failed chat to Start");                
//             }
//         } catch (error) {
//             console.log(error);
//             alert("Failed to start chat");
//         }
//     }
//     return(
//         <div className="userchat">
//             <div className="userimage">
//                 <img src={image} width={57} height={57} />
//             </div>
//             <div className="userdetails">
//                 <h4>{username}</h4>
//                 <span>{lastmessage}</span>
//             </div>
//             <div className="startchat">
//             {
//                 !chatExists && (<button onClick={startChat}>start</button>)
//             }
//             </div>
//         </div>
//     );
// }

// // export default Userchat;
// import React, { useState, useEffect } from "react";
// import "./Userchat.css";
// import { createChat } from "../../services/apiCalls/chats";
// import fetchChatList from "../../services/fetch";
// import { useSelector } from 'react-redux';

// function Userchat({ image, username, lastmessage, id }) {
//     const [startChatHidden, setStartChatHidden] = useState(false);
//     const chat = useSelector((state) => state.chatReducer.result || []);

//     useEffect(() => {
//         fetchChatList();
//     }, []);

//     useEffect(() => {
//         const localFlag = localStorage.getItem(`chat_started_${id}`);
//         if (localFlag === 'true') {
//             setStartChatHidden(true);
//         } else {
//             const chatExists = chat.some(chatItem => chatItem.related_id === id);
//             if (chatExists) {
//                 setStartChatHidden(true);
//                 localStorage.setItem(`chat_started_${id}`, 'true');
//             }
//         }
//     }, [chat, id]);

//     async function startChat(e) {
//         e.stopPropagation();
//         try {
//             const res = await createChat({ id });
//             if (res.data?.ok) {
//                 setStartChatHidden(true);
//                 localStorage.setItem(`chat_started_${id}`, 'true');

//                 // ✅ Save user info to localStorage
//                 localStorage.setItem("active_chat_user", JSON.stringify({
//                     id,
//                     image,
//                     username,
//                     lastmessage
//                 }));

//                 // ✅ Trigger chatarea to refresh
//                 if (typeof window.dispatchChatareaRefresh === "function") {
//                     window.dispatchChatareaRefresh();
//                 }
//             } else {
//                 throw new Error("Chat creation failed");
//             }
//         } catch (err) {
//             console.error(err);
//             alert("Failed to start chat");
//         }
//     }

//     return (
//         <div className="userchat">
//             <div className="userimage">
//                 <img src={image} width={57} height={57} alt="user" />
//             </div>
//             <div className="userdetails">
//                 <h4>{username}</h4>
//                 <span>{lastmessage}</span>
//             </div>
//             <div className="startchat">
//                 {!startChatHidden && (
//                     <button onClick={startChat}>Start</button>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Userchat;
// src/components/Userchat.js
import React, { useState, useEffect } from "react";
import "./Userchat.css";
import { useSelector } from "react-redux";

function Userchat({ image, username, lastmessage, id }) {
  const [startChatHidden, setStartChatHidden] = useState(false);
  const chat = useSelector((state) => state?.chatReducer?.result || []);

  useEffect(() => {
    const localFlag = localStorage.getItem(`chat_started_${id}`);
    if (localFlag === "true") {
      setStartChatHidden(true);
    } else {
      const exists = chat?.some((item) => item.related_id === id);
      if (exists) {
        setStartChatHidden(true);
        localStorage.setItem(`chat_started_${id}`, "true");
      }
    }
  }, [chat, id]);

  const handleClickUser = () => {
    localStorage.setItem(
      "active_chat_user",
      JSON.stringify({ id, image, username, lastmessage })
    );

    if (typeof window.dispatchChatareaRefresh === "function") {
      window.dispatchChatareaRefresh();
    }
  };

  const startChat = async (e) => {
    e.stopPropagation();
    try {
      // simulate backend
      const res = { data: { ok: true } };

      if (res.data?.ok) {
        setStartChatHidden(true);
        localStorage.setItem(`chat_started_${id}`, "true");
        localStorage.setItem(
          "active_chat_user",
          JSON.stringify({ id, image, username, lastmessage })
        );
        if (typeof window.dispatchChatareaRefresh === "function") {
          window.dispatchChatareaRefresh();
        }
      }
    } catch (err) {
      console.error("Chat start failed", err);
    }
  };

  return (
    <div className="userchat" onClick={handleClickUser}>
      <div className="userimage">
        <img src={image} width={57} height={57} alt="User" />
      </div>
      <div className="userdetails">
        <h4>{username}</h4>
        <span>{lastmessage}</span>
      </div>
      <div className="startchat">
        {!startChatHidden && <button onClick={startChat}>Start</button>}
      </div>
    </div>
  );
}

export default Userchat;


2//
// import { useState, useEffect } from "react";
// import "./Userchat.css";
// import { createChat } from "../../services/apiCalls/chats";
// import fetchChatList from "../../services/fetch";
// import { useSelector } from 'react-redux';

// function Userchat({ image, username, lastmessage, id }) {
//     const [startChatHidden, setStartChatHidden] = useState(false);
//     const chat = useSelector((state) => state.chatReducer.result || []);

//     // Fetch chat list when the component mounts
//     useEffect(() => {
//         fetchChatList();
//     }, []);

//     // Check if chat exists or if it's saved in localStorage
//     useEffect(() => {
//         const localFlag = localStorage.getItem(`chat_started_${id}`);
//         if (localFlag === 'true') {
//             setStartChatHidden(true);
//         } else {
//             const chatExists = chat.some(chatItem => chatItem.related_id === id);
//             if (chatExists) {
//                 setStartChatHidden(true);
//                 localStorage.setItem(`chat_started_${id}`, 'true'); // Optional: sync localStorage
//             }
//         }
//     }, [chat, id]);

//     async function startChat(e) {
//         e.stopPropagation();
//         try {
//             const res = await createChat({ id });
//             if (res.data?.ok) {
//                 setStartChatHidden(true);
//                 localStorage.setItem(`chat_started_${id}`, 'true'); // Save flag
//             } else {
//                 throw Error("Failed to start chat");
//             }
//         } catch (error) {
//             console.error(error);
//             alert("Failed to start chat");
//         }
//     }
// function handlechat(){

// }
//     return (
//         <div className="userchat" onClick={handlechat}>
//             <div className="userimage">
//                 <img src={image} width={57} height={57} />
//             </div>
//             <div className="userdetails">
//                 <h4>{username}</h4>
//                 <span>{lastmessage}</span>
//             </div>
//             <div className="startchat">
//                 {!startChatHidden && (
//                     <button onClick={startChat}>Start</button>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Userchat;

// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import store from "../../store/store";
// import { chatActionCreator } from "../../action-creators/chatActionCreator";
// import { createChat } from "../../services/apiCalls/chats";
// import fetchChatList from "../../services/fetch";
// import "./Userchat.css";

// function Userchat({ image, username, lastmessage, id }) {
//     const dispatch = useDispatch();
//     const [startchat, setStartChat] = useState(false);
//     const chat = useSelector((state) => state.chatReducer.result);

//     useEffect(() => {
//       fetchChatList()
//     }, []);

//     const chatExists = chat?.some((chatItem) => chatItem.related_id === id);

//     async function startChat(e) {
//         e.stopPropagation();
//         try {
//             const res = await createChat({ id });
//             if (res.data?.ok) {
               
//                 setStartChat(true);
//             } else {
//                 throw new Error("Failed to start chat");
//             }
//         } catch (error) {
//             console.error("Error starting chat:", error);
//             alert("Failed to start chat");
//         }
//     }

//     return (
//         <div className="userchat">
//             <div className="userimage">
//                 <img src={image} width={57} height={57} alt="User Avatar" />
//             </div>
//             <div className="userdetails">
//                 <h4>{username}</h4>
//                 <span>{lastmessage}</span>
//             </div>
//             <div className="startchat">
//                 {!chatExists && <button onClick={startChat}>Start</button>}
//             </div>
//         </div>
//     );
// }

// // export default Userchat;
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import store from "../../store/store";
// import { chatActionCreator } from "../../action-creators/chatActionCreator";
// import { createChat } from "../../services/apiCalls/chats";
// import fetchChatList from "../../services/fetch";
// import "./Userchat.css";

// function Userchat({ image, username, lastmessage, id }) {
//     const dispatch = useDispatch();
//     const chat = useSelector((state) => state.chatReducer.result);

//     useEffect(() => {
//         async function getChats() {
//             await fetchChatList();
//         }
//         getChats();
//     }, []);

//     const chatExists = chat?.some((chatItem) => chatItem.related_id === id);

//     async function startChat(e) {
//         e.stopPropagation();
//         try {
//             const res = await createChat({ id });
//             if (res.data?.ok) {
//                 // **Remove the chat entry from Redux state after clicking start**
//                 const updatedChatList = chat.filter(chatItem => chatItem.related_id !== id);
//                 dispatch(chatActionCreator(updatedChatList)); 
//             } else {
//                 throw new Error("Failed to start chat");
//             }
//         } catch (error) {
//             console.error("Error starting chat:", error);
//             alert("Failed to start chat");
//         }
//     }

//     return (
//         <div className="userchat">
//             <div className="userimage">
//                 <img src={image} width={57} height={57} alt="User Avatar" />
//             </div>
//             <div className="userdetails">
//                 <h4>{username}</h4>
//                 <span>{lastmessage}</span>
//             </div>
//             <div className="startchat">
//                 {!chatExists && <button onClick={startChat}>Start</button>}
//             </div>
//         </div>
//     );
// }

// export default Userchat;
