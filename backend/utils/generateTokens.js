import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const generateTokens = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export default generateTokens;
