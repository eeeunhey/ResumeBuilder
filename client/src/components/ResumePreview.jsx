import React from "react";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalImageTemplate from "./templates/MinimalImageTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";

const ResumePreview = ({ data, template, accentColor, classes = " " }) => {
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;
      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />;

      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  };

  return (
    <div className="w-full bg-gray-100">
      <div
        className={
          "border border-gray-200 print:shadow-none print:border-none" + classes
        }
      >
        {renderTemplate()}
      </div>

      <style jsx>{`
        /* 페이지 인쇄 기본 설정 */
        @page {
          size: letter;
          margin: 0;
        }

        /* 인쇄될 때 적용되는 스타일 */
        @media print {
          html,
          body {
            width: 8.5in;
            height: 11in;
            overflow: hidden;
          }

          /* 전체 요소 숨기기 */
          body * {
            visibility: hidden;
          }

          /* resume-preview만 보이게 만들기 */
          #resume-preview,
          #resume-preview * {
            visibility: visible;
          }

          /* 프린트될 resume-preview는 화면 기준 절대 좌표로 배치 */
          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
            box-shadow: none !important;
            border: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ResumePreview;
