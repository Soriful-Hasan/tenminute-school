"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { getData } from "@/libs/getData";

export default  function PlayVideo() {
  const videos = [
    {
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_1/hqdefault.jpg",
      url: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_1",
    },
    {
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_2/hqdefault.jpg",
      url: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_2",
    },
    {
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_2/hqdefault.jpg",
      url: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_3",
    },
    {
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_2/hqdefault.jpg",
      url: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_4",
    },
    {
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_2/hqdefault.jpg",
      url: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_5",
    },
    {
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_2/hqdefault.jpg",
      url: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_6",
    },
    {
      thumbnail: "https://img.youtube.com/vi/YOUTUBE_VIDEO_ID_2/hqdefault.jpg",
      url: "https://www.youtube.com/embed/YOUTUBE_VIDEO_ID_7",
    },
  ];
  
  //   const data = await getData();
  //   const media = data.data;
  //   console.log(media);

  const [activeVideo, setActiveVideo] = useState(videos[0].url);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Video with overlay controls */}
      <div className="relative w-full aspect-video mb-4">
        <iframe
          src={activeVideo}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
        ></iframe>

        {/* Navigation buttons */}
        <div className="absolute top-1/2 left-0  ml-2 -translate-y-1/2 z-10 ">
          <button
            className="bg-white text-black p-2 rounded-full shadow"
            onClick={() => {
              const index = videos.findIndex((v) => v.url === activeVideo);
              if (index > 0) setActiveVideo(videos[index - 1].url);
            }}
          >
            <IoIosArrowBack />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 mr-2 -translate-y-1/2 z-10">
          <button
            className="bg-white text-black p-2 rounded-full shadow"
            onClick={() => {
              const index = videos.findIndex((v) => v.url === activeVideo);
              if (index < videos.length - 1)
                setActiveVideo(videos[index + 1].url);
            }}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      {/* Thumbnail slider below */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        modules={[Thumbs]}
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <img
              src={video.thumbnail}
              alt="video"
              className={`cursor-pointer border-2 ${
                activeVideo === video.url
                  ? "border-green-500"
                  : "border-transparent"
              }`}
              onClick={() => setActiveVideo(video.url)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
