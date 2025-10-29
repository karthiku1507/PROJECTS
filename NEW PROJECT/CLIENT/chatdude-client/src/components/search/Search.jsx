// import React from "react";
// import "./Search.css";
// function Search(){
//     return (
//         <div className="searchitem">
//     <div className="search">
//         <i class="bi bi-search"></i>
//         <input type="text" placeholder="Search or chat a new chat" />
//     </div>
//     </div>
//     )
// }

// export default Search;


import React from "react";
import "./Search.css";

function Search({ onSearch }) {
    return (
        <div className="searchitem">
            <div className="search">
                <i className="bi bi-search"></i>
                <input
                    type="text"
                    placeholder="Search or chat a new chat"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
        </div>
    );
}

export default Search;

