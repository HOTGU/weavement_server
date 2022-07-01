import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let PORT = 5000;

const init = async () => {
    try {
        await mongoose.connect(
            `mongodb://weavement_admin:${process.env.MONGOOSE_API_KEY}@cluster0-shard-00-00.rqqum.mongodb.net:27017,cluster0-shard-00-01.rqqum.mongodb.net:27017,cluster0-shard-00-02.rqqum.mongodb.net:27017/?ssl=true&replicaSet=atlas-q6t2v0-shard-0&authSource=admin&retryWrites=true&w=majority`
        );
        // await mongoose.connect(
        //     "mongodb://weavement_admin:ddLKR7koqvrfsNQt@cluster0-shard-00-00.rqqum.mongodb.net:27017,cluster0-shard-00-01.rqqum.mongodb.net:27017,cluster0-shard-00-02.rqqum.mongodb.net:27017/?ssl=true&replicaSet=atlas-q6t2v0-shard-0&authSource=admin&retryWrites=true&w=majority"
        // );
        console.log("✅데이타베이스가 작동됐습니다");
        app.listen(PORT, () => console.log("✅서버가 작동됐습니다"));
    } catch (error) {
        console.log(error);
        console.log("❌데이타베이스 작동실패했습니다");
    }
};

init();
