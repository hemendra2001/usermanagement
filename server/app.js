const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 8000;

const router = path.join(__dirname,"./router/router");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(require(router));


app.listen(PORT,()=>{
    console.log(`Your Port is running on ${PORT}`);
})


 