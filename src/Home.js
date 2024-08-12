import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./kvideo.mp4";
import image from "./duo.jpg";

function Home() {
  const videoRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate
  //   const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    video.muted = false;
    video.play();
    setIsPlaying(true);
  };
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  //   useEffect(() => {
  //     const video = videoRef.current;
  //     if (!isMuted) {
  //       alert("false");
  //       video
  //         .play()
  //         .then(() => {
  //           setIsMuted(false);
  //           setTimeout(() => {
  //             video.muted = false; // Unmute after a short delay
  //           }, 500);
  //         })
  //         .catch((error) => {
  //           console.error("Autoplay was prevented:", error);
  //         });
  //     } else {
  //       alert("true");

  //       video.muted = true; // Ensure the video is muted to prevent autoplay blocking
  //     }
  //   }, []);

  const handleVideoEnd = () => {
    navigate("/new-page"); // Replace "/new-page" with your desired route
  };

  return (
    <>
      {!isVideoPlaying ? (
        <div className="flex flex-col justify-center items-center h-[90vh]">
          <h1 className="font-bold text-[#7ac70c] text-2xl my-3">
            {" "}
            $Duo on sol
          </h1>

          <img
            className="w-[200px] h-[200px] object-contain"
            src={image}
            alt=""
          />

          <p className="font-bold font-poppins text-3xl my-10 text-black/70">
            Don’t break your streak
          </p>

          <button
            onClick={() => setIsVideoPlaying(true)}
            className="bg-[#7ac70c] shadow-3xl text-xl  w-[60%] text-white  px-5 py-3 rounded-xl "
          >
            Get Started
          </button>
        </div>
      ) : (
        <div className="relative w-full h-screen overflow-hidden">
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute z-10 text-white bg-black p-4 rounded"
            >
              unmute
            </button>
          )}
          <video
            ref={videoRef}
            muted={!isPlaying} // Initially muted
            autoPlay // Autoplay only after interaction
            className="absolute top-0 left-0 w-full h-full object-cover"
            onEnded={handleVideoEnd}
            controls
          >
            <source src={logo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </>
  );
}

export default Home;
