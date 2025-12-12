// User 등록을 위한 컨트롤러이다
// POST: /api/users/register

import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const generateToken = (userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: '7d'})
    return token;
}

export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        // 필수 값 입력 체크하기
        if(!name || !email || !password) {
            return res.status(400).json({message: "필수 데이터가 누락되었습니다"})
        }

        // 이미 가입 회원인지 확인하기
        const user = await User.findOne({email})
        if(user) {
            return res.status(400).json({message: "이미 가입된 회원입니다"})
        }

        // 새로운 유저 생성하기
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            name, email, password: hashedPassword
        })

        // 유저 생성 완료
        const token = generateToken(newUser._id)
        newUser.password = undefined;

        return res.status(201).json({message:'사용자 생성을 완료했습니다',token, user: newUser})



    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}