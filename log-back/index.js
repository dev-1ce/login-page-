const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb+srv://admin:12345qwert@cluster0.gvacque.mongodb.net/log-reg");

app.use(express.json())
app.use(cors());

const userSchema = new mongoose.Schema({
    email:String ,
    password:String,
    number:String,
})

const User = new mongoose.model("User",userSchema)

app.post("/",async (req,res)=>{
    const {email,password}=(req.body)
    const searchUser = await User.findOne({email})
    if(searchUser){
        if(password===searchUser.password)
        {
            res.send({msg:"Login succesfull"})
            return
        }
        else{
            res.send({msg:"Password didnt match"})
        }
    }else{
        res.send({msg:"No user found"})
    }
})

app.post("/register",async (req,res)=>{
    const {email,password,number}=(req.body)
    const searchUser = await User.findOne({email:email})
    if(!searchUser){
        const user = new User({email,password,number})
        await user.save();
        res.send("hello new user")
        return ;
    }
    else{
        res.send("user already registered")
    }

})


app.listen(8000);