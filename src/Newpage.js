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

      <p className="font-bold text-2xl my-10 text-black/70">
        Don’t break your streak
      </p>

      {/* socials */}
      <div className="flex  gap-5 mb-10 bg-[#7ac70c] rounded-full px-8 py-3">
        <div>
          {/* <img src={logo} alt="dd" /> */}
          <a href="https://x.com/duoonsol">
            <XIcon fontSize="large" />
          </a>
          {/* <p>twitter</p> */}
        </div>
        <div>
          {/* <a href="">

          </a> */}
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
