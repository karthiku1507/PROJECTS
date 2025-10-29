// const chatReducer = (state={name:'karthik'},action) => {
//     if(action.type === 'chat'){
//         state=action.payload
//     }
//     return state;
// };

// export default chatReducer;


// const chatReducer = (state = [], action) => {
//   if (action.type === "chat") {
//     return action.payload;  // Replace the entire state with the payload (array)
//   }
//   return state;
// };

// export default chatReducer;

const initialState = {
  ok: false,
  result: []
};

const chatReducer = (state = initialState, action) => {
  if (action.type === "chat") {
    // Just replace the entire state with payload (which has ok & result)
    return action.payload;
  }
  return state;
};

export default chatReducer;

