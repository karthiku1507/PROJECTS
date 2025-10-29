const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const jwt = require("jsonwebtoken");
const seret_key = "fgctgvchyvikiuhjug";
const route = express.Router();
const createConnection = require("./../config/connections");
const { ObjectId } = require("mongodb");

route.post("/signup", async (req, res) => {
  const newuser = req.body;

  const collection = await createConnection("users");
  collection
    .insertOne(newuser)
    .then((data) => {
      console.log(data);
      res.send({ ok: true, results: data, message: "User Created" });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        ok: false,
        results: "Failed to create user",
      });
    });
}); //http://localhost:7979/users/signup

route.post("/signin", async(req, res) => {
    console.log(req.body);
    const user = req.body;
    const collection = await createConnection("users");
      const data = await collection.findOne(user); 
    console.log(data,"data exected")
      if(data==null){
        res.send({
          ok:false,
          result:'user does not exist'
        })
      }else{
        const token=jwt.sign(data,seret_key)
        res.send({
          ok:true,
          result:token
        })
      }
    } 

);

//http://localhost:7979/api/users/signin

// route.post("/signin", (req, res) => {
//   console.log(req.body);
//   const user = req.body;
//   const collection = createConnection();
//   collection
//     .findOne({email : user.email}).toArray()
//     .then((data) => {
//       console.log(data);
//       const token = jwt.sign(data, seret_key);
//       console.log(token);
//       res.send({
//         ok: true,
//         message: "userExist",
//         results: token,
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//       res.send({
//         ok: false,
//         message: "User Dose not Exist",
//         results: null,
//       });
//     });
// });


// route.get("/getusers"),async(req,res) => {
//     //1.validate the tocken
//     //a.token is present or not
//     //b.verify the token

//     //12.connect with database,access all the users information
//     const coll = await createConnection();
//     var resp = await coll.find().toArray();
//     if (!resp) {
//         res.send({
//             ok:false,
//             result:"Failed to get User",
//         });
//     }else {
//         res.send({
//             ok:true,
//             result:resp,
//         })
//     }
// }

//http://localhost:7979/api/users/getusers

route.get("/getLoggedUser",verifyToken,(req,res) =>{
    //id,token
    //write the  logic to get the information of logged user
    console.log(req.userdata)
            res.send({
                ok:true,
                data:req.userdata,
                // result:'working'
            });
           })
// http://localhost:7979/api/users/getLoggedUser


route.get("/getAllUsers",verifyToken,async(req,res) => {
  try{
    const usersCollections = await createConnection("users");
    const data = await usersCollections.find({_id:{$ne:new ObjectId(req.userdata._id)}}).toArray();
console.log(data)
    res.send({
      ok:true,
      result:data,
    })
  } catch (error) {
    res.send({
      ok:false,
      error:error,
    })
  }
})

// http://localhost:7979/api/users/getAllUsers


// route.post("/create-chat",verifyToken,async(req,res)=>{
//   console.log(req.body.id,'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
//   try{
//     const chats = await connectionData('chats')
//     var data = await chats.insertOne({common_id:new ObjectId(req.userdata._id) ,related_id:new ObjectId(req.body.id),messageCount:0});
//     res.send({
//       ok:true,
//       result:data
//     })
//   }catch (error){
//     res.send({
//       ok:false,
//       error:error,
//     })
//   }
// })

module.exports = route;

// route.get("/getLoggedUser",verifyToken,(req,res) =>{
//     //id,token
//     console.log(req.headers);
//     if(req.headers["authorization"]===undefined){
//         res.send({
//             ok:false,
//             error:"token is missing",
//         });
//     } else {
//     var token = req.headers.authorization.slice(7);
//     jwt.verify(token,seret_key,(error,data) =>{
//         if(error) {
//          res.send({
//             ok:false,
//             error:"Token is invalid",
//          });
//         }else {
//             res.send({
//                 ok:true,
//                 data:data,
//             });
//         }
//     });
// }
// })
