import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllPhotos } from "../../services/photoServices";
import PhotoCard from "./Photo/PhotoCard";
import LoadingFullScreen from "./../UI/LoadingFullScreen";

function ManagePhotos() {
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ["photos"],
    queryFn: getAllPhotos,
    staleTime: 5000,
    refetchInterval: 60000,
  });
  return (
    <div>
      {isFetching && <LoadingFullScreen />}

      {data?.images?.map((item) => (
        <PhotoCard
          path={"http://localhost:4000/images/" + item.path}
          description={item.description}
          id={item.id}
          status={item.visible}
        />
      ))}
    </div>
  );
}

export default ManagePhotos;
