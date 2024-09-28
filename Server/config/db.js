import mongoose from "mongoose";
const uri = 'mongodb://127.0.0.1:27017/cineshelf';

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log(`MongoDB Cineshelf : connected`);
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export { connectDB }