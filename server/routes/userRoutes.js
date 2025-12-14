import express from "express"
import { getUserById, loginUser, registerUser } from "../configs/controllers/userController";
import { protect } from "../configs/middlewares/authMiddleware";

const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('login', loginUser);
userRouter.get('/data',protect, getUserById);

export default userRouter

