import mongoose from "mongoose";

const Connection = async () => {
  const URL =
    "mongodb+srv://Jashu:Jashu123@blog.nvx02.mongodb.net/Blog?retryWrites=true&w=majority";
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.log("Error while connecting to MongoDB" + error);
  }
};

export default Connection;
