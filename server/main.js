import express from 'express'
import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.js';
import user from './models/users.js';
import cors from 'cors'
import registration from './models/registrations.js';
import bcrypt from 'bcrypt';

dotenv.config();
const app = express();

dbConfig();

app.use(cors());
app.use(express.json());


app.post("/adduser", async(req, res) => {
    try{
        await user.insertOne({
            user_name : req.body.username
        });
        res.send({message : "User Added Successfully"});
    }
    catch(err){
        console.log("Error Adding Data", err);
        res.send({message : err});
    }
})


app.get("/users", async(req, res) => {
    try {
        const allUsers = await user.find();
        res.send(allUsers);

    }
    catch(err){
        console.log("Error Fetching Data", err);
        res.send({message : err});
    }
})

app.put("/updateuser/:id", async(req, res) => {
    try{
        await user.updateOne({_id : req.params.id}, {$set : {user_name : req.body.editName}});

        res.send({message : "User updated successfully"});
    }
    catch(err){
        console.log(err);
        res.send({message : err});
    }
})

app.delete("/deleteuser/:id", async(req, res) => {
    try{
        await user.deleteOne({_id : req.params.id});
        res.send({message : "User removed sucessfully"});
    }
    catch(err){
        console.log(err);
        res.send({message: err});
    }
})

app.post("/register", async(req, res) => {
    try{
        // const name = req.body.name;
        // const email = req.body.email;
        // const password = req.body.password;
        const { name, email, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        await registration.insertOne({user_name : name, user_email : email, user_password: hashPassword});
    }
    catch(err){
        console.log(err);
    }
})


app.post("/login", async(req, res) => {
    try{
        const { email, password } = req.body;

        const registeredEmail = await registration.findOne({user_email : email});
        // console.log(registeredEmail);
        if(registeredEmail){
            const isMatch = await bcrypt.compare(password, registeredEmail.user_password);
            if(isMatch){
                res.send({message : "User logged in"});
            }
            else {
                res.send({message : "Incorrect Credentials"});
            }
        }
        else {
            res.send({message : "User don't exist"});
        }
    }
    catch(err){
        console.log(err);
    }
})





app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started");
})