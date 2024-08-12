import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./kvideo.mp4";

function Home() {
  const videoRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const video = videoRef.current;

    // Play the video and unmute after a short delay
    video.play().then(() => {
      setTimeout(() => {
        video.muted = false;
      }, 1000);
    });
  }, []);

  const handleVideoEnd = () => {
    navigate("/new-page"); // Replace "/new-page" with your desired route
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        muted
        autoPlay
        loop={false} // Set loop to false if you want it to play once
        className="absolute top-0 left-0 w-full h-full object-cover"
        onEnded={handleVideoEnd}
      >
        <source src={logo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
