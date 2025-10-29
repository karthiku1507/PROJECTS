// import React from "react";
// import "./Chatarea.css"
// function Chatarea() {
//     return (
//         <div className="chatarea">
//             <div className="chatarea-header">
//                 <div>
//                     <img
//                     src={
//                         "https://cdn.pixabay.com/photo/2021/07/21/23/03/man-6484111_960_720.jpg"
//                     }
//                     width={50}
//                     height={50}
//                     />
//                 </div>
//                 <div>
//                     <h3>gopal Krishna</h3>
//                 </div>
//                 <div>
//                     <div className="icons">
//                     <i class="bi bi-camera-video"></i>
//                     <i class="bi bi-telephone"></i>
//                     <i class="bi bi-search"></i>
//                     </div>
//                 </div>
//             </div>

//             <div className="chatarea-body"></div>
//             <div className="chatarea-footer">
//                 <div className="flex" >
//                 <i class="bi bi-emoji-smile"></i>
//                 </div>
//                 <div className="flexStart"><i class="bi bi-file-image"></i></div>
//                 <div className="flex">
//                     <input type="text" placeholder="Type a Message" />
//                 </div>
//                 <div className="flex">
//                 <i class="bi bi-send"></i>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Chatarea;

// import React, { useState, useEffect } from "react";
// import "./Chatarea.css";

// function Chatarea() {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const savedUser = localStorage.getItem("active_chat_user");
//         if (savedUser) {
//             setUser(JSON.parse(savedUser));
//         }

//         // Expose global refresh function
//         window.dispatchChatareaRefresh = () => {
//             const updatedUser = localStorage.getItem("active_chat_user");
//             if (updatedUser) {
//                 setUser(JSON.parse(updatedUser));
//             }
//         };

//         return () => {
//             delete window.dispatchChatareaRefresh;
//         };
//     }, []);

//     if (!user) {
//         return (
//             <div className="chatarea">
//                 <p className="placeholder">Select a user to start chat</p>
//             </div>
//         );
//     }

//     return (
//         <div className="chatarea">
//             <div className="chatarea-header">
//                 <img src={user.image} width={50} height={50} alt="user" />
//                 <h3>{user.username}</h3>
//                 <div className="icons">
//                     <i className="bi bi-camera-video"></i>
//                     <i className="bi bi-telephone"></i>
//                     <i className="bi bi-search"></i>
//                 </div>
//             </div>

//             <div className="chatarea-body">
//                 <p>You're chatting with <strong>{user.username}</strong></p>
//             </div>

//             <div className="chatarea-footer">
//                 <div className="flex"><i className="bi bi-emoji-smile"></i></div>
//                 <div className="flexStart"><i className="bi bi-file-image"></i></div>
//                 <div className="flex"><input type="text" placeholder="Type a message" /></div>
//                 <div className="flex"><i className="bi bi-send"></i></div>
//             </div>
//         </div>
//     );
// }

// export default Chatarea;
import React, { useState, useEffect } from "react";
import "./Chatarea.css";

function Chatarea() {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const savedUser = localStorage.getItem("active_chat_user");
        if (savedUser) {
            const parsedUser = JSON.parse(savedUser);
            setUser(parsedUser);

            // Load messages for this user
            const storedMsgs = localStorage.getItem(`chat_messages_${parsedUser.id}`);
            if (storedMsgs) {
                setMessages(JSON.parse(storedMsgs));
            }
        }

        window.dispatchChatareaRefresh = () => {
            const updatedUser = localStorage.getItem("active_chat_user");
            if (updatedUser) {
                const parsedUser = JSON.parse(updatedUser);
                setUser(parsedUser);
                const storedMsgs = localStorage.getItem(`chat_messages_${parsedUser.id}`);
                setMessages(storedMsgs ? JSON.parse(storedMsgs) : []);
            }
        };

        return () => {
            delete window.dispatchChatareaRefresh;
        };
    }, []);

    const handleSend = () => {
        if (!message.trim() || !user) return;

        const newMessage = {
            from: "me", // logged-in user
            text: message.trim(),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };

        const updatedMessages = [...messages, newMessage];

        setMessages(updatedMessages);
        localStorage.setItem(`chat_messages_${user.id}`, JSON.stringify(updatedMessages));
        setMessage("");
    };

    if (!user) {
        return (
            <div className="chatarea">
                <p className="placeholder">Select a user to start chat</p>
            </div>
        );
    }

    return (
        <div className="chatarea">
            <div className="chatarea-header">
                <img src={user.image} width={50} height={50} alt="user" />
                <h3>{user.username}</h3>
                <div className="icons">
                    <i className="bi bi-camera-video"></i>
                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-search"></i>
                </div>
            </div>

            <div className="chatarea-body">
                {messages.length === 0 && (
                    <p className="placeholder">You're chatting with <strong>{user.username}</strong></p>
                )}
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`message ${msg.from === "me" ? "from-me" : "from-them"}`}
                    >
                        <span>{msg.text}</span>
                        <div className="timestamp">{msg.time}</div>
                    </div>
                ))}
            </div>

            <div className="chatarea-footer">
                <div className="flex"><i className="bi bi-emoji-smile"></i></div>
                <div className="flexStart"><i className="bi bi-file-image"></i></div>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Type a message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    />
                </div>
                <div className="flex">
                    <i className="bi bi-send" onClick={handleSend}></i>
                </div>
            </div>
        </div>
    );
}

export default Chatarea;
