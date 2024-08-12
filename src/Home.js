import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./kvideo.mp4";

function Home() {
  const videoRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!isMuted) {
      alert("false");
      video
        .play()
        .then(() => {
          setIsMuted(false);
          setTimeout(() => {
            video.muted = false; // Unmute after a short delay
          }, 2000);
        })
        .catch((error) => {
          console.error("Autoplay was prevented:", error);
        });
    } else {
      alert("true");

      video.muted = true; // Ensure the video is muted to prevent autoplay blocking
      //   video
      //     .play()
      //     .then(() => {

      //       //   setIsMuted(false);
      //       //   // setTimeout(() => {
      //       //   video.muted = false; // Unmute after a short delay
      //       //   // }, 2000);
      //     })
      //     .catch((error) => {
      //       console.error("Autoplay was prevented:", error);
      //     });
      //   if (!isMuted) {
      //     video.muted = false;
      //   }
    }
  }, []);

  const handleVideoEnd = () => {
    navigate("/new-page"); // Replace "/new-page" with your desired route
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* <video
        // ref={videoRef}
        autoplay
        muted
        loop // Set loop to false if you want it to play once
        className="absolute top-0 left-0 w-full h-full object-cover"
        onEnded={handleVideoEnd}
        onError={(e) => console.error("Video playback error:", e)}
      >
        <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <button
        className={
          isMuted
            ? "relative z-50 bg-red-400 top-10 left-10 p-3 rounded-xl "
            : "relative z-50 bg-blue-400 top-10 left-10 p-3 rounded-xl"
        }
        onClick={() => setIsMuted(!isMuted)}
      >
        {isMuted ? "unmute" : "mute"}
      </button>
      <video
        ref={videoRef}
        onEnded={handleVideoEnd}
        autoPlay
        loop={false}
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
