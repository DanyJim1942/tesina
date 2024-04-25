import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("Conectao parce, chau, chauuuu");
    }else{
      console.log("miedo");
    }
    
  } catch (error) {
    console.log("error del lib"+error);
  }
};

export default connectDB;