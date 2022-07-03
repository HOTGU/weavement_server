import createError from "../utils/createError.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

export const verifyUser = (req, res, next) => {
    const accessToken = req?.cookies?.accessToken;

    if (!accessToken) return next(createError(401, "엑세스 토큰이 없습니다"));

    const verifyToken = jwt.verify(accessToken, process.env.ACCESS_JWT_SECRET);

    if (!verifyToken) return next(createError(401, "토큰인증이 안됩니다"));

    req.userId = verifyToken.id;

    next();
};

export const verifyIsAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (!user.isAdmin) return next(createError(403, "admin 권한이 없습니다"));
    } catch (error) {
        next(error);
    }
};
