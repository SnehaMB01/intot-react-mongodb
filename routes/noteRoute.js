const express=require("express");
const router=express.Router();
const Note= require("../models/noteModel");
router.route("/create").post((req,res)=>{
const fname= req.body.fname; 
const email= req.body.email;
const password= req.body.password;
const cpassword= req.body.cpassword;
const newNote= new Note({
    fname,
    email,
    password,
    cpassword
});
newNote.save();
})

module.exports=router;