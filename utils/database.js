import mongoose from "mongoose";

let isConnecetd = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnecetd) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnecetd = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
