import mongoose from "mongoose";
import { EnvConfigurations } from "./envConfig";

export const connectToDB = async () => {
  const connectionURL = EnvConfigurations.MONGODB_CONNECTION_URL;

      if (connectionURL) {
    console.log("hello");
    try {
      await mongoose.connect(connectionURL);
      console.log("Sucessfully connected to MongoDB Instance");
    } catch (error) {
      console.log(error);
      console.log("Connection To MongoDB Instance Failed");
      connectToDB();
    }
  } else {
    console.log("Invalid Connection URL");
  }
};
