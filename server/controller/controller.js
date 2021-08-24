// Here Our GetUser API
const userModel = require("../model/userModel")
const getUser = async (req, res) => {
    try {
        const userget = await userModel.find();
        res.status(200).json(userget);
    }
    catch (err) {
        console.log(error);
        res.status(500).json({ Error: "Internal Error" });
    }
}


// Here Our Post API
const postUser = async (req, res) => {
    const { username, email, phone, college, subject } = req.body;
    if(!username || !email || !phone || !college || !subject){
        res.status(400).json({ Error: "Please Fill All The Detail" });
    }
    try {
        const getUser = await userModel.findOne({email:email})
        if(getUser){
            res.status(400).json({ Error: "Sorry User Already Present" });
        }
        const userDetail = await new userModel({ username, email, phone, college, subject });
        const saveDetail = await userDetail.save();
        res.status(200).json(saveDetail);
    }
    catch (err) {
        console.log(error);
        res.status(500).json({ Error: "Internal Error" });
    }
}


// Here Our Find By Id API
const getUserById = async (req, res) => {
    try {
        const usergetById = await userModel.findById(req.params.id);
        res.status(200).json(usergetById);
    }
    catch (err) {
        console.log(error);
        res.status(500).json({ Error: "Internal Error" });
    }
}


// Here Our Delete API
const deleteUser = async (req, res) => {
    try {
        const deleteUser = await userModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ Success: "User Deleted Successfull" });
    }
    catch (err) {
        console.log(error);
        res.status(500).json({ Error: "Internal Error" });
    }
}


// Here our Update API
const updateUser = async (req, res) => {
    try {
        const updateUser = await userModel.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json({ Success: "Post Update Successfull" });  
    }
    catch (err) {
        console.log(error);
        res.status(500).json({ Error: "Internal Error" });
    }
}


module.exports = { getUser, postUser, getUserById, deleteUser, updateUser };
