const mongoose = require("mongoose");

// Here our Schema

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    college:{
        type:String,
        required:true,
    },
    subject:{
        type:String,
        required:true,
    },
});


// Here our Model

const userModel = mongoose.model("usermanagement",userSchema);

module.exports = userModel;