import { urlPath } from "./urlService";
export const getAllVisiblePhotos = async () => {
  const response = await fetch(urlPath + "photos");

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return await response.json();
};

export const getAllPhotos = async () => {
  const response = await fetch(urlPath + "admin/photos/all");

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  return await response.json();
};

export const uploadPhoto = async (data) => {
  // const dataJson = JSON.stringify(data);
  console.log(typeof data);
  const response = await fetch(urlPath + "photos/upload", {
    method: "POST",

    body: data,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.text();
};
