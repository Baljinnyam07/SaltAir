"use client";

import { useState } from "react";

export const CreateAccount = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    registrationNumber: "",
    phone: "",
    email: "",
  });
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
          БҮРТГҮҮЛЭХ
        </div>
      </div>
      <div className="w-[570px] h-[829px] relative mt-[66px] ml-[674px] mb-[342px]">
        <div className="w-[570px] h-[695px] text-[#14274A] left-0 top-0 absolute">
          <div className="left-0 top-0 absolute text-blue-950 text-[25px] font-normal font-['Actor']">
            Овог
          </div>
          <div className="left-0 top-[145px] absolute text-blue-950 text-[25px] font-normal font-['Actor']">
            Нэр
          </div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            tabIndex="1"
            className="w-[570px] h-[78px] left-0 top-[37px] absolute bg-white border-2 border-blue-950 border-opacity-50"
          ></input>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            tabIndex="2"
            className="w-[570px] h-[78px] left-0 top-[182px] absolute bg-white border-2 border-blue-950 border-opacity-50"
          ></input>
          <div className="left-0 top-[290px] absolute text-blue-950 text-[25px] font-normal font-['Actor']">
            Регистрийн дугаар
          </div>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleInputChange}
            tabIndex="3"
            className="w-[570px] h-[78px] left-0 top-[327px] absolute bg-white border-2 border-blue-950 border-opacity-50"
          ></input>
          <div className="left-0 top-[435px] absolute text-blue-950 text-[25px] font-normal font-['Actor']">
            Утас
          </div>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            tabIndex="4"
            className="w-[570px] h-[78px] left-0 top-[472px] absolute bg-white border-2 border-blue-950 border-opacity-50"
          ></input>
          <div className="left-0 top-[580px] absolute text-blue-950 text-[25px] font-normal font-['Actor']">
            Емайл
          </div>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            tabIndex="5"
            className="w-[570px] h-[78px] left-0 top-[617px] absolute bg-white border-2 border-blue-950 border-opacity-50"
          ></input>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-[145px] h-[78px] left-[425px] top-[751px] absolute bg-[#E0B973] rounded-md"
        >
          <div className="w-[95px] h-[29px] left-[25px] top-[24px] absolute text-white text-[25px] font-bold font-['Montserrat']">
            Submit
          </div>
        </button>
      </div>
    </>
  );
};
