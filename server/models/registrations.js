import mongoose from 'mongoose';

const registrationsSchema = new mongoose.Schema({
    user_name : {
        type: String,
        required : true    
    },
    user_email : {
        type: String,
        required : true    
    },
    user_password : {
        type: String,
        required : true    
    }
})

const registration = mongoose.model("registration", registrationsSchema);

export default registration;