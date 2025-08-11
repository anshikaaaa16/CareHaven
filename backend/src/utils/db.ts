import mongoose from "mongoose";
import { logger } from "./logger";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://anshikanegi10:ccA9O9hBJVm9NAZc@carehaven.qsu1a87.mongodb.net/?retryWrites=true&w=majority&appName=CareHaven";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info("Connected to MongoDB Atlas");
  } catch (error) {
    logger.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
