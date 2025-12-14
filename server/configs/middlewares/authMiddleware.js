import jwt from 'jsonwebtoken'

export const protect = async( req, res, next) => {
    const token = req.headers.authorization

    if(!token) {
        return res.status(401).json({message:'인증 되지 않았습니다'})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId
        next()
    }catch (error) {
        return res.status(401).json({message:error.message})
    }

}