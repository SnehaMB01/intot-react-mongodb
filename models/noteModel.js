const mongoose = require("mongoose");
const notesSchema= {
    fname:String,
        email:String,
        password:String,
        cpassword:String
}
const Note = mongoose.model("Note",notesSchema);
module.exports=Note;