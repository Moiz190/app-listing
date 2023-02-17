import React from "react";
import myImg from "../assets/images/pattern.svg"
import dp from "../assets/images/dp.jpeg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faAnchor,faAngleUp,faHeart,faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";

const User = () => {
  return (
    <div>
      <div className="relative">
        <img src={myImg} alt="pattern" className="w-full " />

        <div className="hidden md:flex absolute bottom-5 items-center right-5 bg-gray-900/50 p-5 rounded-full w-56 justify-evenly">
          <span className=" text-white cursor-pointer">
          <FontAwesomeIcon icon={faGlobe} size="xl" />
          </span>

          <span className="text-white cursor-pointer">
          <FontAwesomeIcon icon={faGithub} size="xl" />
          </span>

          <span className="text-white cursor-pointer">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
          </span>

          <span className="text-white cursor-pointer">
          <FontAwesomeIcon icon={faTwitter} size="xl" />
          </span>
        </div>

        <div className="absolute w-24 md:w-48 md:-bottom-24 border-2 -bottom-12 -translate-x-1/2 left-1/2 rounded-full ">
          <img className="rounded-full" src={dp} alt="User Profile" />

          <span className="absolute bg-black text-white text-sm md:text-md -translate-x-1/2 left-1/2 -bottom-4 w-16 md:w-24 text-center py-1 rounded-full">
            701 XP
          </span>
        </div>
      </div>

      <div className="bg-gradient-to-t pt-[8rem] pb-5 from-white to-gray-100 text-center flex justify-center items-center flex-col">
        <div className="mt-10 max-w-xs md:max-w-sm">
          <div className="leading-loose">
            <span className="text-4xl font-bold">nirbhik.eth</span>
          </div>
          <div className="leading-loose">
            <span className="text-lg line-clamp-4">Building thedaspplist.com Building thedaspplist.com Building thedaspplist.com Building thedaspplist.com Building thedaspplist.com Building thedaspplist.com</span>
          </div>
          <div className="my-5 max-w-[300px] mx-auto bg-black text-white py-4 rounded-full border-2 flex justify-center">
            <span className="text-xl">0x1786...A583</span>
            <span className="ml-4 cursor-pointer">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1.5"
              >
                <path
                  d="M15.5 20H5.5V7C5.5 6.45 5.05 6 4.5 6C3.95 6 3.5 6.45 3.5 7V20C3.5 21.1 4.4 22 5.5 22H15.5C16.05 22 16.5 21.55 16.5 21C16.5 20.45 16.05 20 15.5 20ZM20.5 16V4C20.5 2.9 19.6 2 18.5 2H9.5C8.4 2 7.5 2.9 7.5 4V16C7.5 17.1 8.4 18 9.5 18H18.5C19.6 18 20.5 17.1 20.5 16ZM18.5 16H9.5V4H18.5V16Z"
                  fill="white"
                ></path>
              </svg>
            </span>
          </div>
        </div>

        <div className="flex px-2 flex-col md:mt-4 md:flex-row max-w-[50rem] items-center w-full mx-auto justify-center md:justify-between">
          <div className="max-w-xs w-3/4 my-3">
            <span className="flex gap-2 justify-between md:justify-center text-center">
              <span className="ml-1 self-center text-gray-500">
              <FontAwesomeIcon icon= {faAnchor} />
              </span>
              Hunted Projects
              <span className="bg-gray-100 self-center px-3 rounded-full">32</span>
            </span>
          </div>

          <div className="max-w-xs w-3/4 my-3">
            <span className="flex gap-2 justify-between md:justify-center text-center">
              {" "}
              <span className="bg-gray-500 w-6 h-6 rounded-full self-center text-white">
              <FontAwesomeIcon icon={faAngleUp} size="xs" />
              </span>
              Voted Projects
              <span className="bg-gray-100 self-center px-3 rounded-full">177</span>
            </span>
          </div>

          <div className="max-w-xs w-3/4 my-3">
            <span className="flex gap-2 justify-between md:justify-center text-center">
              <span className="self-center ml-1 text-gray-500">
              <FontAwesomeIcon icon= { faHeart } />

              </span>
              Liked Projects
              <span className="bg-gray-100 px-3 self-center rounded-full">55</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
