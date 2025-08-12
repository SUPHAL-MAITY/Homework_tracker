import  mongoose, { Schema }  from "mongoose";


const teacherSchema=new Schema({
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

    contact:{
        type:String,
        trim:true,
        maxlength:[11,"Length of Contact number should nor be more that 11"]
    },
  
    teacherCode:{
        type:String,
        required:true,
        match: /^[A-Za-z0-9]{6}$/ 
    },
    subject:{
        type:String,
        required:true
    }

})


export const Teacher=mongoose.model("Teacher",teacherSchema)