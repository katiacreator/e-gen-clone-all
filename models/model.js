//if bug check this
import mongoose from "mongoose"

//if bug check this
const Schema = mongoose.Schema
//if bug check this
export {
Model
}
//sample
const modelSchema = new Schema ({
  name: String,
  boolean: Boolean,
  number: Number
},{
  timestamps: true 
})

//if bug check this
const Model = mongoose.model("Model", modelSchema)
