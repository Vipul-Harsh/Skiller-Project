import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String, 
  // },
  team: {
    type:String,
    required:true,
},
  date: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("details", projectSchema);

export default Project;
