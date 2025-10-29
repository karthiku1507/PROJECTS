// import React from "react";
// import "./Sidebar.css";
// import ChatList from "../chat-list/ChatList";
// import Search from "../search/Search";
// function Sidebar() {
//     return <div className="sidebar">
//         <Search />
//         <ChatList />

        
       
//     </div>
    
    
    
// }

// export default Sidebar;


import React, { useState } from "react";
import "./Sidebar.css";
import ChatList from "../chat-list/ChatList";
import Search from "../search/Search";

function Sidebar() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="sidebar">
            {/* Only one Search bar */}
            <Search onSearch={setSearchQuery} />
            {/* Pass searchQuery to ChatList */}
            <ChatList searchQuery={searchQuery} />
        </div>
    );
}

export default Sidebar;
