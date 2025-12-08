import {
  BriefcaseBusiness,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
  Icon,
  Github,
} from "lucide-react";
import React from "react";

const PersonalInfoForm = ({
  data,
  onChange,
  removeBackground,
  setRemoveBackground,
}) => {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  const fields = [
    {
      key: "full_name",
      label: "이름",
      icon: User,
      type: "text",
      required: true,
    },
    {
      key: "email",
      label: "이메일 주소",
      icon: Mail,
      type: "email",
      required: true,
    },
    { key: "phone", label: "연락처", icon: Phone, type: "tel" },
    { key: "location", label: "지역", icon: MapPin, type: "text" },
    { key: "profession", label: "회사", icon: BriefcaseBusiness, type: "text" },
    { key: "linkedin", label: "Linkedin 프로필", icon: Linkedin, type: "url" },
    { key: "website", label: "개인 웹사이트 주소", icon: Globe, type: "url" },
    { key: "github", label: "깃허브 주소", icon: Github, type: "url" },
  ];

  const addObjectParticle = (word) => {
    const lastChar = word[word.length - 1];
    const unicode = lastChar.charCodeAt(0);

    // 받침이 있으면 → "을"
    if ((unicode - 44032) % 28 !== 0) return `${word}을`;
    // 받침이 없으면 → "를"
    return `${word}를`;
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800">개인정보 입력</h3>
      <p className="text-sm text-gray-600"> 기본 정보를 입력해 주세요 </p>
      <div className="flex items-center gap-2">
        <label>
          {data?.image ? (
            <img
              src={
                typeof data.image === "string"
                  ? data.image
                  : URL.createObjectURL(data.image)
              }
              alt="user-image"
              className="w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80"
            />
          ) : (
            <div className="inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer">
              <User className="size-10 p-2.5 border rounded-full" />
              사용하실 프로필 이미지를 선택해 주세요
            </div>
          )}
          <input
            type="file"
            accept="image/jpeg, image/png"
            className="hidden"
            onChange={(e) => handleChange("image", e.target.files[0])}
          />
        </label>
        {typeof data?.image === "object" && (
          <div className="flex flex-col gap-1 pl-4 text-sm">
            <p>배경 제거</p>
            <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setRemoveBackground((prev) => !prev)}
                checked={removeBackground}
              />
              <div className="w-9 h-5 bg-slate-300 rounded-full peer peer-checked:bg-green-600 transition-colors duration-200"></div>
              <span className="dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4"></span>
            </label>
          </div>
        )}
      </div>

      {fields.map((field) => {
        const Icon = field.icon;
        return (
          <div key={field.key} className="space-y-1 mt-5">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Icon className="size-4" />
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type={field.type}
              value={data[field.key] || ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring 
                  focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm"
              placeholder={`${addObjectParticle(field.label)} 입력해 주세요`}
              required={field.required}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PersonalInfoForm;
