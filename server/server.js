import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// 데이터베이스 연결
await connectDB()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send("서버 연결이 완료되었습니다."))
app.use('/api/users', userRouter)

app.listen(PORT, () => {
    console.log(`연결 서버 포트 번호입니다 ${PORT}` )
})
