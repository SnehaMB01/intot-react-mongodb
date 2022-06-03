const express=require("express")
const app=express()
const mongoose=require("mongoose")
const cors=require("cors")
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb+srv://sneha:sneha@cluster0.lrrgp.mongodb.net/notesDB");
app.use("/",require("./routes/noteRoute"));
app.listen(3001,function(){
    console.log("running on port 3001");
});