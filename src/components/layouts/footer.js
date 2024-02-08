import { Facebook, FooterLogo, Insta, Twitter } from "@/assets";

export const Footer = () => (
  <div className="h-[266px] bg-[#14274A]">
    <div className="w-[988.021px] mx-auto h-[111px] pt-[89px] text-[#F7F7F7]">
      <div className="flex">
        <div>
          <FooterLogo />
          <div className="mt-[22px] w-[264px] h-[51px] text-[14px] font-[400] text-stroke-width-1 leading-normal">
            497 Evergreen Rd. Roseville, CA 95673 +976 88069906
            <div>salt_air@gmail.com</div>
          </div>
        </div>
        <div className="text-stroke-width-[0.5] text-[16px] font-[400] leading-10 ml-[239px]">
          <div className="cursor-pointer">Бидний тухай</div>
          <div className="cursor-pointer">Холбоо барих</div>
          <div className="cursor-pointer">Үйлчилгээний нөхцөл</div>
        </div>
        <div className="ml-[171px] text-[16px] font-[400] flex gap-[26px]">
          <div className="flex flex-col gap-3 mt-2">
            <Facebook />
            <Twitter />
            <Insta />
          </div>
          <div className="leading-[31px]">
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Instagram</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
