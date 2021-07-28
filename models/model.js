import mongoose from "mongoose"


const Schema = mongoose.Schema
export {
Model
}

const modelSchema = new Schema ({
  name: String,
  boolean: Boolean,
  number: Number
},{
  timestamps: true 
})


const Model = mongoose.model("Model", modelSchema)
