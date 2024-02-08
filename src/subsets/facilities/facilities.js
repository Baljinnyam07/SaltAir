import { Book, PaggiL, PaggiR, Scroll } from "@/assets";
import headerBg from "@/assets/pics/facilitiesBg.png";
import room from "@/assets/pics/room.png";

export const FacilitiesPage = () => (
  <>
    <div className="h-[1033px]">
      <div
        style={{
          backgroundImage: `url(${headerBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            paddingLeft: "193px",
            paddingTop: "290px",
            lineHeight: "100px",
          }}
        >
          <div className="text-[50px] font-[400]">WELCOME TO</div>
          <div className="font-[800] text-[154px] tracking-[10.78px] custom-font-extra">
            SALT AIR
          </div>
          <div className="font-[400] text-[60px] tracking-[24px] custom-font mt-4 pb-0">
            MONGOLIA
          </div>
          <div className="text-[25px] font-[400] tracking-[2.5px] w-[1086px] leading-tight h-[60px]">
            Та захиалгаа онлайнаар өгөхийн зэрэгцээ манай хаяг байлшил, өрөөний
            зохион байгуулалт, үйлчилгээ зэрэг мэдээллүүдийг авна уу
          </div>
        </div>
        <div className="flex justify-center mt-[108px] cursor-pointer">
          <Book />
        </div>
        <div className="flex justify-center mt-[70px] text-[25px] font-[700] tracking-[1.25px]">
          Scroll
        </div>
        <div className="flex justify-center mt-[8.16px] animate-bounce h-2">
          <Scroll />
        </div>
      </div>
    </div>
    <div className="text-[#14274A]">
      <div className="w-[1540px] h-44 relative ml-[193px] mt-[120px] mb-[116px]">
        <div className="w-[1540px] left-0 top-[106px] absolute text-center text-blue-950 text-[25px] font-[500]">
          Манай энэ салбар зүүн 4 замын эсрэг талд байдаг ба таньд тав тухтай
          үйлчилэх болно. Хүрэлцэн ирнэ үү
          <br />
          Бид таныг хүлээн авах болно. Тавтай морил
        </div>
        <div className="left-[432px] top-0 absolute text-center text-blue-950 text-6xl font-extrabold custom-font-extra tracking-[3px]">
          {" "}
          GRAND PLAZA ROOMS
        </div>
      </div>
      <div>
        <div className="flex gap-[271px] mb-[154px]">
          <div className="w-[583px] h-[657.24px] relative ml-[86px]">
            <div className="left-0 top-0 absolute">
              <div className="w-[284px] h-[62.24px] left-0 bg-[#E0B973] rounded-md top-[579px] absolute">
                <div className="w-[202px] h-6 left-[39px] top-[20px] absolute text-white text-xl font-bold  ">
                  ЗАХИАЛГА ӨГӨХ
                </div>
              </div>
              <div className="w-[242.68px] whitespace-normal h-[135.51px] left-0 top-0 absolute text-blue-950 text-6xl font-normal custon-font-normal tracking-wide">
                ROOM 1
              </div>
            </div>
            <div className="left-0 top-[136px] absolute text-black text-[27px] font-normal   leading-10">
              Суудлийн тоо :
            </div>
            <div className="left-[377px] top-[136px] absolute text-black text-[27px] font-bold   leading-10">
              10
            </div>
            <div className="left-[377px] top-[192px] absolute text-black text-[27px] font-bold   leading-10">
              ROOM 1
            </div>
            <div className="left-[377px] top-[248px] absolute text-black text-[27px] font-bold   leading-10">
              Олон хүний
            </div>
            <div className="left-[377px] top-[304px] absolute text-black text-[27px] font-bold   leading-10">
              11:10 - 12:50 pm
            </div>
            <div className="left-[377px] top-[344px] absolute text-black text-[27px] font-bold   leading-10">
              1:00 - 2:10 pm
            </div>
            <div className="left-[377px] top-[384px] absolute text-black text-[27px] font-bold   leading-10">
              5:30 - 6:00 pm
            </div>
            <div className="left-[1px] top-[192px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний нэр :
            </div>
            <div className="left-[1px] top-[248px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний ангилал :
            </div>
            <div className="left-0 top-[304px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний захийлга :
            </div>
          </div>
          <div className="w-[859px] h-[676px] relative">
            <div className="w-[859px] h-[676px] left-0 top-0 absolute">
              <img
                className="w-[859px] h-[676px] left-0 top-0 absolute"
                src={room.src}
                alt="room"
              />
              <div className="w-[859px] h-[676px] left-0 top-0 absolute bg-blue-950 bg-opacity-30"></div>
            </div>
            <div className="w-[371.87px] h-[48.19px] left-[243.56px] top-[627.81px] absolute">
              <div className="w-[371.87px] h-[48.19px] left-0 top-0 absolute bg-white"></div>
              <div className="w-[125.04px] h-[37.91px] left-[123.41px] top-[10.28px] absolute text-center text-blue-950 text-3xl font-bold font-['Montserrat']">
                ROOM 1
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[185px] mb-[138px]">
          <div className="w-[859px] h-[676px] relative ml-[86px]">
            <div className="w-[859px] h-[676px] left-0 top-0 absolute">
              <img
                className="w-[859px] h-[676px] left-0 top-0 absolute"
                src={room.src}
                alt="room"
              />
              <div className="w-[859px] h-[676px] left-0 top-0 absolute bg-blue-950 bg-opacity-30"></div>
            </div>
            <div className="w-[371.87px] h-[48.19px] left-[243.56px] top-[627.81px] absolute">
              <div className="w-[371.87px] h-[48.19px] left-0 top-0 absolute bg-white"></div>
              <div className="w-[125.04px] h-[37.91px] left-[123.41px] top-[10.28px] absolute text-center text-blue-950 text-3xl font-bold font-['Montserrat']">
                ROOM 2
              </div>
            </div>
          </div>
          <div className="w-[583px] h-[657.24px] relative ">
            <div className="left-0 top-0 absolute">
              <div className="w-[284px] h-[62.24px] left-0 bg-[#E0B973] rounded-md top-[579px] absolute">
                <div className="w-[202px] h-6 left-[39px] top-[20px] absolute text-white text-xl font-bold  ">
                  ЗАХИАЛГА ӨГӨХ
                </div>
              </div>
              <div className="w-[242.68px] whitespace-normal h-[135.51px] left-0 top-0 absolute text-blue-950 text-6xl font-normal custon-font-normal tracking-wide">
                ROOM 2
              </div>
            </div>
            <div className="left-0 top-[136px] absolute text-black text-[27px] font-normal   leading-10">
              Суудлийн тоо :
            </div>
            <div className="left-[377px] top-[136px] absolute text-black text-[27px] font-bold   leading-10">
              10
            </div>
            <div className="left-[377px] top-[192px] absolute text-black text-[27px] font-bold   leading-10">
              ROOM 2
            </div>
            <div className="left-[377px] top-[248px] absolute text-black text-[27px] font-bold   leading-10">
              Олон хүний
            </div>
            <div className="left-[377px] top-[304px] absolute text-black text-[27px] font-bold   leading-10">
              11:10 - 12:50 pm
            </div>
            <div className="left-[377px] top-[344px] absolute text-black text-[27px] font-bold   leading-10">
              1:00 - 2:10 pm
            </div>
            <div className="left-[377px] top-[384px] absolute text-black text-[27px] font-bold   leading-10">
              5:30 - 6:00 pm
            </div>
            <div className="left-[1px] top-[192px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний нэр :
            </div>
            <div className="left-[1px] top-[248px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний ангилал :
            </div>
            <div className="left-0 top-[304px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний захийлга :
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-[271px] mb-[154px]">
          <div className="w-[583px] h-[657.24px] relative ml-[86px]">
            <div className="left-0 top-0 absolute">
              <div className="w-[284px] h-[62.24px] left-0 bg-[#E0B973] rounded-md top-[579px] absolute">
                <div className="w-[202px] h-6 left-[39px] top-[20px] absolute text-white text-xl font-bold  ">
                  ЗАХИАЛГА ӨГӨХ
                </div>
              </div>
              <div className="w-[242.68px] whitespace-normal h-[135.51px] left-0 top-0 absolute text-blue-950 text-6xl font-normal custon-font-normal tracking-wide">
                ROOM 3
              </div>
            </div>
            <div className="left-0 top-[136px] absolute text-black text-[27px] font-normal   leading-10">
              Суудлийн тоо :
            </div>
            <div className="left-[377px] top-[136px] absolute text-black text-[27px] font-bold   leading-10">
              10
            </div>
            <div className="left-[377px] top-[192px] absolute text-black text-[27px] font-bold   leading-10">
              ROOM 3
            </div>
            <div className="left-[377px] top-[248px] absolute text-black text-[27px] font-bold   leading-10">
              Олон хүний
            </div>
            <div className="left-[377px] top-[304px] absolute text-black text-[27px] font-bold   leading-10">
              11:10 - 12:50 pm
            </div>
            <div className="left-[377px] top-[344px] absolute text-black text-[27px] font-bold   leading-10">
              1:00 - 2:10 pm
            </div>
            <div className="left-[377px] top-[384px] absolute text-black text-[27px] font-bold   leading-10">
              5:30 - 6:00 pm
            </div>
            <div className="left-[1px] top-[192px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний нэр :
            </div>
            <div className="left-[1px] top-[248px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний ангилал :
            </div>
            <div className="left-0 top-[304px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний захийлга :
            </div>
          </div>
          <div className="w-[859px] h-[676px] relative">
            <div className="w-[859px] h-[676px] left-0 top-0 absolute">
              <img
                className="w-[859px] h-[676px] left-0 top-0 absolute"
                src={room.src}
                alt="room"
              />
              <div className="w-[859px] h-[676px] left-0 top-0 absolute bg-blue-950 bg-opacity-30"></div>
            </div>
            <div className="w-[371.87px] h-[48.19px] left-[243.56px] top-[627.81px] absolute">
              <div className="w-[371.87px] h-[48.19px] left-0 top-0 absolute bg-white"></div>
              <div className="w-[125.04px] h-[37.91px] left-[123.41px] top-[10.28px] absolute text-center text-blue-950 text-3xl font-bold font-['Montserrat']">
                ROOM 3
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[185px] mb-[138px]">
          <div className="w-[859px] h-[676px] relative ml-[86px]">
            <div className="w-[859px] h-[676px] left-0 top-0 absolute">
              <img
                className="w-[859px] h-[676px] left-0 top-0 absolute"
                src={room.src}
                alt="room"
              />
              <div className="w-[859px] h-[676px] left-0 top-0 absolute bg-blue-950 bg-opacity-30"></div>
            </div>
            <div className="w-[371.87px] h-[48.19px] left-[243.56px] top-[627.81px] absolute">
              <div className="w-[371.87px] h-[48.19px] left-0 top-0 absolute bg-white"></div>
              <div className="w-[125.04px] h-[37.91px] left-[123.41px] top-[10.28px] absolute text-center text-blue-950 text-3xl font-bold font-['Montserrat']">
                ROOM 4
              </div>
            </div>
          </div>
          <div className="w-[583px] h-[657.24px] relative ">
            <div className="left-0 top-0 absolute">
              <div className="w-[284px] h-[62.24px] left-0 bg-[#E0B973] rounded-md top-[579px] absolute">
                <div className="w-[202px] h-6 left-[39px] top-[20px] absolute text-white text-xl font-bold  ">
                  ЗАХИАЛГА ӨГӨХ
                </div>
              </div>
              <div className="w-[242.68px] whitespace-normal h-[135.51px] left-0 top-0 absolute text-blue-950 text-6xl font-normal custon-font-normal tracking-wide">
                ROOM 4
              </div>
            </div>
            <div className="left-0 top-[136px] absolute text-black text-[27px] font-normal   leading-10">
              Суудлийн тоо :
            </div>
            <div className="left-[377px] top-[136px] absolute text-black text-[27px] font-bold   leading-10">
              10
            </div>
            <div className="left-[377px] top-[192px] absolute text-black text-[27px] font-bold   leading-10">
              ROOM 4
            </div>
            <div className="left-[377px] top-[248px] absolute text-black text-[27px] font-bold   leading-10">
              Олон хүний
            </div>
            <div className="left-[377px] top-[304px] absolute text-black text-[27px] font-bold   leading-10">
              11:10 - 12:50 pm
            </div>
            <div className="left-[377px] top-[344px] absolute text-black text-[27px] font-bold   leading-10">
              1:00 - 2:10 pm
            </div>
            <div className="left-[377px] top-[384px] absolute text-black text-[27px] font-bold   leading-10">
              5:30 - 6:00 pm
            </div>
            <div className="left-[1px] top-[192px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний нэр :
            </div>
            <div className="left-[1px] top-[248px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний ангилал :
            </div>
            <div className="left-0 top-[304px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний захийлга :
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-[271px] mb-[154px]">
          <div className="w-[583px] h-[657.24px] relative ml-[86px]">
            <div className="left-0 top-0 absolute">
              <div className="w-[284px] h-[62.24px] left-0 bg-[#E0B973] rounded-md top-[579px] absolute">
                <div className="w-[202px] h-6 left-[39px] top-[20px] absolute text-white text-xl font-bold  ">
                  ЗАХИАЛГА ӨГӨХ
                </div>
              </div>
              <div className="w-[242.68px] whitespace-normal h-[135.51px] left-0 top-0 absolute text-blue-950 text-6xl font-normal custon-font-normal tracking-wide">
                ROOM 5
              </div>
            </div>
            <div className="left-0 top-[136px] absolute text-black text-[27px] font-normal   leading-10">
              Суудлийн тоо :
            </div>
            <div className="left-[377px] top-[136px] absolute text-black text-[27px] font-bold   leading-10">
              10
            </div>
            <div className="left-[377px] top-[192px] absolute text-black text-[27px] font-bold   leading-10">
              ROOM 5
            </div>
            <div className="left-[377px] top-[248px] absolute text-black text-[27px] font-bold   leading-10">
              Олон хүний
            </div>
            <div className="left-[377px] top-[304px] absolute text-black text-[27px] font-bold   leading-10">
              11:10 - 12:50 pm
            </div>
            <div className="left-[377px] top-[344px] absolute text-black text-[27px] font-bold   leading-10">
              1:00 - 2:10 pm
            </div>
            <div className="left-[377px] top-[384px] absolute text-black text-[27px] font-bold   leading-10">
              5:30 - 6:00 pm
            </div>
            <div className="left-[1px] top-[192px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний нэр :
            </div>
            <div className="left-[1px] top-[248px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний ангилал :
            </div>
            <div className="left-0 top-[304px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний захийлга :
            </div>
          </div>
          <div className="w-[859px] h-[676px] relative">
            <div className="w-[859px] h-[676px] left-0 top-0 absolute">
              <img
                className="w-[859px] h-[676px] left-0 top-0 absolute"
                src={room.src}
                alt="room"
              />
              <div className="w-[859px] h-[676px] left-0 top-0 absolute bg-blue-950 bg-opacity-30"></div>
            </div>
            <div className="w-[371.87px] h-[48.19px] left-[243.56px] top-[627.81px] absolute">
              <div className="w-[371.87px] h-[48.19px] left-0 top-0 absolute bg-white"></div>
              <div className="w-[125.04px] h-[37.91px] left-[123.41px] top-[10.28px] absolute text-center text-blue-950 text-3xl font-bold font-['Montserrat']">
                ROOM 5
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[185px] mb-[138px]">
          <div className="w-[859px] h-[676px] relative ml-[86px]">
            <div className="w-[859px] h-[676px] left-0 top-0 absolute">
              <img
                className="w-[859px] h-[676px] left-0 top-0 absolute"
                src={room.src}
                alt="room"
              />
              <div className="w-[859px] h-[676px] left-0 top-0 absolute bg-blue-950 bg-opacity-30"></div>
            </div>
            <div className="w-[371.87px] h-[48.19px] left-[243.56px] top-[627.81px] absolute">
              <div className="w-[371.87px] h-[48.19px] left-0 top-0 absolute bg-white"></div>
              <div className="w-[125.04px] h-[37.91px] left-[123.41px] top-[10.28px] absolute text-center text-blue-950 text-3xl font-bold font-['Montserrat']">
                ROOM 6
              </div>
            </div>
          </div>
          <div className="w-[583px] h-[657.24px] relative ">
            <div className="left-0 top-0 absolute">
              <div className="w-[284px] h-[62.24px] left-0 bg-[#E0B973] rounded-md top-[579px] absolute">
                <div className="w-[202px] h-6 left-[39px] top-[20px] absolute text-white text-xl font-bold  ">
                  ЗАХИАЛГА ӨГӨХ
                </div>
              </div>
              <div className="w-[242.68px] whitespace-normal h-[135.51px] left-0 top-0 absolute text-blue-950 text-6xl font-normal custon-font-normal tracking-wide">
                ROOM 6
              </div>
            </div>
            <div className="left-0 top-[136px] absolute text-black text-[27px] font-normal   leading-10">
              Суудлийн тоо :
            </div>
            <div className="left-[377px] top-[136px] absolute text-black text-[27px] font-bold   leading-10">
              10
            </div>
            <div className="left-[377px] top-[192px] absolute text-black text-[27px] font-bold   leading-10">
              ROOM 6
            </div>
            <div className="left-[377px] top-[248px] absolute text-black text-[27px] font-bold   leading-10">
              Олон хүний
            </div>
            <div className="left-[377px] top-[304px] absolute text-black text-[27px] font-bold   leading-10">
              11:10 - 12:50 pm
            </div>
            <div className="left-[377px] top-[344px] absolute text-black text-[27px] font-bold   leading-10">
              1:00 - 2:10 pm
            </div>
            <div className="left-[377px] top-[384px] absolute text-black text-[27px] font-bold   leading-10">
              5:30 - 6:00 pm
            </div>
            <div className="left-[1px] top-[192px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний нэр :
            </div>
            <div className="left-[1px] top-[248px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний ангилал :
            </div>
            <div className="left-0 top-[304px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний захийлга :
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-[271px] mb-[154px]">
          <div className="w-[583px] h-[657.24px] relative ml-[86px]">
            <div className="left-0 top-0 absolute">
              <div className="w-[284px] h-[62.24px] left-0 bg-[#E0B973] rounded-md top-[579px] absolute">
                <div className="w-[202px] h-6 left-[39px] top-[20px] absolute text-white text-xl font-bold  ">
                  ЗАХИАЛГА ӨГӨХ
                </div>
              </div>
              <div className="w-[242.68px] whitespace-normal h-[135.51px] left-0 top-0 absolute text-blue-950 text-6xl font-normal custon-font-normal tracking-wide">
                ROOM 7
              </div>
            </div>
            <div className="left-0 top-[136px] absolute text-black text-[27px] font-normal   leading-10">
              Суудлийн тоо :
            </div>
            <div className="left-[377px] top-[136px] absolute text-black text-[27px] font-bold   leading-10">
              10
            </div>
            <div className="left-[377px] top-[192px] absolute text-black text-[27px] font-bold   leading-10">
              ROOM 7
            </div>
            <div className="left-[377px] top-[248px] absolute text-black text-[27px] font-bold   leading-10">
              Олон хүний
            </div>
            <div className="left-[377px] top-[304px] absolute text-black text-[27px] font-bold   leading-10">
              11:10 - 12:50 pm
            </div>
            <div className="left-[377px] top-[344px] absolute text-black text-[27px] font-bold   leading-10">
              1:00 - 2:10 pm
            </div>
            <div className="left-[377px] top-[384px] absolute text-black text-[27px] font-bold   leading-10">
              5:30 - 6:00 pm
            </div>
            <div className="left-[1px] top-[192px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний нэр :
            </div>
            <div className="left-[1px] top-[248px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний ангилал :
            </div>
            <div className="left-0 top-[304px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний захийлга :
            </div>
          </div>
          <div className="w-[859px] h-[676px] relative">
            <div className="w-[859px] h-[676px] left-0 top-0 absolute">
              <img
                className="w-[859px] h-[676px] left-0 top-0 absolute"
                src={room.src}
                alt="room"
              />
              <div className="w-[859px] h-[676px] left-0 top-0 absolute bg-blue-950 bg-opacity-30"></div>
            </div>
            <div className="w-[371.87px] h-[48.19px] left-[243.56px] top-[627.81px] absolute">
              <div className="w-[371.87px] h-[48.19px] left-0 top-0 absolute bg-white"></div>
              <div className="w-[125.04px] h-[37.91px] left-[123.41px] top-[10.28px] absolute text-center text-blue-950 text-3xl font-bold font-['Montserrat']">
                ROOM 7
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-[185px] mb-[138px]">
          <div className="w-[859px] h-[676px] relative ml-[86px]">
            <div className="w-[859px] h-[676px] left-0 top-0 absolute">
              <img
                className="w-[859px] h-[676px] left-0 top-0 absolute"
                src={room.src}
                alt="room"
              />
              <div className="w-[859px] h-[676px] left-0 top-0 absolute bg-blue-950 bg-opacity-30"></div>
            </div>
            <div className="w-[371.87px] h-[48.19px] left-[243.56px] top-[627.81px] absolute">
              <div className="w-[371.87px] h-[48.19px] left-0 top-0 absolute bg-white"></div>
              <div className="w-[125.04px] h-[37.91px] left-[123.41px] top-[10.28px] absolute text-center text-blue-950 text-3xl font-bold font-['Montserrat']">
                ROOM 8
              </div>
            </div>
          </div>
          <div className="w-[583px] h-[657.24px] relative ">
            <div className="left-0 top-0 absolute">
              <div className="w-[284px] h-[62.24px] left-0 bg-[#E0B973] rounded-md top-[579px] absolute">
                <div className="w-[202px] h-6 left-[39px] top-[20px] absolute text-white text-xl font-bold  ">
                  ЗАХИАЛГА ӨГӨХ
                </div>
              </div>
              <div className="w-[242.68px] whitespace-normal h-[135.51px] left-0 top-0 absolute text-blue-950 text-6xl font-normal custon-font-normal tracking-wide">
                ROOM 8
              </div>
            </div>
            <div className="left-0 top-[136px] absolute text-black text-[27px] font-normal   leading-10">
              Суудлийн тоо :
            </div>
            <div className="left-[377px] top-[136px] absolute text-black text-[27px] font-bold   leading-10">
              10
            </div>
            <div className="left-[377px] top-[192px] absolute text-black text-[27px] font-bold   leading-10">
              ROOM 8
            </div>
            <div className="left-[377px] top-[248px] absolute text-black text-[27px] font-bold   leading-10">
              Олон хүний
            </div>
            <div className="left-[377px] top-[304px] absolute text-black text-[27px] font-bold   leading-10">
              11:10 - 12:50 pm
            </div>
            <div className="left-[377px] top-[344px] absolute text-black text-[27px] font-bold   leading-10">
              1:00 - 2:10 pm
            </div>
            <div className="left-[377px] top-[384px] absolute text-black text-[27px] font-bold   leading-10">
              5:30 - 6:00 pm
            </div>
            <div className="left-[1px] top-[192px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний нэр :
            </div>
            <div className="left-[1px] top-[248px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний ангилал :
            </div>
            <div className="left-0 top-[304px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний захийлга :
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-[271px] mb-[339px]">
          <div className="w-[583px] h-[657.24px] relative ml-[86px]">
            <div className="left-0 top-0 absolute">
              <div className="w-[284px] h-[62.24px] left-0 bg-[#E0B973] rounded-md top-[579px] absolute">
                <div className="w-[202px] h-6 left-[39px] top-[20px] absolute text-white text-xl font-bold  ">
                  ЗАХИАЛГА ӨГӨХ
                </div>
              </div>
              <div className="w-[242.68px] whitespace-normal h-[135.51px] left-0 top-0 absolute text-blue-950 text-6xl font-normal custon-font-normal tracking-wide">
                ROOM 9
              </div>
            </div>
            <div className="left-0 top-[136px] absolute text-black text-[27px] font-normal   leading-10">
              Суудлийн тоо :
            </div>
            <div className="left-[377px] top-[136px] absolute text-black text-[27px] font-bold   leading-10">
              10
            </div>
            <div className="left-[377px] top-[192px] absolute text-black text-[27px] font-bold   leading-10">
              ROOM 9
            </div>
            <div className="left-[377px] top-[248px] absolute text-black text-[27px] font-bold   leading-10">
              Олон хүний
            </div>
            <div className="left-[377px] top-[304px] absolute text-black text-[27px] font-bold   leading-10">
              11:10 - 12:50 pm
            </div>
            <div className="left-[377px] top-[344px] absolute text-black text-[27px] font-bold   leading-10">
              1:00 - 2:10 pm
            </div>
            <div className="left-[377px] top-[384px] absolute text-black text-[27px] font-bold   leading-10">
              5:30 - 6:00 pm
            </div>
            <div className="left-[1px] top-[192px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний нэр :
            </div>
            <div className="left-[1px] top-[248px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний ангилал :
            </div>
            <div className="left-0 top-[304px] absolute text-black text-[27px] font-normal   leading-10">
              Өрөөний захийлга :
            </div>
          </div>
          <div className="w-[859px] h-[676px] relative">
            <div className="w-[859px] h-[676px] left-0 top-0 absolute">
              <img
                className="w-[859px] h-[676px] left-0 top-0 absolute"
                src={room.src}
                alt="room"
              />
              <div className="w-[859px] h-[676px] left-0 top-0 absolute bg-blue-950 bg-opacity-30"></div>
            </div>
            <div className="w-[371.87px] h-[48.19px] left-[243.56px] top-[627.81px] absolute">
              <div className="w-[371.87px] h-[48.19px] left-0 top-0 absolute bg-white"></div>
              <div className="w-[125.04px] h-[37.91px] left-[123.41px] top-[10.28px] absolute text-center text-blue-950 text-3xl font-bold font-['Montserrat']">
                ROOM 9
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[21px] justify-center mt-[280px] mb-[160px]">
        <div className="cursor-pointer">
          <PaggiL />
        </div>
        <div className="cursor-pointer">
          <PaggiR />
        </div>
      </div>
    </div>
  </>
);
