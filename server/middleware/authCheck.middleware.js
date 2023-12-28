import jwt from "jsonwebtoken";

export async function check(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    if (!verify) return res.json({ loggedIn: false, message: "Invalid token" });
    req.user = verify;
    next();
  } catch (error) {
    res.json({ loggedIn: false, message: "Something went wrong" });
  }
}
