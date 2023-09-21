const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        no:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        companyName:{
            type:String,
            required:true,
        },
        mobileNumber:{
            type:String,
            required:true,
        },
        whatsapp:{
            type:String,
            required:true, 
        },
        services:{
            type:String,
            required:true,
        },
        comments:{
            type:String,
            required:true,
        },
        amount:{
            type:String,
            required:true,
        },
        otherDetails:{
            type:String,
            required:true,
        },
        status:{
            type:String,
            required:true,
        },
    },
    {
        timestamps:true
    }

);
const Data = mongoose.model('Data',userSchema);

module.exports = Data;