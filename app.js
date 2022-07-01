import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/userRouter.js";

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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

export default app;
