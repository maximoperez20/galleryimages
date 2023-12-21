import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllPhotos } from "../../services/photoServices";
import PhotoCard from "./Photo/PhotoCard";
import LoadingFullScreen from "./../UI/LoadingFullScreen";
import { urlPath } from "../../services/urlService";
import Filter from "./Filter";

function ManagePhotos() {
  const [filter, setFilter] = useState("all");
  const { data, isError, error, isFetching } = useQuery({
    queryKey: ["photos"],
    queryFn: getAllPhotos,
    staleTime: 5000,
    refetchInterval: 60000,
  });

  useEffect(() => {
    handleFilterChange(filter);
  }, [data]);

  const handleFilterChange = (condition) => {
    let visibleCondition;
    switch (condition) {
      case "visible":
        setFilter("visible");
        visibleCondition = 1;
        break;
      case "pending":
        setFilter("pending");
        visibleCondition = 0;
        break;
      case "rejected":
        setFilter("rejected");
        visibleCondition = 2;
        break;
      case "all":
        setFilter("all");
        setFilteredData(data);
        return;
        break;
      default:
        break;
    }
    setFilteredData(() => {
      const newArray = data.images.filter(
        (item) => item.visible == visibleCondition
      );
      console.log(newArray);
      return { images: newArray };
    });
  };

  const [filteredData, setFilteredData] = useState();
  return (
    <div>
      <Filter onSelect={handleFilterChange} />
      {isFetching && <LoadingFullScreen />}

      {filteredData?.images?.map((item) => (
        <PhotoCard
          key={item.id}
          path={urlPath + "images/" + item.path}
          description={item.description}
          id={item.id}
          status={item.visible}
        />
      ))}
    </div>
  );
}

export default ManagePhotos;
