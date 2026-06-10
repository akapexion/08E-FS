import express from 'express'
import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.js';
import user from './models/users.js';
import cors from 'cors'

dotenv.config();
const app = express();

dbConfig();

app.use(cors());
app.use(express.json());


app.post("/adduser", (req, res) => {
    res.send({message: "Request Received"});
    console.log(req.body.username);
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started");
})