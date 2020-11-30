import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        //select: false  // hide from the client interface // hide the password
        select: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});
//userSchema.index({email: 1}, {unique: true});
export default mongoose.model("User", userSchema);