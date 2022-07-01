import createError from "../utils/createError.js";

export const signin = (req, res, next) => {
    next(createError(400, "테스트오류"));
};

export const signup = (req, res, next) => {};
