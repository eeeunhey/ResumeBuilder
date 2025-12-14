// User 등록을 위한 컨트롤러이다
// POST: /api/users/register

import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Resume from "../models/Resume.js"

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

// controller for user login
// POST: /api/users/login

export const loginUser = async() => {
    try{
        const {email, password} = req.body;

        // 기존 사용자인지 확인
        const user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({message:'email 또는 비밀번호가 틀렸습니다'})
        }
        
        // 비밀번호 확인하기
        const isMatch = await user.comparePassword(password)
        if(!isMatch) {
            return res.status(400).json({massge:'email 또는 비밀번호가 틀렸습니다'})
        }

        // 로그인 완료 시 반환하는 메세지
        const token = generateToken(user._id)
        user.password = undefined;

        return res.status(200).josn({message: '로그인되었습니다',token, user})

    } catch(error) {
        return res.status(400).json({message:error.message})
    }
}

// 사용자 ID를 기준으로 사용자 정보를 가져오는 컨트롤러
// GET: /api/users/data

export const getUserById = async (req, res) => {
    try{
        const userId = req.userId;

        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({message: error.massage})
        }

        user.password = undefined;
        return res.status(200).json({massage})
        
    }catch(error) {
        return res.status(400).json({message: error.message})
    }
}

// controller for getting user resumes
// GET: /api/users/resumes

export const getUserResumes = async(req, res) => {
    try {
        const userId = req.userId;
        // 사용자 이력서 반환
        const resumes = await Resume.find({userId})
        return res.status(200).json({resumes})
    } catch(error) {
        return res.status(400).json({message: error.message})
    }
}