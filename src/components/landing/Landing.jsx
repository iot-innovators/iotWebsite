import "./Landing.css";
import groupPhoto from "../../assets/Photo/Group.png";
import second from "../../assets/Photo/p22.png";
import first from "../../assets/Photo/Group-3.png";
import Logo from "../../assets/iotlogo.png";

export function Landing() {
  return (
    <>
      <div className="text-white h-[100vh]  pt-20 flex  px-10 md:px-24">
        <div className="md:px-20  md:justify-center  md:w-[70%] ">
          <h1 className="md:text-[88px]   font-bold md:leading-[90px] text-[#75BF43] items-center ">
            Ignite IoT
          </h1>
          <h1 className="md:text-[89px]  font-bold md:leading-[90px] items-center ">
            {" "}
            Innovation{" "}
          </h1>
          <h1 className="md:text-[90px]  font-bold md:leading-[90px] text-[#01264a] items-center ">
            Together
          </h1>
        </div>
        <div className="relative   h-max hidden  ">
          <div className=" p-16 hidden ">
            <img src={groupPhoto} alt="Group" className="border-[8px] md:hidden sm:hidden " />
            <img
              src={second}
              alt="Group"
              className="border-[8px] absolute top-3 w-[35%] -rotate-12 left-0"
            />
            <img
              src={first}
              alt="Group"
              className="border-[8px] absolute  w-[35%]  -rotate-12   bottom-3 right-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
