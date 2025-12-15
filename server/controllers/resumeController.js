import Resume from "../models/Resume.js";

// 새로운 이력서 생성을 위한 컨트롤러
// POST: /api/resumes/create

export const createResume = async (req, res) => {
    try {
        const userId = req.userId;
        const {title} = req.body;

        // 새로운 이력서 생성하기
        const newResume = await Resume.create({userId, title})

        // 이력서 생성이 완료되면 반환하는 메세지
        return res.status(201).json({message: '이력서 생성이 완료되었습니다.',resume:newResume})

    } catch (error) {
        return res.status(400),json({message: error.message})
    }
}

// 이력서 삭제를 위한 컨트롤러
// DELETE: /api/resumes/delete

export const deleteResume = async (req, res) => {
    try {
        const userId = req.userId;
        const {resumeId} = req.params;

        await Resume.findOneAndDelete({userId, _id: resumeId})

        // 완료하면 반환하는 메세지
        return res.status(200).json({message:'이력서 삭제를 완료했습니다'})

    } catch (error) {
        return res.status(400).json({message: error.message})

    }
}

// 사용자 아력서 id를 가져오자
// GET: /api/resumes/get

export const getResumeById = async (req, res) => {
    try {
        const userId = req.userId;
        const {resumeId} = req.params;

        const resume = await Resume.findOne({userId, _id: resumeId}).
        select("-__v -createdAt -updatedAt");

        if(!resume) {
            return res.status(404).json({message: "이력서를 찾을 수 없습니다"})
        }

        return res.status(200).json({resume})


    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

// 이력서 공개처리한(public) id를 가져오자
// GET: /api/resumes/public

export const getPublicResumeById = async (req, res) => {
    try {
        const { resumeId } = req.params;
        const resume = await Resume.findOne({public: true, _id: resumeId})

        if(!resume){
            return res.status(404).json({message: "이력서를 찾을 수 없습니다"})
        }
        return res.status(200).json({resume})
    } catch(error) {
        return res.status(400).json({message: error.message})
    }
}

// 이력서 업데이트를 위한 컨트롤러
// PUT: /api/resumes/update
export const updateResume = async (req, res) => {
    try {
        const userId = req.userId;
        const {resumeId, resumeData, removeBackground} = req.body
        const image = req.file

        let resumeDataCopy = JSON.parse(resumeData);
        const resume = await Resume.findOneAndUpdate({userId, _id: resumeId}, resumeDataCopy, {new:true})
        
        return res.status(200).json({message:'수정 완료'}, resume )
    } catch(error) {
        return res.status(400).json({message: error.message})
    }
}


