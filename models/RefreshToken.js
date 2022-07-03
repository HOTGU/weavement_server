import mongoose from "mongoose";

const RefreshTokenSchema = mongoose.Schema({
    token: { type: String, required: true },
    userId: { type: String, required: true },
});

const RefreshToken = mongoose.model("RefreshToken", RefreshTokenSchema);

export default RefreshToken;
