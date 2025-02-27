import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

console.log(process.env.MONGO_DB_URI);
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongoDB;
