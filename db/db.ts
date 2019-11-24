import mongoose from "mongoose";
import { Constants } from "../constants";

export function connectMongo() {
  mongoose.connect(Constants.MONGODB, { useNewUrlParser: true, useUnifiedTopology: true });
}
