import React from "react";
import XIcon from "@mui/icons-material/X";
// import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import image from "./duo.jpg";
import ds from "./ds.png";

function Newpage() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <h1 className="font-bold text-[#7ac70c] text-2xl"> $Duo on sol</h1>

      <img className="w-[200px] h-[200px] object-contain" src={image} alt="" />

      <p className="font-bold text-2xl my-10 text-black/70">
        Don’t break your streak
      </p>

      {/* socials */}
      <div className="flex  gap-5 mb-10  px-8 py-3">
        <a
          className="flex  gap-5 mb-10 bg-[#7ac70c] rounded-full p-3"
          href="https://x.com/duoonsol"
        >
          <XIcon fontSize="large" />
        </a>
        <a
          className="flex  gap-5 mb-10 bg-[#7ac70c] rounded-full p-3"
          href="https://t.me/duolingosol"
        >
          <TelegramIcon fontSize="large" />
        </a>
        <a
          className="flex  gap-5 mb-10 bg-[#7ac70c] rounded-full p-3"
          href="https://dexscreener.com/solana/gyvzupss2fwxau3csh6n79wm9yw8zi9tqk6i8j7v8zue"
        >
          <img className="w-[30px] h-[30px]" src={ds} alt="ss" />
        </a>
      </div>
    </div>
  );
}

export default Newpage;
