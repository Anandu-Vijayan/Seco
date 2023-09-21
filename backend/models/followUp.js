const mongoose = require('mongoose');

const followUpSchema = mongoose.Schema(
    {
        no:{
            type:String,
            required:true,
        },
        userId:{

        },
        message:{
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
const followUData = mongoose.model('follow',followUpSchema);

module.exports = followUData
