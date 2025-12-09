import { Plus, X, Sparkle } from "lucide-react";
import { useState } from "react";

const SkillsForm = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (indexToRemove) => {
    onChange(data.filter((_, i) => i !== indexToRemove));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
          기술 스택
        </h3>
        <p className="text-sm text-gray-500">보유 기술과 역량을 추가하세요</p>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="기술을 입력하세요 (예: JavaScript, React.js)"
          className="flex-1 px-3 py-2 text-sm"
          onChange={(e) => setNewSkill(e.target.value)}
          value={newSkill}
          onKeyDown={handleKeyPress}
        />
        <button
          onClick={addSkill}
          disabled={!newSkill.trim}
          className="flex items-center gap-2 px-2 text-sm 
            bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed
            "
        >
          <Plus className="size-4" /> 추가하기
        </button>
      </div>

      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.map((skill, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-gray-500">
          <Sparkle className="w-10 h-10 mx-auto mb-2 text-gray-300" />
          <p>아직 등록된 기술 스택이 없습니다</p>
          <p className="text-sm">
            입력창에 사용 중인 기술 스택을 입력해 주세요
          </p>
        </div>
      )}

      <div className="bg-blue-50 p-3 rounded-lg px-6">
        <p className="text-sm text-blue-800 font-semibold mb-2">💡 TIP :</p>

        <p className="text-sm text-blue-800 px-2">
          8~12개의 주요 기술 스택을 작성하면 역량을 명확하게 보여줄 수 있습니다.
        </p>

        <p className="text-sm text-blue-800 px-2">
          프로젝트 경험과 연관된 기술 중심으로 입력해 주세요.
        </p>
      </div>
    </div>
  );
};

export { SkillsForm };
