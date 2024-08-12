import React from "react";
import XIcon from "@mui/icons-material/X";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import image from "./duo.jpg";

function Newpage() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="font-bold text-2xl"> $Duo on sol</h1>

      <img className="w-[200px] h-[200px] object-contain" src={image} alt="" />

      <p className="font-bold text-2xl my-5">Don’t break your streak</p>

      <button className="bg-[#7ac70c] shadow-xl  w-[50%] text-white  px-5 py-2 rounded-xl ">
        Get Started
      </button>

      {/* socials */}
      <div className="flex  gap-5 my-10 bg-purple-600 rounded-full px-8 py-2">
        <div>
          {/* <img src={logo} alt="dd" /> */}
          <XIcon fontSize="large" />
          {/* <p>twitter</p> */}
        </div>
        <div>
          {/* <img src={logo} alt="dd" />
          <p>facebook</p> */}
          <FacebookSharpIcon fontSize="large" />
        </div>
        <div>
          {/* <img src={logo} alt="dd" />
          <p>telegram</p> */}
          <InstagramIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Newpage;
