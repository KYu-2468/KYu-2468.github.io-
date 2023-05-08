"use client";

import React, { useState } from "react";
import KevinAvatar from "./KevinAvatar";
import ContactButton from "./Button/ContactButton";
import "./Landing.css";
import { TypeAnimation } from "react-type-animation";
const profileImg = "./img/profile-img.png";

const Landing = () => {
  const [is3DModelActivated, setIs3DModelActivated] = useState(false);
  function handle3DModelActivation() {
    setIs3DModelActivated(!is3DModelActivated);
  }
  return (
    <>
      <div className="flex h-full pt-24">
        <div className="flex items-center justify-center w-1/2">
          {is3DModelActivated ? <KevinAvatar /> : <Image />}
        </div>
        <div className="flex flex-col items-center w-1/2 h-full px-2 pt-12 text-2xl">
          <div className="h-24 md:w-1/2">
            <TypeAnimation
              className="text-xl md:text-3xl"
              sequence={[
                "👋 Hey there!",
                2000,
                "👈 I am Kevin",
                2000,
                "I am driven and enthusiastic 🧠",
                1000,
                "I am a full stack engineer 📱",
                2000,
                "I am fueled by curiosity and passion 🧐",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <div className="flex flex-col items-center w-1/2 mt-12 space-y-6 md:justify-evenly">
            <button
              onClick={handle3DModelActivation}
              className="font-bold text-white bg-green-500 btn-primary"
            >
              {is3DModelActivated ? "Stop" : "Start"} 3D
            </button>
            <ContactButton
              text="Linkedin"
              textColor="text-white"
              buttonColor="bg-sky-600"
              linkURL="https://www.linkedin.com/in/kevinyu2468/"
            />

            <ContactButton
              text="GitHub"
              textColor="text-white"
              buttonColor="bg-black"
              linkURL="https://github.com/KYu-2468"
            />

            <ContactButton
              text="LeetCode"
              textColor="text-white"
              buttonColor="bg-red-600"
              linkURL="https://leetcode.com/KYu-2468/"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Image = () => {
  return (
    <div className="flex items-center justify-center w-full md:ml-8">
      <img
        className="w-4/5 shadow-lg md:w-full shadow-black rounded-xl xl:w-4/5"
        src={profileImg}
        alt="profile"
      />
    </div>
  );
};

export default Landing;