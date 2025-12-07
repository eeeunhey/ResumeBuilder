import { User } from "lucide-react";
import React from "react";

const PersonalInfoForm = ({
  data,
  onChange,
  removeBackground,
  setRemoveBackground,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800">개인정보 입력</h3>
      <p className="text-sm text-gray-600"> 기본 정보를 입력해 주세요 </p>
      <div className="flex items-center gap-2">
        <label>
            {data?.image ? (
              <img src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)} alt="user-image" className="w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80"/>  
            ):(
                <div>
                    <User />
                    upload user image
                </div>
            )}
            <input />
        </label>
      </div>
    </div>
  );
};

export default PersonalInfoForm;
