import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => res.send("서버 연결이 완료되었습니다."))

app.listen(PORT, () => {
    console.log(`연결 서버 포트 번호입니다 ${PORT}` )
})
