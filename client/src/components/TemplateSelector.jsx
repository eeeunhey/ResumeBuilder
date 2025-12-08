import { Layout } from "lucide-react";

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
    <button onClick={() => setIsOpen(!isOpen)}>
        <Layout size={14} /> <span className="max-sm:hidden">Template</span>
    </button>
  </div>);
};

export default TemplateSelector;
