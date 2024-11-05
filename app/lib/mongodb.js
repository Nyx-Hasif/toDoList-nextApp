// connect mongoDB
import mongoose from "mongoose";

const mongoURL = process.env.MONGODB_URI;

if (!mongoURL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

export async function connectMongoDB() {
  try {
    await mongoose.connect(mongoURL); //yg ni penting
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}