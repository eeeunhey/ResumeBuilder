import { Briefcase, Plus, Sparkles, Trash2 } from "lucide-react";

const ExperienceForm = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience = {
      company: "",
      position: "",
      start_date: "",
      end_date: "",
      description: "",
      is_current: false,
    };
    onChange([...data, newExperience]);
  };

  const removeExperience = (index) => {
    const updated = data.filter((_, i) => i !== index);
    onChange(updated);
  };

  const updateExperience = (index, field, value) => {
    const updated = [...data];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            경력 사항
          </h3>
          <p className="text-sm text-gray-500">직무 경력을 추가해 주세요</p>
        </div>

        <button
          onClick={addExperience}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50"
        >
          <Plus className="size-4" />
          경력 추가
        </button>
      </div>

      {data.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <Briefcase className="w-12 h-12 mx-auto mb-3" />
          <p className="">입력된 경력 정보가 없습니다.</p>
          <p>"경력 추가" 버튼을 눌러 입력해보세요.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((experience, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3"
            >
              {/* 경력사항 삭제 */}
              <div className="flex justify-between items-start">
                <h4>경력 사항 #{index + 1}</h4>
                <button
                  onClick={() => removeExperience(index)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              {/* 경력사항 수정 */}
              <div className="grid md:grid-cols-2 gap-3">
                <input
                  value={experience.company || ""}
                  type="text"
                  placeholder="회사명"
                  className="px-3 py-2 text-sm rounded-lg"
                  onChange={(e) =>
                    updateExperience(index, "company", e.target.value)
                  }
                />

                <input
                  value={experience.position || ""}
                  type="text"
                  placeholder="직무 / 직책"
                  className="px-3 py-2 text-sm rounded-lg"
                  onChange={(e) =>
                    updateExperience(index, "position", e.target.value)
                  }
                />

                <input
                  value={experience.start_date || ""}
                  type="month"
                  placeholder="근무 시작일"
                  className="px-3 py-2 text-sm rounded-lg"
                  onChange={(e) =>
                    updateExperience(index, "start_date", e.target.value)
                  }
                />

                <input
                  value={experience.end_date || ""}
                  type="month"
                  placeholder="근무 종료일"
                  disabled={experience.is_current}
                  className="px-3 py-2 text-sm rounded-lg disabled:bg-gray-100"
                  onChange={(e) =>
                    updateExperience(index, "end_date", e.target.value)
                  }
                />

              </div>

              <label className="space-y-6">
                <input type="checkbox" checked={experience.is_current || false}
                onChange={(e) => {updateExperience(index, "is_current", e.target.checked ? true : false)}}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700 px-2">
                    최근까지도 근무하고 있다면 체크해주세요
                </span>
              </label>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700"
                  >직무 경험 설명</label>
                  <button
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50"
                  >
                    AI 자동 개선
                    <Sparkles className="size-4"/>
                  </button>
                </div>
                  <textarea 
                  rows={4}
                  className="w-full text-sm px-3 py-2 rounded-lg resize-none"
                  placeholder="담당했던 주요 업무와 성과를 입력해 주세요"
                  value={experience.description || ""} onChange={(e) => { updateExperience(index, "description", e.target.value)}}/>
                  
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export {ExperienceForm};
