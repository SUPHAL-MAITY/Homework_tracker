import  mongoose, { Schema }  from "mongoose";


const adminSchema=new Schema({
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
    organisation_type:{
        type:String,
        required:true,
        enum:["School","College","Institue","Self_driven_coaching"]
    },
    access:{
        type:Boolean,
        default:0

    },
    contact:{
        type:String,
        trim:true,
        maxlength:[11,"Length of Contact number should nor be more that 11"]
    },
    address:{
        type:String,
        required:true
    },
    teacherCode:{
        type:String,
        required:true,
        match: /^[A-Za-z0-9]{6}$/ 
    },
    studentCode:{
        type:String,
        required:true,
        match: /^[A-Za-z0-9]{4}$/ 
    }
})


export const Admin=mongoose.model("Admin",adminSchema)