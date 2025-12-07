import { User } from "lucide-react";
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
            <div>
              <User />
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
        {/* {typeof data.image === "object" && 
            <div>
                <p>배경 제거</p>
            </div>} */}
      </div>
    </div>
  );
};

export default PersonalInfoForm;
