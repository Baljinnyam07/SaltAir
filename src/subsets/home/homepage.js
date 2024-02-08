import { Book, PaggiL, PaggiR, Scroll } from "@/assets";
import headerBg from "@/assets/pics/headerBg.png";
import saltAir from "@/assets/pics/saltAirImage.png";
import salbar from "@/assets/pics/salbarImage.png";

export const HomePage = () => (
  <>
    <div className="h-[1083px]">
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
      <div className="text-blue-950 text-4xl font-normal px-[420px] py-[60px]">
        Top contents over here ... Top contents over here ...
      </div>
      <div className="px-[140px]">
        <div className="w-[1569.50px] h-[582px] relative mb-[80px]">
          <div className="w-[542px] h-[350px] top-[111px] absolute border-[#14274A] border-l-[2px]">
            <div className="w-[236px] h-[63px] left-0 ml-[48.5px] top-[286px] absolute bg-[#E0B973] rounded-[10px]">
              <div className="left-[51px] top-[20px] absolute text-white text-xl font-normal font-['Montserrat'] tracking-wide">
                ЦААШ ҮЗЭХ
              </div>
            </div>
            <div className="left-0 top-[97px] ml-[48.5px] absolute text-blue-950 text-[25px] font-normal font-['Montserrat'] leading-10">
              Our rooms are designed to transport <br />
              you into an environment made for leisure. <br />
              Take your mind off the day-to-day of home <br />
              life and find a private paradise for yourself.
            </div>
            <div className="left-0 top-0 ml-[48.5px] absolute text-blue-950 text-6xl font-normal font-['Abhaya Libre'] tracking-wide">
              Salt-air{" "}
            </div>
          </div>
          <img
            className="w-[868px] h-[582px] left-[701.50px] top-0 absolute"
            src={saltAir.src}
            alt="Salt Air"
          />
        </div>
        <div className="w-[1570.50px] h-[487px] relative">
          <div className="w-[522px] h-[449px]  top-[11px] absolute border-[#14274A] border-l-[2px]">
            <div className="w-[236px] h-[63px] ml-[48.5px] left-0 top-[386px] absolute bg-[#E0B973] rounded-[10px]">
              <div className="left-[51px]  top-[20px] absolute text-white text-xl font-normal tracking-wide">
                ЦААШ ҮЗЭХ
              </div>
            </div>
            <div className="left-0 ml-[48.5px] top-[156px] absolute font-['Montserrat'] text-[#14274A] text-[25px] font-[400] leading-10">
              We love life at the beach. Being close
              <br />
              to the ocean with access to endless sandy
              <br />
              beach ensures a relaxed state of mind. It <br />
              seems like time stands still watching the <br />
              ocean.{" "}
            </div>
            <div className="left-0 ml-[48.5px] top-0 absolute text-blue-950 text-[60px] font-[400] tracking-wide">
              Шинэ салбар
            </div>
          </div>
          <img
            className="w-[865px] h-[484px] left-[704.50px] top-[3px] absolute"
            src={salbar.src}
            alt="Salbar Image"
          />
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
