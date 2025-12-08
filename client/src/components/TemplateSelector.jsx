import { Check, Layout } from "lucide-react";
import { useState } from "react";

const TemplateSelector = ({ selectTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const template = [
    {
      id: "classic",
      name: "Classic",
      preview:
        "필요한 정보가 깔끔하게 정리된 기본형 템플릿으로, 다양한 상황에서 기본적으로 활용할 수 있습니다. ",
    },

    {
      id: "modern",
      name: "Modern",
      preview:
        "세련되고 깔끔한 인상을 주는 템플릿으로, 이력서에 보다 전문적이고 정돈된 느낌을 더하고 싶을 때 잘 어울립니다.”",
    },

    {
      id: "minimal Image",
      name: "Minimal Image",
      preview:
        "한 장의 이미지를 중심으로 깔끔한 글꼴과 단정한 레이아웃을 더해, 내용을 담백하게 전달하고 싶은 분들에게 잘 어울리는 미니멀 스타일 템플릿입니다. ",
    },

    {
      id: "minimal",
      name: "Minimal",
      preview:
        "군더더기 없는 구성으로 핵심 정보가 자연스럽게 눈에 들어오도록 설계된 템플릿으로, 내용 전달에 집중하고 싶은 분들에게 가장 무난하게 어울리는 스타일입니다. ",
    },
  ];
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((isOpen)=>!isOpen)}
        className="flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg "
      >
        <Layout size={14} /> <span className="max-sm:hidden">Template</span>
      </button>

      {isOpen && (
        <div className="absolute top-full w-xs p-3 mt-2 space-y-3 z-10 bg-white rounded-md border border-gray-200 shadow-sm">
          {template.map((template) => (
            <div
              key={template.id}
              onClick={() => {
                onChange(template.id);
                setIsOpen(false);
              }}
              className={`relative p-3 border rounded-md cursor-pointer transition-all ${
                selectTemplate === template.id
                  ? "border-blue-400 bg-blue-100"
                  : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"
              }`}
            >
              {selectTemplate === template.id && (
                <div className="absolute top-2 right-2">
                  <div className="size-5 bg-blue-400 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <h4 className="font-medium text-gray-800"> {template.name}</h4>
                <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-gray-800">{template.preview}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
