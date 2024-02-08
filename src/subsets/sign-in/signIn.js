"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SignIn = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const pushCreate = () => {
    router.push("/create-account");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <div className="h-[465px] bg-[#14274A]">
        <div className="text-white text-[80px] font-bold pt-[204px] pl-[740px]">
          НЭВТРЭХ
        </div>
      </div>
      <div className="w-[573px] h-[389px] relative ml-[677px] mt-[64px] mb-[262px]">
        <div className="w-[570px] h-[389px] left-[3px] top-0 absolute">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-[145px] h-[78px] left-[425px] top-[311px] absolute bg-[#E0B973] rounded-md"
          >
            <div className="w-[95px] h-[29px] left-[25px] top-[24px] absolute text-white text-[25px] font-bold font-Montserrat">
              Submit
            </div>
          </button>
          <div className="w-[570px] text-[#14274A] h-[260px] left-0 top-0 absolute">
            <div className="left-0 top-0 absolute text-blue-950 text-[25px] font-normal font-Actor">
              Нэвтрэх нэр{" "}
            </div>
            <div className="left-0 top-[145px] absolute text-blue-950 text-[25px] font-normal font-Actor">
              Нууц үг
            </div>
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleInputChange}
              tabIndex="1"
              className="w-[570px] h-[78px] left-0 top-[37px] absolute bg-white border-2 border-blue-950 border-opacity-50"
            ></input>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              tabIndex="2"
              className="w-[570px] h-[78px] left-0 top-[182px] absolute bg-white border-2 border-blue-950 border-opacity-50"
            ></input>
          </div>
        </div>
        <div className="w-[236px] h-[27px] left-[9px] top-[268px] absolute">
          <input
            type="checkbox"
            className="w-[30px] h-[30px] left-0 top-0 absolute bg-orange-300 shadow"
          ></input>

          <div className="w-[212px] h-[27px] left-[45px] top-0 absolute text-blue-950 text-xl font-normal font-Open Sans leading-9 tracking-tight">
            Remember me
          </div>
        </div>
        <div className="w-[180px] h-[25px] left-[393px] top-[268px] absolute text-right text-blue-950 text-xl font-normal font-Open Sans leading-9 tracking-tight">
          Forget password
        </div>
        <div
          onClick={pushCreate}
          className="w-[215px] cursor-pointer h-[25px] left-0 top-[339px] absolute text-right text-blue-950 text-xl font-bold font-Open Sans leading-9 tracking-tight"
        >
          Шинээр бүртгүүлэх
        </div>
      </div>
    </>
  );
};
