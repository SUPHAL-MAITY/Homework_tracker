import  mongoose, { Schema }  from "mongoose";


const teacherSchema=new Schema({
 studentId:{
  type:Schema.Types.ObjectId,
  ref:"Student",
  requied:true
 },
 homeworkId:{
   type:Schema.Types.ObjectId,
   ref:"Homework",
   required:true
 },
 status:{
    type:String,
    enum:["Pending","Submitted","Checked"],
    default:"Pending"
 }




})


export const Teacher=mongoose.model("Teacher",teacherSchema)