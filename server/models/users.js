import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    user_name : {
        type: String,
        required : true    
    }
})

const user = mongoose.model("User", usersSchema);

export default user;