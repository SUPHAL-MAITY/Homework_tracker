import  mongoose, { Schema }  from "mongoose";



const studentSchema=new Schema({
  
    org_name:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:[6,"password length too small"]
       
    },
    phone:{
        type:String,
        trim:true,
        required:true,
        maxlength:[11,"Length of Contact number should nor be more that 11"]
    },
    class:{
       type:String,
       required:true
    },
    stream:{
       type:String,
       required:true    
    },  

   batchId:{
     type:String,
   },
   studentCode:{
        type:String,
        required:true,
        match: /^[A-Za-z0-9]{6}$/ 
   },


})



export const Student=mongoose.model("Student",studentSchema)