// export let chatAction = {
//     type:"chat",
//     payload:""
// };

export let chatAction = {
  type: "chat",
  payload: ""
};

export const chatActionCreator = (chatdata) => {
  chatAction.payload = chatdata;
  return chatAction;
};
