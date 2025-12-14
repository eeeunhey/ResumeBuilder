import express from "express"
import { getUserById, getUserResumes, loginUser, registerUser } from "../controllers/userController";
import { protect } from "../configs/middlewares/authMiddleware";

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('login', loginUser);
userRouter.get('/data',protect, getUserById);
userRouter.get('/resume', protect, getUserResumes);

export default userRouter

