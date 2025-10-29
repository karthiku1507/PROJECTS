// const { request } = require("express")
const jwt = require('jsonwebtoken')
const seret_key = "fgctgvchyvikiuhjug";

// const verifyToken = (req,res,next)=>{
//     if(req.headers["authorization"]=== undefined){
//         res.send({
//             ok:false,
//             error:"Token is missing"
            
//         })
//     }else {
//         var token = res.headers.authorization.slice(7);
//         jwt.verify(token,seret_key,(error,data)=>{
//             if(error){
//                 res.send({
//                     ok:false,
//                     error:"Token is invalid"
//                 })
//             }else{
//                 req.userdata = data;
//                 next();
//             }
//         })
//     }
// }

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
  
    if (!authHeader) {
      return res.status(401).send({
        ok: false,
        error: "Token is missing"
      });
    }
  
    const token = authHeader.slice(7); // Remove 'Bearer ' prefix
  
    jwt.verify(token, seret_key, (error, data) => {
    
      if (error) {
        return res.status(403).send({
          ok: false,
          error: "Token is invalid"
        });
      }else{
        console.log(data);
      req.userdata = data;
      next();
    }
    });
  };

module.exports = verifyToken;