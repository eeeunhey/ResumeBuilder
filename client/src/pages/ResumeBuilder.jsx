import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import { Link } from "react-router-dom";
import { ArrowLeftIcon, Briefcase, FileText, GraduationCap, User, FolderIcon, Sparkles } from "lucide-react";

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
    const resume = dummyResumeData.find((resume) => resume._id === resumeId);
    if (!resume) return;

    setResumeData({ ...resume });
    document.title = resume.title;
  };

  const sections = [
    {id: "personal", name: "Persionla Info", icon: User},
    {id: " summary", name: "Summary", icon: FileText},
    {id: "exprience", name: "Exprience", icon: Briefcase},
    {id: "education", name: "Education", icon: GraduationCap},
    {id: "projects", name: "Projects", icon:FolderIcon},
    {id: "skills", name:"Skills", icon: Sparkles},
  ]

  useEffect(() => {
    loadExistingResume();
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to={"/app"}
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
        >
          <ArrowLeftIcon className="size-4" /> Dashboard 로 이동하기
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div>
          {/* 왼쪽 부분 - 폼부분 */}
          <div></div>

          {/* 오른쪽 부분 - 미리보기 부분 */}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
