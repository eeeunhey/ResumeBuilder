import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const initialResumeData = {
  _id: "",
  title: "",
  personal_info: {},
  professional_summary: "",
  experience: [],
  education: [],
  project: [],
  skills: [],
  template: "classic",
  accent_color: "#3B82F6",
  public: false,
};

const ResumeBuilder = () => {
  const { resumeId } = useParams();

  const [resumeData, setResumeData] = useState(initialResumeData);

  const loadExistingResume = () => {

  }

  useEffect(()=>{},[])

  return <div></div>;
};

export default ResumeBuilder;
