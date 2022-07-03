import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const createAccessToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_JWT_SECRET, {
        expiresIn: "30m",
    });
};

export const createRefreshToken = () => {
    return jwt.sign({}, process.env.REFRESH_JWT_SECRET, {
        expiresIn: "14d",
    });
};
