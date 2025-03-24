import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
},
email: {
    type: String,
    required: true,
    unique: true,
},
password: {
    type: String,
    required: true,
},
avatar:{
    type: String,
    default: "https://staticg.sportskeeda.com/editor/2019/11/c2ea7-15738246743387-800.jpg"
}, 
},
{ timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;