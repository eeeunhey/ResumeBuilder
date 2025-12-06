import { useState } from "react";
import { Lock, Mail, User2Icon } from "lucide-react";

const Login = () => {
  const query = new URLSearchParams(window.location.search)
  const urlState = query.get('state') 
  const [state, setState] = useState(urlState ||"login")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 공통 입력 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();

    if (state === "login") {
      console.log("로그인 요청:", {
        email: formData.email,
        password: formData.password,
      });
    } else {
      console.log("회원가입 요청:", formData);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 py-10 bg-white shadow-md"
      >
        {/* 제목 */}
        <h1 className="text-gray-900 text-3xl mt-2 font-medium">
          {state === "login" ? "로그인" : "회원가입"}
        </h1>

        <p className="text-gray-500 text-sm mt-2">
          계속하려면 {state === "login" ? "로그인" : "회원가입"} 해주세요
        </p>

        {/* 회원가입일 때 이름 입력 */}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
            <User2Icon className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              name="name"
              placeholder="이름"
              className="border-none outline-none ring-0 w-full text-sm"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        )}

        {/* 이메일 입력 */}
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail className="w-4 h-4 text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="이메일"
            className="border-none outline-none ring-0 w-full text-sm"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock className="w-4 h-4 text-gray-500" />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            className="border-none outline-none ring-0 w-full text-sm"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        {/* 비밀번호 찾기 */}
        <div className="mt-4 text-left text-indigo-500 text-sm">
          <button type="button">비밀번호 찾기</button>
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity text-sm font-medium"
        >
          {state === "login" ? "로그인" : "회원가입"}
        </button>

        {/* 로그인/회원가입 전환 */}
        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-gray-500 text-sm mt-3 mb-1 cursor-pointer"
        >
          {state === "login"
            ? "계정이 없으신가요? 회원가입"
            : "이미 계정이 있으신가요? 로그인"}
        </p>
      </form>
    </div>
  );
};

export default Login;
