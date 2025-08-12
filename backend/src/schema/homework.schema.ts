

import  mongoose, { Schema }  from "mongoose";





const hwSchema=new Schema({
  
   startDate:{
    type:Date,
    required:true,
    default:Date.now
   },
   submissionDate:{
    type:String,
    required:true
   },
   batch:{
    type:Schema.Types.ObjectId,
    ref:"Batch"  
   },
   subject:{
     type:String,
     required:true
   },

   title:{
    type:String,
    required:true
    
   },
   creator:{
    type:Schema.Types.ObjectId,
    ref:"Teacher"
   }


})





export const Homework=mongoose.model("Homework",hwSchema)