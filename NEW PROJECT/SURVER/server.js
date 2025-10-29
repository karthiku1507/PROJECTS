const express = require("express");
const cors = require("cors");
const port = 7979;
const app = express();

// app.get("/working",(req,res,next) => {

//     console.log("first router handler");
//     // res.send("first");
//     next();
// },
// (req,res,next) =>{
//     console.log("secound router handler");
//     res.send("secound");
// }
// );

// //http://localhost:7979/working

  const User = require('./routes/userRoute')
  const Chat = require('./routes/chatRoute')

app.use(cors());
app.use(express.json());
app.use("/api/users",User);
app.use("/api/chats",Chat);

app.listen(port,()=>{
    console.log("NodeJS web Server Started", port);
})