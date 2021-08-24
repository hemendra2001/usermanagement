const router = require("express").Router();
const connection = require("../model/connection");
const userModel = require("../model/userModel");
const {getUser,postUser,getUserById,deleteUser,updateUser} = require("../controller/controller");

// Here Our CRUD operation

router.get("/getUser",getUser);
router.post("/postUser",postUser);
router.get("/getUserById/:id",getUserById);
router.delete("/deleteUser/:id",deleteUser);
router.post("/updateUser/:id",updateUser);



module.exports = router;