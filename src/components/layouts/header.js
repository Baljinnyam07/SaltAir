"use client";

import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const path = usePathname().split("/")[1];
  const router = useRouter();

  const pushHome = () => {
    router.push("/");
  };

  const pushFaci = () => {
    router.push("/facilities");
  };

  const pushContact = () => {
    router.push("/contact-us");
  };

  const pushSign = () => {
    router.push("/sign-in");
  };
  return (
    <div className="text-black w-[1535px] ml-[193px] absolute top-0">
      <div className="flex justify-between">
        <div className="w-[256px] bg-[#E0B973] rounded-b-[40px] text-[#14274A] pt-[22px] pb-[40px] h-[150px] ">
          <div className="text-[36px] font-[400] tracking-[4px] flex justify-center custom-font">
            SALT AIR
          </div>
          <div className="custom-font-extra text-[15px] font-[900] tracking-[8px] leading-normal flex justify-center mt-[5px]">
            MONGOLIA
          </div>
        </div>
        <div className="flex gap-[86px] items-center font-[400] text-[25px] leading-normal text-[#fff]">
          <div
            onClick={pushHome}
            className="cursor-pointer relative"
            style={{
              fontWeight: path === "" ? 700 : 400,
            }}
          >
            {path === "" ? (
              <div className="absolute h-1 w-full bg-[#fff] bottom-[-26px]"></div>
            ) : (
              ""
            )}
            Нүүр хуудас
          </div>
          <div
            onClick={pushFaci}
            className="cursor-pointer relative"
            style={{
              fontWeight: path === "facilities" ? 700 : 400,
            }}
          >
            {path === "facilities" ? (
              <div className="absolute h-1 w-full bg-[#fff] bottom-[-26px]"></div>
            ) : (
              ""
            )}
            Салбар
          </div>
          <div
            onClick={pushContact}
            className="cursor-pointer relative"
            style={{
              fontWeight: path === "contact-us" ? 700 : 400,
            }}
          >
            {path === "contact-us" ? (
              <div className="absolute h-1 w-full bg-[#fff] bottom-[-26px]"></div>
            ) : (
              ""
            )}
            Холбоо барих
          </div>
          <div
            onClick={pushSign}
            className="cursor-pointer relative"
            style={{
              fontWeight:
                path === "sign-in" || path === "create-account" ? 700 : 400,
            }}
          >
            {path === "sign-in" || path === "create-account" ? (
              <div className="absolute h-1 w-full bg-[#fff] bottom-[-26px]"></div>
            ) : (
              ""
            )}
            Нэвтрэх
          </div>
        </div>
      </div>
    </div>
  );
};
