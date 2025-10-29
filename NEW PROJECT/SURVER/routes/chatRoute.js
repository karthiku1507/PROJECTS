const express = require("express");
const route = express.Router();
const verifyToken = require("../middleware/verifyToken");
const createConnection = require("../config/connections");
const {ObjectId} = require("mongodb");

route.get("./get-users-chats",verifyToken,async (req,res)=>{
   try{

    const chats = await createConnection("chats");
    const chatData = await chats.find({members:{$in:[new ObjectId(req.userdata._id)]}}).toArray();
    res.send({
        ok:true,
        data:chatData
    })
       
   }catch(error)  {
    res.send({
        ok:false,
        error:error
    })

   }


})

//http://localhost:7979/api/chats/get-users-chats

// route.post("/create-chat", verifyToken, async (req, res) => {
//     try {
//       console.log(req.body.id);
//       var chats = await createConnection("chats");
//       var data = await chats.insertOne({
//         messageCount: 0,
//         members: [new ObjectId(req.userdata._id), new ObjectId(req.body.id)],
//       });
//       res.send({
//         ok: true,
//         result: data,
//       });
//     } catch (error) {
//       res.send({
//         ok: false,
//         error: error,
//       });
//     }
//   });
  //http://localhost:7979/api/chats/create-chat

  route.post("/create-chat",verifyToken,async(req,res)=>{
  console.log(req.body.id,'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
  
  console.log(req.userdata)
  try{
    const chats = await createConnection('chats')
    var data = await chats.insertOne({common_id:new ObjectId(req.userdata._id) ,related_id:new ObjectId(req.body.id),messageCount:0});
    res.send({
      ok:true,
      result:data
    })
  }catch (error){
    res.send({
      ok:false,
      error:error,
    })
  }
})
  
  module.exports = route;
