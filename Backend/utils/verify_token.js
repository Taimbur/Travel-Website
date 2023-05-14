import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({ success: false, message: "You are not authorize" });
  }

  //if tokenis exit then verify the token
  jwt.verify(token, process.env.SECRET_KEY, (err, User) => {
    if (err) {
      return res.status(401).json({ success: false, message: "token is invalid" });
    }
    req.User = User;
    next();
    //dont forget to call next 
  });
};

export const verifyUser=async(req,res,next)=>{
  verifyToken(req,res,next,()=>{
    if (req.User.role==='admin') {
      next()
    }else{
      return res.status(401).json({success:false,message:"you are not absouletly not allowed"});
      
    }
  });
};