import React from "react";
import { BsEnvelopeAt, BsInstagram, BsLinkedin } from "react-icons/bs";
import {Members} from './SteeringData'
import A from "../../assets/team/Aashish.png";
import B from "../../assets/team/Biroshan.png";
import D from "../../assets/team/Dipen.png";
import Na from "../../assets/team/Naresh.png";
import Ni from "../../assets/team/Nigma.png";
import R from "../../assets/team/Radhika.png";
import S from "../../assets/team/Sanam.png";
import Di from "../../assets/team/Dipesh_Shrestha.png";
import steeringData from "./SteeringData";
import ImgSlider from "./ImgSlider";

const Team = () => {
  const iconMap = {
    BsEnvelopeAt: BsEnvelopeAt,
    BsInstagram: BsInstagram,
    BsLinkedin: BsLinkedin,
  };

  return (
    <div className="px-10 md:px-24">
      <h1 className="flex justify-center flex-col md:flex-row items-center font-bold  text-4xl text-white mb-10">
        <p> Meet Our </p>
        <p>Team</p>
      </h1>

      <div className="flex justify-center gap-20 flex-col">
        <div className="flex flex-col items-center gap-2 ">
          <img
            src={Di}
            alt="Dev_Head"
            className="h-[180px]  object-cover border-[2px]"
          />
          <div className="flex items-center flex-col ">
            <p className="font-medium">Mr.Dipesh Shrestha</p>
            <p className="">DevCorps Head</p>
          </div>

          <div className="flex gap-3 ">
            <a
              href="mailto:dipesh.shrestha@heraldcollege.edu.np"
              target="_blank"
            >
              <BsEnvelopeAt className="text-white hover:text-gray-400 size-4 " />
            </a>
            <a
              href="https://www.instagram.com/username__dipesh.sh/"
              target="_blank"
            >
              <BsInstagram className="text-white size-4 hover:text-gray-400  " />
            </a>
            <a
              href="https://www.linkedin.com/in/dipeshshrestha1221/"
              target="_blank"
            >
              <BsLinkedin className="text-white size-4 hover:text-gray-400 " />
            </a>
          </div>
        </div>

        <div className="flex flex-col  items-center gap-2">
          <img
            src={Di}
            alt="Dev_Head"
            className="h-[180px]  object-cover border-[2px]"
          />

          <div className="flex items-center flex-col ">
            <p className="font-medium">Mr.Dipesh Shrestha</p>
            <p className="">DevCorps Head</p>
          </div>

          <div className="flex gap-3 ">
            <a
              href="mailto:dipesh.shrestha@heraldcollege.edu.np"
              target="_blank"
            >
              <BsEnvelopeAt className="text-white hover:text-gray-400 size-4 " />
            </a>
            <a
              href="https://www.instagram.com/username__dipesh.sh/"
              target="_blank"
            >
              <BsInstagram className="text-white size-4 hover:text-gray-400  " />
            </a>
            <a
              href="https://www.linkedin.com/in/dipeshshrestha1221/"
              target="_blank"
            >
              <BsLinkedin className="text-white size-4 hover:text-gray-400 " />
            </a>
          </div>
        </div>
      </div>

      {/*  */}

      <div>
        <h1 className="font-semibold text-3xl text-center text-white">
          Our Steering Leaders
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {steeringData.map((st, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <img
                src={st.image}
                alt="steering"
                className="object-cover border-[2px]"
              />
              <div className="flex flex-col items-center">
                <p className="font-medium">{st.Post}</p>
                <p>{st.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*  */}

      <ImgSlider images={Members} autoPlayInterval={3000} imagesToShow={3} />

    </div>
  );
};

export default Team;
