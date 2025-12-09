import { Briefcase, Plus, Sparkles, Trash2 } from "lucide-react";
import React from "react";

const EducationForm = ({ data, onChange }) => {
  const addEducation = () => {
    const newEducation = {
      institution: "",
      degree: "",
      field: "",
      graduation_date: "",
      gpa: "",
    };

    onChange([...data, newEducation]);
  };

  const removeEducation = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateEducation = (index, filed, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [filed]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            교육 이력
          </h3>
          <p className="text-sm text-gray-500">교육 이력을 추가해 주세요</p>
        </div>

        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors"
        >
          <Plus className="size-4" />
          교육 추가
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Briefcase className="w-12 h-12 mx-auto mb-3" />
          <p className="">입력된 교육 정보가 없습니다.</p>
          <p>"교육 추가" 버튼을 눌러 입력해보세요.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((education, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              {/* 교육사항 삭제 */}
              <div className="flex justify-between items-start">
                <h4>교육 이력 #{index + 1}</h4>
                <button
                  onClick={() => removeEducation(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              {/* 교육사항 수정 */}
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={education.institution || ""}
                  type="text"
                  placeholder="학교명 / 교육기관명"
                  className="px-3 py-2 text-sm rounded-lg"
                  onChange={(e) =>
                    updateEducation(index, "institution", e.target.value)
                  }
                />

                <input
                  value={education.degree || ""}
                  type="text"
                  placeholder="학위 (예: 학사, 석사)"
                  className="px-3 py-2 text-sm "
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                />

                <input
                  value={education.field || ""}
                  type="text"
                  placeholder="전공 (예: 컴퓨터공학)"
                  className="px-3 py-2 text-sm "
                  onChange={(e) =>
                    updateEducation(index, "field", e.target.value)
                  }
                />

                <input
                  value={education.graduation_date || ""}
                  type="month"
                  placeholder="졸업 년도"
                  className="px-3 py-2 text-sm "
                  onChange={(e) =>
                    updateEducation(index, "graduation_date", e.target.value)
                  }
                />
              </div>

              <input 
                value={education.gpa || ""} onChange={(e)=>updateEducation(index, "gpa", e.target.value)}
                type="text" className="px-3 py-2 text-sm" placeholder="학점 (선택 입력)"
              />
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;
