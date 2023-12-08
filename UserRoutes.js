const express = require("express");
const registerUser = require("./UserControler");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/register").get((req,res) => {
    res.send("GET working");
});




module.exports = router;