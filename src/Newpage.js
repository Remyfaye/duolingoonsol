import React from "react";
import logo from "./logo.svg";
import XIcon from "@mui/icons-material/X";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import InstagramIcon from "@mui/icons-material/Instagram";

function Newpage() {
  return (
    <div className="flex bg-no-repeat bg-cover bg-[url('./bg.jpg')] flex-col justify-center items-center h-[100vh]">
      <h1 className="font-bold text-2xl">FOUR HORSEMEN OF SOLANA</h1>
      <h1 className="font-bold text-xl text-purple-500 font-worksans my-5">
        $FHOS
      </h1>
      <div className="flex gap-5 ">
        <button className="border-2 border-purple-400 px-5 py-2 rounded-xl ">
          Buy $FHOS
        </button>
        <button className="border-2 border-purple-400 px-5 py-2 rounded-xl">
          Socials
        </button>
      </div>

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
