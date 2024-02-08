import { Arrow, Book, PaggiL, PaggiR, Scroll } from "@/assets";

export const ContactPage = () => (
  <>
    <div className="h-[465px] bg-[#14274A]">
      <div className="text-white text-[80px] font-bold pt-[204px] pl-[487px]">
        БИДЭНТЭЙ ХОЛБОГДОХ
      </div>
    </div>
    <div className="text-[#14274A]">
      <div className="w-[1509px] h-[167px] relative mt-[210px] ml-[200px] mb-[181px]">
        <div className="left-0 top-0 absolute text-blue-950 text-[60px] font-[400] tracking-[-0.05em]">
          БИД ТАНЫ ХҮСЭЛТ ГОМДЛЫГ ХҮЛЭЭЖ АВНА
        </div>
        <div className="w-[1509px] left-0 top-[107px] absolute text-blue-950 text-[25px] font-normal">
          Манай энэ салбар зүүн 4 замын эсрэг талд байдаг ба таньд тав тухтай
          үйлчилэх болно. Хүрэлцэн ирнэ үү
          <br />
          Бид таныг хүлээн авах болно. Тавтай морил
        </div>
      </div>
    </div>
    <div className="flex gap-[144px] ml-[200px] mb-[510px]">
      <div className="w-[795px] h-[351px] relative">
        <div className="left-0 top-[243px] absolute text-blue-950 text-[40px] font-normal  ">
          Phone: +976 99657556
          <br />
          Email: salt_air@gmail.com
        </div>
        <div className="w-[325px] cursor-pointer h-[53px] left-0 top-[136px] absolute">
          <div className="w-[214px] h-[53px] left-0 top-0 absolute text-blue-950 text-[40px] font-bold  ">
            View map
          </div>
          <div className="absolute right-0 top-4">
            <Arrow />
          </div>
        </div>
        <div className="whitespace-nowrap left-0 top-0 absolute text-blue-950 text-[40px] font-normal">
          БЗД, 25-р хороо, барилгачидын гудам,
          <br />
          шилэн байр, 901
        </div>
      </div>
      <div className="w-[570px] h-[809px] relative">
        <div className="w-[145px] cursor-pointer h-[78px] left-[425px] top-[731px] absolute bg-[#E0B973] rounded-md">
          <div className="w-[95px] h-[29px] left-[25px] top-[24px] absolute text-white text-[25px] font-bold">
            Submit
          </div>
        </div>
        <div className="w-[570px] h-[679px] left-0 top-0 absolute">
          <div className="left-0 top-0 absolute text-blue-950 text-[25px] font-normal  ">
            Нэр
          </div>
          <div className="left-0 top-[145px] absolute text-blue-950 text-[25px] font-normal  ">
            Емайл хаяг
          </div>
          <div className="left-0 top-[290px] absolute text-blue-950 text-[25px] font-normal  ">
            Message
          </div>
          <div className="w-[570px] h-[78px] left-0 top-[37px] absolute bg-white border-2 border-blue-950 border-opacity-50"></div>
          <div className="w-[570px] h-[78px] left-0 top-[182px] absolute bg-white border-2 border-blue-950 border-opacity-50"></div>
          <div className="w-[570px] h-[352px] left-0 top-[327px] absolute bg-white border-2 border-blue-950 border-opacity-50"></div>
        </div>
      </div>
    </div>
  </>
);
