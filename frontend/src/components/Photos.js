import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import React from "react";
import { getAllVisiblePhotos } from "./../services/photoServices";
import { useQuery } from "@tanstack/react-query";
import "./Photos.css";
import Photo from "./Photo";
function Photos() {
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ["photos"],
    queryFn: getAllVisiblePhotos,
    staleTime: 5000,
    refetchInterval: 60000,
  });

  return (
    <div className="photos__container">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={60}
        slidesPerView={1}
        autoplay={true}
        speed={2000}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data?.images?.map((item) => (
          <SwiperSlide key={item.id}>
            <Photo
              path={"http://localhost:4000/images/" + item.path}
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
