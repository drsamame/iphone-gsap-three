import { useState } from "react";
import { hightlightsSlides } from "../constans";
import { useRef } from "react";
import { useEffect } from "react";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const [loadedData, setLoadedData] = useState([]);

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({ ...prev, startPlay: true, isPlaying: true }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (i, e) => setLoadedData((prev) => [...prev, e]);

  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {},
        onComplete: () => {},
      });
    }
  }, [videoId, startPlay]);

  const handleProccess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({
          ...pre,
          isEnd: true,
          videoId: i + 1,
        }));
        break;
      case "video-last":
        setVideo((pre) => ({
          ...pre,
          isLastVideo: true,
        }));
        break;
      case "video-reset":
        setVideo((pre) => ({ ...pre, isLastVideo: 0, videoId: 0 }));
        break;
      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !prev.isPlaying }));
        break;
      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                  onLoadedMetadata={(e) => handleLoadedMetadata(i, e)}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text, i) => (
                  <p key={text} className="md:text-xl text-xl">
                    {text}
                  </p>
                ))}
              </div>
              <div className="relative flex-center mt-10">
                <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
                  {videoRef.current.map((_, i) => (
                    <span
                      key={i}
                      ref={(el) => (videoDivRef.current[i] = el)}
                      className="mx-2 w-3 h-3 rounded-full bg-gray-200 relative cursor-pointer"
                    >
                      <span
                        className="absolute h-full w-full rounded-full "
                        ref={(el) => (videoSpanRef.current[i] = el)}
                      />
                    </span>
                  ))}
                </div>
                <button className="control-btn">
                  <img
                    src={
                      isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg
                    }
                    alt={isLastVideo ? "replay" : !isPlaying ? "Play" : "Pause"}
                    onClick={
                      isLastVideo
                        ? () => handleProccess("video-reset")
                        : !isPlaying
                        ? () => handleProccess("play")
                        : () => handleProccess("pause")
                    }
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
