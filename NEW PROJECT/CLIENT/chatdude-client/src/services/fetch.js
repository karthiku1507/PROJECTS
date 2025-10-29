import axios from "axios";
import { chatActionCreator } from "../action-creators/chatActionCreator";
import store from "../store/store";
function fetchChatList(){
    const userdata = axios.get("http://localhost:7979/api/users/getAllUsers",{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    }).then((res)=>{
        console.log(res.data,'hello all chatlist')
        store.dispatch(chatActionCreator(res.data))
    }).catch((error)=>{
        console.log(error)
    })
}

export default fetchChatList;

// import axios from "axios";
// import { chatActionCreator } from "../action-creators/chatActionCreator";
// import store from "../store/store";

// async function fetchChatList() {
//     try {
//         const res = await axios.get("http://localhost:7979/api/users/getAllUsers", {
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("token")}`
//             }
//         });
//         console.log(res.data, 'hello all chatlist');
//         store.dispatch(chatActionCreator(res.data));
//         return res.data; // Optional: return if you need it
//     } catch (error) {
//         console.log("Failed to fetch chat list", error);
//     }
// }

// export default fetchChatList;


// import axios from "axios";
// import { chatActionCreator } from "../action-creators/chatActionCreator";
// import store from "../store/store";

// async function fetchChatList() {
//   try {
//     const res = await axios.get("http://localhost:7979/api/users/getAllUsers", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });
//     store.dispatch(chatActionCreator(res.data));
//   } catch (error) {
//     console.error("Failed to fetch chat list", error);
//   }
// }

// export default fetchChatList;

