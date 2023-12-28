import UserModel from "../models/user.models.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function userSignup(req, res) {
  try {
    const { mobileNumber, email, name, password } = req.body;
    console.log(req.body);
    const user = await UserModel.findOne({ email });
    if (user)
      return res.json({
        err: true,
        message: "User with this mail already registered!",
      });
    const hashedpassword = bcrypt.hashSync(password, 10);
    const newUser = new UserModel({
      name,
      email,
      password: hashedpassword,
      mobile: mobileNumber,
    });
    await newUser.save();
    res.json({ err: false, message: "Success" });
  } catch (error) {
    res.json({ error: error, err: true, message: "Something bad happend!" });
  }
}

export async function userLogin(req, res) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) return res.json({ error: true, message: "User Not Found" });
    const valid = bcrypt.compareSync(password, user.password);
    if (!valid)
      return res.json({ error: true, message: "Email or Password is Wrong" });
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      process.env.JWT_SECRET
    );
    return res.json({ error: false, token });
  } catch (error) {
    console.log(error.message);
    res.json({ error: true,  message: "Something bad happend!" });
  }
}

export async function userLogout(req, res) {
  res
    .cookie("userToken", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .json({ message: "logged out", error: false });
}

export async function checkAuth(req, res) {
  try {
    const user = req.user;
    res.json({ loggedIn: true, user });
  } catch (error) {
    res.json({ loggedIn: false, message: "Something went wrong" });
  }
}
