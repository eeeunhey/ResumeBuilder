import { useState } from "react"
import { useParams } from "react-router-dom"

const ResumeBuilder = () => {

  const {resumeId} = useParams();

  const [resumeData, setResumeData] = useState({
    _id: '',
    title:'',
    personal_info: {}, 
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills:[],
    template: "classic",
    accent_color: "#3B83F6",
    public: false,
  })
  
  return (
    <div>

    </div>
  )
}

export default ResumeBuilder