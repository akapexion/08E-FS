import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

const dbConfig = async() => {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("DB Connceted!!!");
    }
    catch(err){
        console.log(err);
    }
}

// dbConfig();
export default dbConfig;         