import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  //exting user check
  const { Email, FullName, Password } = req.body;
  try {
    const exitUser = await User.findOne({ Email: Email });
    if (exitUser) {
      return res.status(400).json({ message: "user already exits" });
    }
    const hashedPassword = await bcrypt.hash(Password, 10);
    const result = await User.create({
      Email: Email,
      Password: hashedPassword,
      FullName: FullName,
    });
    // const token = jwt.sign({
    //     Email:result.Email, id:result._id
    // }, KEY);
    res.status(201).json({ User: result, message: "register successfully " });
  } catch (error) {
    res.status(500).json({ message: "something gone wrong" });
  }
};


export const signin = async (req, res) => {
  const { Email, Password } = req.body;
  const role = User._doc
  try {
    const exitUser = await User.findOne({ Email: Email });
    if (!exitUser) {
      return res.status(404).json({ message: "Email  not found" });
    }

    const checkPassword = await bcrypt.compare(Password, exitUser.Password);

    if (!checkPassword) {
      return res.status(404).json({ message: "password invalid" });
    }



    // creat token jwt
    const token = jwt.sign(
      { id: exitUser._id, role: exitUser.role },
      process.env.SECRET_KEY,
      { expiresIn: "15d" }
    );

    // set tooken in browser cookies and  send the resposne to the client
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({
        success: true,
        message: "succesfully login",
        User: exitUser, token,
        token,
        role
      });

    //  res.status(201).json({ User: exitUser, token: token });
  } catch (error) {
    return res.status(500).json({ message: "something gone wrong" });
  }
};



export const allUser = async (req, res) => {
  try {
    const getallUser = await User.find({});

    res.status(200).json({
      success: true,
      message: "succesfully found all ",
      data: getallUser,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "failed try to  found all  again" });
  }
};