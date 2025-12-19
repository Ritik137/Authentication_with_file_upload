import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true },
    password: String,
    filemame: String,
    public_id: String,
    imgUrl: String,
});

const User = mongoose.model("User", userSchema);
export default User;