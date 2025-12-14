import jwt from 'jsonwebtoken'

export const protect = async( req, res, next) => {
    const token = req.headers.authorization

    if(!token) {
        return res.state(401).json({maessge:'인증 되지 않았습니다'})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId
        next()
    }catch (error) {
        return res.state(400).json({messge:error.messge})
    }

}