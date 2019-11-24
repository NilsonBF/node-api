import * as mongoose from "mongoose";

const dbTestsSchema = new mongoose.Schema({
  number: Number,
  text: String
});

export const DbTest = mongoose.model("DbTest", dbTestsSchema);
