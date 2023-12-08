const exp = require("constants");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");


const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
app.use("/api/v1",router);
app.use(express.static('public'));


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"./public/index.html"));
})



// app.post("/api/v1/login",(req,res) => {
//     res.send(`"<h1>Done Mr.   ${req.body.name}</h1>"`);
//     console.log(req.body);
// })

app.listen(port,()=>{
    console.log(`"Server is running on http://localhost:${port}"`);
})