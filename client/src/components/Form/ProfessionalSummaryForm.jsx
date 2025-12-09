import { Sparkle } from "lucide-react";
import React from "react";

const ProfessionalSummaryForm = ({ data, onChange, setResumeData }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
            핵심 역량 소개
          </h3>
          <p className="text-sm text-gray-500">
            간단한 자기소개/경력 요약을 입력하세요
          </p>
        </div>
        <button className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50">
          <Sparkle className="size-4" />
         AI 자동 개선
        </button>
      </div>

      <div>
        <textarea
          value={data || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          className="w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500
                outline-none transition-colors resize-none"
          placeholder="당신의 주요 경험과 역량을 중심으로 간단한 소개를 작성해 주세요"
        />
        <p className="text-xs text-gray-500 max-w-4/5 mx-auto text-center ">
          작성 팁: 3~4문장 정도로 간결하게 작성하고, 가장 관련성 높은 성과와
          역량에 집중해 주세요.
        </p>
      </div>
    </div>
  );
};

export {ProfessionalSummaryForm};
