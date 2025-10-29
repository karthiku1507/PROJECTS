// import React, { useEffect } from "react";
// import "./ChatList.css";
// import Userchat from "../user-chat/Userchat"
// import { useSelector } from "react-redux";
// import fetchChatList from "../../services/fetch";
// function ChatList(){
//     useEffect(()=>{
//     fetchChatList()
//     },[]);

//     const user = useSelector((state) => state.chatReducer.result);
//     console.log(user,'hellllllllllllllll');

//     useEffect(()=>{
//         console.log(user,'expected');
//     },[user]);

//     return(
//         <div className="chat-list">
//               {user && user.length > 0 ? (
//                 user.map((userItem)=>{
//                     return(
//                         <Userchat
//                         key={userItem._id}
//                         image={userItem.image_url}
//                         username={userItem.first_name + " " + userItem.last_name}
//                         lastmessage={"Hey, how are you?"}
//                         id={userItem._id}
//                         />
//                     );
//                 })
//               ) : (
//                 <p>No users available.</p>
//               )}
//         </div>
//     )
// }

// export default ChatList;
import React, { useEffect } from "react";
import "./ChatList.css";
import Userchat from "../user-chat/Userchat";
import { useSelector } from "react-redux";
import fetchChatList from "../../services/fetch";

function ChatList({ searchQuery }) {
    const userList = useSelector((state) => state.chatReducer?.result || []);

    useEffect(() => {
        fetchChatList();
    }, []);

    // Sort/filter user list based on searchQuery
    const sortedList = [...userList].sort((a, b) => {
        const aName = (a.first_name + " " + a.last_name).toLowerCase();
        const bName = (b.first_name + " " + b.last_name).toLowerCase();
        const search = searchQuery.toLowerCase();

        const aMatch = aName.includes(search);
        const bMatch = bName.includes(search);

        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;
        return 0;
    });

    return (
        <div className="chat-list">
            {sortedList.length > 0 ? (
                sortedList.map((userItem) => (
                    <Userchat
                        key={userItem._id}
                        image={userItem.image_url}
                        username={userItem.first_name + " " + userItem.last_name}
                        lastmessage={"Hey, how are you?"}
                        id={userItem._id}
                    />
                ))
            ) : (
                <p>No users available.</p>
            )}
        </div>
    );
}

export default ChatList;






// function ChatList(){
//     return (
//         <div className="chatlist">

//              <Userchat 
//             image={
//                " https://cdn.pixabay.com/photo/2021/07/21/23/03/man-6484111_960_720.jpg"
//             }
//             username={"Gopal Krishna"}
//             lastmessage={"Come to my house both of them go moive"}
//             /> 

//              <Userchat
//             image={
//                 "https://th.bing.com/th/id/OIP.AMtWc-7WDydW_9vG9oxcsAAAAA?rs=1&pid=ImgDetMain"
//             }
//             username={"ragiv"}
//             lastmessage={"Where are you karthik"}
//             />

//             <Userchat
//             image={
//                 "https://cdn.pixabay.com/photo/2018/10/30/10/50/man-3783395_1280.jpg"
//             }
//             username={"sai"}
//             lastmessage={"going to tiffen come fast"}
//             id={"680f55b92bd050b19be03a9f"}
//             />

//             <Userchat
//             image={
//                 "https://img.freepik.com/premium-photo/photo-professional-young-indian-business-woman-dressed-up-generative-ai_849906-8198.jpg"
//             }
//             username={"Vyshnavi"}
//             lastmessage={"Are you apply the tcs job."}
//             id={"680f4e742bd050b19be03a67"}
//             />

//             <Userchat
//             image={
//                 "https://s3.scoopwhoop.com/anj/forbes/188510289.jpg"
//             }
//             username={"srivani"}
//             lastmessage={"where are you. dad was asking"}
//             />

//             <Userchat
//             image={
//                 "https://www.helpside.com/wp-content/uploads/2021/01/AdobeStock_238255151-2048x1365.jpeg"
//             }
//             username={"Dana"}
//             lastmessage={"good morning karthik"}
//             />

//             <Userchat
//             image={
//                 "https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-142318.jpg?w=740"
//             }
//             username={"lavanya"}
//             lastmessage={"hi karthik have you eaten"}
//             /> 

//             <Userchat 
//             image={
//                " https://cdn.pixabay.com/photo/2021/07/21/23/03/man-6484111_960_720.jpg"
//             }
//             username={"manoj"}
//             lastmessage={"Come to my house both of them go moive"}
//             /> 

//              <Userchat 
//             image={
//                " https://cdn.pixabay.com/photo/2021/07/21/23/03/man-6484111_960_720.jpg"
//             }
//             username={"sameer"}
//             lastmessage={"Come to my house both of them go moive"}
//             /> 
//         </div>
//     )
// }

// export default ChatList;






// <div className="container">   
//                <img src="https://cdn.pixabay.com/photo/2021/07/21/23/03/man-6484111_960_720.jpg" width={60} height={60} />
//                <div className="content">
//                <h3>Gopal Krishna</h3>
//                <p>Come to my house both </p>
//                </div>
//             </div>

//             <div className="container">   
//                <img src= "https://th.bing.com/th/id/OIP.AMtWc-7WDydW_9vG9oxcsAAAAA?rs=1&pid=ImgDetMain" width={60} height={60} />
//                <div className="content">
//                <h3>Ragiv</h3>
//                <p>Come to my house both </p>
//                </div>
//             </div>

//             <div className="container">   
//                <img src="https://img.freepik.com/premium-photo/photo-professional-young-indian-business-woman-dressed-up-generative-ai_849906-8198.jpg" width={60} height={60} />
//                <div className="content">
//                <h3>Vyshnavi</h3>
//                <p>Come to my house both </p>
//                </div>
//             </div>

//             <div className="container">   
//                <img src="https://cdn.pixabay.com/photo/2018/10/30/10/50/man-3783395_1280.jpg" width={60} height={60} />
//                <div className="content">
//                <h3>Shadu</h3>
//                <p>Come to my house both </p>
//                </div>
//             </div>

//             <div className="container">   
//                <img src=   "https://s3.scoopwhoop.com/anj/forbes/188510289.jpg" width={60} height={60} />
//                <div className="content">
//                <h3>Srivani</h3>
//                <p>Come to my house both </p>
//                </div>
//             </div>

//             <div className="container">   
//                <img src= "https://www.helpside.com/wp-content/uploads/2021/01/AdobeStock_238255151-2048x1365.jpeg" width={60} height={60} />
//                <div className="content">
//                <h3>Dana Laxmi</h3>
//                <p>Come to my house both </p>
//                </div>
//             </div>

//             <div className="container">   
//                <img src="https://cdn.pixabay.com/photo/2021/07/21/23/03/man-6484111_960_720.jpg" width={60} height={60} />
//                <div className="content">
//                <h3>Vamsi</h3>
//                <p>Come to my house both </p>
//                </div>
//             </div>

//             <div className="container">
//               <img src="https://tse1.mm.bing.net/th?id=OIP.A0ONzocDM3ry6mJkMLBl6wHaFj&pid=Api&P=0&h=180" width={60} height={60} />
//               <div className="content">
//                 <h3>manoj</h3>
//                 <p>come to my house both</p>
//               </div>
//             </div>

//             <div className="container">   
//                <img src=  "https://img.freepik.com/premium-photo/young-smart-indian-businesswoman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-142318.jpg?w=740" width={60} height={60} />
//                <div className="content">
//                <h3>Lavanya</h3>
//                <p>Come to my house both </p>
//                </div>
//             </div>

//             <div className="container">
//                 <img src="https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?cs=srgb&dl=pexels-mostafa-sannad-868113.jpg&fm=jpg" width={60} height={60}/>
//                 <div className="content">
//                     <h3>Manoj</h3>
//                     <p>where are you karthik</p>
//                 </div>
//             </div>

//             <div className="container">   
//                <img src="https://cdn.pixabay.com/photo/2018/10/30/10/50/man-3783395_1280.jpg" width={60} height={60} />
//                <div className="content">
//                <h3>suresh</h3>
//                <p>Come to my house both </p>
//                </div>
//             </div>

//             <div className="container">
//                 <img src="https://images.pexels.com/photos/868113/pexels-photo-868113.jpeg?cs=srgb&dl=pexels-mostafa-sannad-868113.jpg&fm=jpg" width={60} height={60}/>
//                 <div className="content">
//                     <h3>srinu</h3>
//                     <p>where are you karthik</p>
//                 </div>
//             </div>

//             <div className="container">   
//                <img src="https://cdn.pixabay.com/photo/2018/10/30/10/50/man-3783395_1280.jpg" width={60} height={60} />
//                <div className="content">
//                <h3>sammer</h3>
//                <p>Come to my house both </p>
//                </div>