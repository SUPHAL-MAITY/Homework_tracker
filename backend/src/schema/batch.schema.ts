
import  mongoose, { Schema }  from "mongoose";




const batchSchema=new Schema({
  
   class:{
    type:String,
    required:true
   },
   subject:{
    type:String,
    required:true
   },
   batchNo:{
    type:Number,
    required:true
   },
   batchId:{
    type:String,
    unique:true
   }


})


batchSchema.pre("save", function(next){
    this.batchId=`${this.class}-${this.subject}-${this.batchNo}`
    next()
})



export const Batch=mongoose.model("Batch",batchSchema)