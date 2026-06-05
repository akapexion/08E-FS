import express from 'express'
import dotenv from 'dotenv';

dotenv.config();
const app = express();


app.get("/", (req, res) => {
    res.send("Server");
})

app.listen(process.env.PORT || 5000, () => {
    console.log("Server Started");
})