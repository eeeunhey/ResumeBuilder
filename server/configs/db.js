import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("데이터 베이스  연결이 완료돠었습니다");
    });

    let mongodbURL = process.env.mongodbURL;
    const projectName = "resume-builder";

    if (!mongodbURL) {
      throw new Error("MONGODB_URL 환경변수가 설정되지 않았습니다");
    }

    if (mongodbURL.endsWith("/")) {
      mongodbURL = mongodbURL.slice(0, -1);
    }

    await mongoose.connect(`${mongodbURL}/${projectName}`);
  } catch (error) {
    console.log("MongoDB 연결 중 오류가 발생했습니다." , error)
  }
}

export default connectDB;