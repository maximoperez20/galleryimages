import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React from "react";
import { getAllVisiblePhotos } from "./../services/photoServices";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./UI/LoadingSpinner";
import "./Photos.css";
import Photo from "./Photo";
import LoadingFullScreen from "./UI/LoadingFullScreen";
import { urlPath } from "../services/urlService";
function Photos() {
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ["photos"],
    queryFn: getAllVisiblePhotos,
    staleTime: 30000,
  });

  return (
    <div className="photos__container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={60}
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        delay
        speed={2000}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.images?.map((item) => (
          <SwiperSlide key={item.id}>
            <Photo
              path={urlPath + "images/" + item.path}
              description={item.description}
              date={item.date}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Photos;
