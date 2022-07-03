import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/userRouter.js";

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("✅DB 연결 성공"))
    .catch(() => console.log("❌DB연결실패"));

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(morgan("dev"));

app.use("/api/user", userRouter);

app.use((err, req, res, next) => {
    console.log(err);
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "뭔가 오류가 생겼습니다!";
    return res.status(errorStatus).json({
        status: errorStatus,
        message: errorMessage,
    });
});

app.listen(process.env.PORT || 5000, () => console.log("✅서버가 작동됐습니다"));
