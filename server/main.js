import express from 'express'
import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.js';
import user from './models/users.js';

dotenv.config();
const app = express();

dbConfig();


app.get("/", (req, res) => {
    res.send("Server");
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started");
})