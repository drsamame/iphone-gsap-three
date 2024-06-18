import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import VideoCarousel from "./VideoCarousel";
import { rightImg, watchImg } from "../utils";

const Hightlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
    });
  });
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the hightlights
          </h1>
          <div className="flex flex-wrap md:flex items-end gap-5">
            <p className="link">
              Watch de the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch de the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};
export default Hightlights;
