// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  place: String,
  role: String,
  phone: String,
});

export default mongoose.model("User", userSchema);
